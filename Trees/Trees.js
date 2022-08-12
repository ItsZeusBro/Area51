export class Trees{
    constructor(){

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
    
    DivSetBaseTree(strOrArr, n, tree={}){
        if(strOrArr.length==n){
            tree[strOrArr.slice(0, n)]=strOrArr.slice(0, n)
            return
        }else if(strOrArr.length==n-1){
            tree[strOrArr.slice(0, n-1)]=strOrArr.slice(0, n-1)
            return
        }else if(strOrArr.length==2){
            tree[strOrArr.slice(0, 2)]=strOrArr.slice(0, 2)
        }else if(strOrArr.length==1){
            tree[strOrArr[0]]=strOrArr[0]
            return
        }else if(strOrArr.length==0){
            return
        }else{
            const _n = Math.ceil(strOrArr.length / n); 
            for(var i =0; i<strOrArr.length; i+=_n){
                this.DivSetBaseTree(strOrArr.slice(i, _n*(i+1)),n, tree)
            }  
            return tree
        }
        
    }
}