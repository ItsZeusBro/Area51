//A strOrArr of tools for making recursion more useful by anticipating what it will need

import { type } from "node:os"

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
            return strOrArr
        }else if(typeof strOrArr === 'string'){
            return Array.from(strOrArr).slice()
        }else{
            throw Error('strOrArr must be of type iter or string')
        }
    }

    iterJSlice(strOrArr, i=0, j=1, iter=[]){
        if(j<=i){return iter}
        if(j==strOrArr.length+1){
            return iter
        }
        strOrArr=this.sanitize(strOrArr)
        var slice = strOrArr.slice(i, j)
        if(slice && slice.length){iter.push(slice)}
        j++;
        this.iterJSlice(strOrArr, i, j, iter)
        return iter
    }

    reverseIterJSlice(strOrArr, i=0, j=1, iter=[]){
        if(j<=i){return iter}
        strOrArr=this.sanitize(strOrArr)
        var slice = strOrArr.slice(i, j)
        if(slice && slice.length){iter.push(slice)}
        j--;
        this.reverseIterJSlice(strOrArr, i, j, iter)
        return iter
    }

    iterJSliceRotate(strOrArr, i=0, j=1, r=1, n=strOrArr.length, iter=[]){
        if(n==0){return iter}
        if(j<=i){return iter}
        strOrArr=this.sanitize(strOrArr)
        var slice = strOrArr.slice(i, j)
        if(slice && slice.length){iter.push(slice)}
        strOrArr = this.rotate(strOrArr, r)
        j++;
        n--;
        this.iterJSliceRotate(strOrArr, i, j, r, n, iter);
        return iter;
    }

    iterIJSliceRotate(strOrArr, i=0, j=1, r=1, n=strOrArr.length, iter=[]){
        if(n==0){return iter}
        if(j<=i){return iter}
        strOrArr=this.sanitize(strOrArr)
        var slice = strOrArr.slice(i, j)
        if(slice && slice.length){iter.push(slice)}
        strOrArr = this.rotate(strOrArr, r)
        i++
        j++;
        n--;
        this.iterIJSliceRotate(strOrArr, i, j, r, n, iter)
        return iter
    }

    reverseIterIJSliceRotate(strOrArr, i=0, j=1, r=1, n=strOrArr.length, iter=[]){
        if(n==0){return iter}
        if(j<=i){return iter}
        strOrArr=this.sanitize(strOrArr)
        var slice = strOrArr.slice(i, j)
        if(slice && slice.length){iter.push(slice)}
        strOrArr = this.rotate(strOrArr, r)
        i--;
        j--;
        n--;
        this.reverseIterIJSliceRotate(strOrArr, i, j, r, n, iter)
        return iter
    }

    iterJSliceRotateSwap(strOrArr,  i=0, j=1, r=1, n=strOrArr.length, s=1, iter=[]){
        if(j<=i){return iter}
        if(j==strOrArr.length){ j=j-i; i=0;}
        if(n==0){return iter}
        strOrArr=this.sanitize(strOrArr)
        var slice = strOrArr.slice(i, j)
        if(slice && slice.length){iter.push(slice)}
        strOrArr = this.rotate(strOrArr, r)
        strOrArr = this.swap(strOrArr, i, s)
        j++;
        n--;
        this.iterJSliceRotateSwap(strOrArr, i, j, r, n, s, iter)
        return iter
    }

    iterIJSliceRotateSwap(strOrArr,  i=0, j=1, r=1, n=strOrArr.length, s=1, iter=[]){
        if(j<=i){return iter}
        if(j==strOrArr.length){ j=j-i; i=0; }
        if(n==0){return iter}
        strOrArr=this.sanitize(strOrArr)
        var slice = strOrArr.slice(i, j)
        if(slice && slice.length){ iter.push(slice) }
        strOrArr = this.rotate(strOrArr, r)
        strOrArr = this.swap(strOrArr, i, s)
        i++;
        j++;
        n--;
        this.iterIJSliceRotateSwap(strOrArr, i, j, r, n, s, iter)
        return iter
    }

    iterIJSSliceRotateSwap(strOrArr, i=0, j=1, r=1, n=strOrArr.length, s=1, iter=[]){
        if(j<=i){return iter}
        if(j==strOrArr.length){ j=j-i; i=0; }
        if(n==0){return iter}
        strOrArr=this.sanitize(strOrArr)
        var slice = strOrArr.slice(i, j)
        if(slice && slice.length){ iter.push(slice) }
        strOrArr = this.rotate(strOrArr, r)
        strOrArr = this.swap(strOrArr, i, s)
        i++;
        j++;
        s++;
        n--;
        this.iterIJSSliceRotateSwap(strOrArr, i, j, r, n, s, iter)
        return iter
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
            throw Error("swap expects string or iter")
        }

    }

    rotate(strOrArr, n=1){
        strOrArr=this.sanitize(strOrArr)

        if(strOrArr.length==1){
            return strOrArr
        }

        if(n>=0){
            for(var i = 0; i<n; i++){
                strOrArr = strOrArr.slice()
                var char = strOrArr.shift();
                strOrArr.push(char)
            }
            if(!strOrArr){return []}
            return strOrArr
        }else if(n<0){
            for(var i=n; i!=0; i++){
                strOrArr = strOrArr.slice()
                var chars = strOrArr.slice(0, strOrArr.length-1)
                strOrArr = strOrArr.slice(-1).concat(chars)
            }
            if(!strOrArr){return []}
            return strOrArr
        }
    }

    isEqualObj(obj1, obj2, equal=[true]){
        if(!equal[0]){return}
        //try to invalidate the equality of two objects
    }

    isEqualArr(arr1, arr2, equal=[true]){
        if(!equal[0]){return false}
        if((Array.isArray(arr1)&& Array.isArray(arr2))){
            for(var i = 0; i<arr1.length; i++){
                for(var j = 0; j< arr2.length; j++){
                    return this.isEqual(arr1[i], arr2[j])
                }
            }
        }else{
            equal[0]=false
            return
        }
    }

    isEqualStr(str1, str2, equal=[true]){
        if(!equal[0]){return false}
		if(str1[0]==str2[0]){
			this.isEqual(str1.slice(1), str2.slice(1), equal)
		}else{
			equal[0]=false
			return
		}
		return true
    }

    isEqualNumber(num1, num2, equal=[true]){
        if(!equal[0]){return}

    }

    isEqual(thing1, thing2, equal=[true]){
        if(!equal[0]){return}
        if(typeof thing1 !== typeof thing2){
            equal[0]=false
            return
        }else{
            if(typeof thing1 === 'object'){
                return this.isEqualObj(thing1, thing2, equal)
            }else if(Array.isArray(thing1)){
                return this.isEqualArr(thing1, thing2, equal)
            }else if(typeof thing1 === 'number'){
                return this.isEqualNumber(thing1, thing2, equal)
            }else if(typeof thing1 === 'string'){
                return this.isEqualStr(thing1, thing2, equal)
            }else{
                //other types for the future
            }
        }
    }
    //The problem with equality recursive functions:
    //if everything is assumed true and proven false, you may have edge cases that turn out to be true when they are not
    //if everything is assumed false and proven true, and you use the same reference variable for reporting true, 
    //then if one deep thing is true, it might slip through and be generalized upon
    //if you dont use a reference variable, you cant report on the whole state across recursive functions and levels of recursivity
    //but if you dont use a reference variable, its safer to assume false and prove true, but your recursion has to be perfect all the time
    //we choose to assume true, because its easy to short circuit a recursive function upon its falsehood as the first
    //statement of all equality recursive functions

}

var recursion = new Recursion()
recursion()
// console.log(recursion.iterJSliceRotate('123456789', 0, 4, 2))
// console.log(recursion.iterJSliceRotate(['1', '2', '3', '4', '5', '6', '7', '8', '9'], 0, 4, 2))