//A set of tools for making recursion more useful by anticipating what it will need

export class Recursion{

    constructor(transformation){

    }

    transform(transformation){
        return transform
    }

    from(object){
        //returns a destructured object as an object tree
        //so no matter what the object is, we should know how to destructure it using brass tacks analysis
    }

    to(){

    }
    matrix(){

    }

    iterSliceSkip(){
        //
    }
    iterSliceMerge(){

    }
    iterSliceDiff(){

    }

    sanitize(strOrArr){
        if(Array.isArray(strOrArr)){
            strOrArr = strOrArr.join("")
            return strOrArr
        }else if(typeof strOrArr === 'string'){
            return strOrArr
        }else{
            throw Error('set must be of type array or string')
        }
    }

    iterJSlice(strOrArr, i=0, j=1, iter=[]){
        if(j==strOrArr.length+1){return}
        strOrArr=this.sanitize(strOrArr)
        var slice = strOrArr.slice(i, j)
        if(slice && slice.length){iter.push(slice)}
        j++;
        this.iterJSlice(strOrArr, i, j, iter)
        return iter
    }

    reverseIterJSlice(strOrArr, i=0, j=1, iter=[]){
        if(j==i){return}
        strOrArr=this.sanitize(strOrArr)
        var slice = strOrArr.slice(i, j)
        if(slice && slice.length){iter.push(slice)}
        j--;
        this.reverseIterJSlice(strOrArr, i, j, iter)
        return iter
    }

    iterJSliceRotate(strOrArr, i=0, j=1, r=1, n=set.length, array=[]){
        if(n==0){return []}
        var slice;

        strOrArr=this.sanitize(strOrArr)
        slice = strOrArr.slice(i, j)

        if(slice&&slice.length){
            array.push(slice)
        }

        strOrArr = this.rotate(strOrArr, r)
        j++;
        n--;
        this.iterJSliceRotate(strOrArr, i, j, r, n, array)
        return array
    }

    iterIJSliceRotate(set, i=0, j=1, r=1, n=set.length, array=[]){
        if(n==0){return []}
        var slice;
        if(Array.isArray(set)){
            set = set.join("")
        }
        slice = set.slice(i, j)

        if(slice&&slice.length){
            array.push(slice)
        }

        set = this.rotate(set, r)
        i++
        j++;
        n--;
        this.iterIJSliceRotate(set, i, j, r, n, array)
        return array
    }

    reverseIterIJSliceRotate(set, i=0, j=1, r=1, n=set.length, array=[]){
        if(n==0){return []}
        var slice;
        if(Array.isArray(set)){
            set = set.join("")
        }
        slice = set.slice(i, j)

        if(slice&&slice.length){
            array.push(slice)
        }

        set = this.rotate(set, r)
        i--;
        j--;
        n--;
        this.iterIJSliceRotate(set, i, j, r, n, array)
        return array
    }

    iterJSliceRotateSwap(set,  i=0, j=1, r=1, n=set.length, s=1, array=[]){
        if(j==set.length){
            j=j-i;
            i=0;
        }
        if(n==0){return []}
        var slice;
        if(Array.isArray(set)){
            set = set.join("")
        }
        slice = set.slice(i, j)
        
        if(slice&&slice.length){
            array.push(slice)
        }

        set = this.rotate(set, r)
        set = this.swap(set, i, s)
        j++;
        n--;
        this.iterJSliceRotateSwap(set, i, j, r, n, s, array)
        return array
    }

    iterIJSliceRotateSwap(set,  i=0, j=1, r=1, n=set.length, s=1, array=[]){
        if(j==set.length){
            j=j-i;
            i=0;
        }
        if(n==0){return []}
        var slice;
        if(Array.isArray(set)){
            set = set.join("")
        }
        slice = set.slice(i, j)

        if(slice&&slice.length){
            array.push(slice)
        }

        set = this.rotate(set, r)
        set = this.swap(set, i, s)
        i++;
        j++;
        n--;
        this.iterIJSliceRotateSwap(set, i, j, r, n, s, array)
        return array
    }

    iterIJSSliceRotateSwap(set, i=0, j=1, r=1, n=set.length, s=1, array=[]){
        if(j==set.length){
            j=j-i;
            i=0;
        }
        if(n==0){return []}
        var slice;
        if(Array.isArray(set)){
            set = set.join("")
        }
        slice = set.slice(i, j)

        if(slice&&slice.length){
            array.push(slice)
        }

        set = this.rotate(set, r)
        set = this.swap(set, i, s)
        i++;
        j++;
        s++;
        n--;
        this.iterIJSSliceRotateSwap(set, i, j, r, n, s, array)
        return array
    }

    //this needs a recursive key pattern and a payload key pattern
    paths(tree, path=[], _paths=[], pk=['payload']){
        var rKeys=[]
        Object.keys(tree).forEach((key)=>{
            if(!pk.includes(key)){
                rKeys.push(key)
            }
        })
        if(!rKeys.length){
            _paths.push(path)
            return
        }else{
            for(var i = 0; i<rKeys.length; i++){
                if(Array.isArray(tree[rKeys[i]])){
                    for(var j = 0; j<tree[rKeys[i]].length; j++){
                        var _path=[].concat(path).concat({[rKeys[i]]: undefined})
                        this.paths(tree[rKeys[i]][j], _path, _paths)
                    }
                }else if(typeof tree[rKeys[i]] === 'object'){
                    var _path=[].concat(path).concat({[rKeys[i]]: tree[rKeys[i]]['payload']})
                    this.paths(tree[rKeys[i]], _path, _paths)
                }
            }
        }
        return _paths
    }    

    validate(tree, path, n=0, invalid=[false]){
        if((!tree)||!path||n<0||!invalid.length){
            invalid[0]=true
            return !invalid[0]
        }else{
            if((n>path.length-1) || invalid[0]){
                return
            }
            if(Array.isArray(tree)){
                
                for(var i=0; i<tree.length; i++){
                    var key = Object.keys(path[n])[0]
                    if(tree[i][key]){
                        return this.validate(tree[i][key], path, n+1, invalid)  //short circuit when valid
                    }
                }
                invalid[0]=true
                return
            }else if(typeof tree === 'object'){
    
                var key = Object.keys(path[n])[0]
                if(tree[key]){
                    this.validate(tree[key], path, n+1, invalid)
                }else{
                    invalid[0]=true
                    return
                }
            }else{
                invalid[0]=true
                return
            }
        }
        
        return !invalid[0]
    }

    DivSetBaseTree(set, n, tree={}){
        if(set.length==n){
            tree[set.slice(0, n)]=set.slice(0, n)
            return
        }else if(set.length==n-1){
            tree[set.slice(0, n-1)]=set.slice(0, n-1)
            return
        }else if(set.length==2){
            tree[set.slice(0, 2)]=set.slice(0, 2)
        }else if(set.length==1){
            tree[set[0]]=set[0]
            return
        }else if(set.length==0){
            return
        }else{
            const _n = Math.ceil(set.length / n); 
            for(var i =0; i<set.length; i+=_n){
                this.DivSetBaseTree(set.slice(i, _n*(i+1)),n, tree)
            }  
            return tree
        }
        
    }



    swap(a, i, j){
        if((i>a.length-1) || (j>a.length-1)){
            return a.slice()
        }
        if(Array.isArray(a)){
            var b = a.slice()
            const tmp = b[i]
            b[i] = b[j]
            b[j] = tmp
            if(!b){return []}
            return b
        }else if(typeof a === 'string'){
            var b = a.slice().split("")
            const tmp = b[i]
            b[i] = b[j]
            b[j] = tmp
            if(!b){return []}
            return b.join("")
        }else{
            throw Error("swap expects string or array")
        }

    }

    rotate(str, n=1){
        if(str.length==1){
            return str
        }

        if(n>=0){
            for(var i = 0; i<n; i++){
                str = str.slice()
                if(Array.isArray(str)){
                    var char = str.shift();
                    str.push(char)
    
                }else{
                    var char = str[0]
                    str = str.slice(1)+char
                }
            }
            if(!str){return []}
            return str
        }else if(n<0){
            for(var i=n; i!=0; i++){
                str = str.slice()
                if(Array.isArray(str)){
                    var chars = str.slice(0, str.length-1)
                    str = str.slice(-1).concat(chars)
                }else{
                    var chars = str.slice(0, str.length-1)
                    str = str.slice(-1)+chars
                }
            }
            if(!str){return []}
            return str
        }
    }
}