export class Iterators{
    constructor(){

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
    
    

    swap(a, i, j){
        a = this.sanitize(a)
        if(
                (i>a.length-1) 
            || 
                (j>a.length-1)){
            return a.slice()
        }
    
        var b = a.slice()
        const tmp = b[i]
        b[i] = b[j]
        b[j] = tmp
        if(!b){return []}
        return b
        
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
}

