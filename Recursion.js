//There are only so many recursive patterns to choose from
//There are only so many different primitive object patterns to choose from (to construct or destructure)
//Most problems involve an iterator on the length of some structure
//Some involve a permutative approach
//as opposed to coming with custom solutions in an arbitrary way, we can limit the number of ways in which
//you can generate the solution, and use a general set of tools to do it the same way every time

class Recursion{

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
    //a description of the operation and a result associated with them
    //which one do we want? 
    iterJSliceRotateSwap(set,  i=0, j=1, s=1, r=1, n=set.length, array=[]){
        if(j==set.length){
            j=j-i;
            i=0;
        }
        if(n==0){return}
        var slice;
        if(Array.isArray(set)){
            set = set.join("")
        }
        slice = set.slice(i, j)
        
        if(slice.length){array.push(slice)}

        set = this.rotate(set, r)
        set = this.swap(set, i, s)
        j++;
        n--;
        this.iterJSliceRotateSwap(set, i, j, r, s, n, array)
        return array
    }

    iterIJSliceRotateSwap(set,  i=0, j=1, s=1, r=1, n=set.length, array=[]){
        if(j==set.length){
            j=j-i;
            i=0;
        }
        if(n==0){return}
        var slice;
        if(Array.isArray(set)){
            set = set.join("")
        }
        slice = set.slice(i, j)

        if(slice.length){array.push(slice)}

        set = this.rotate(set, r)
        set = this.swap(set, i, s)
        i++;
        j++;
        n--;
        this.iterIJSliceRotateSwap(set, i, j, r, s, n, array)
        return array
    }

    iterIJSSliceRotateSwap(set, i=0, j=1, s=1, r=1, n=set.length, array=[]){
        if(j==set.length){
            j=j-i;
            i=0;
        }
        if(n==0){return}
        var slice;
        if(Array.isArray(set)){
            set = set.join("")
        }
        slice = set.slice(i, j)

        if(slice.length){array.push(slice)}

        set = this.rotate(set, r)
        set = this.swap(set, i, s)
        i++;
        j++;
        s++;
        n--;
        this.iterIJSliceRotateSwap(set, i, j, r, s, n, array)
        return array
    }

    iterJSliceRotate(set, i=0, j=1, r=1, n=set.length){
        if(j==set.length){
            j=j-i;
            i=0;
        }
        if(n==0){return}
        var slice;
        if(Array.isArray(set)){
            set = set.join("")
        }
        slice = set.slice(i, j)

        if(slice.length){array.push(slice)}

        set = this.rotate(set, r)
        j++;
        n--;
        this.iterJSliceRotateSwap(set, i, j, r, n, array)
        return array
    }

    iterIJSliceRotate(set, i=0, j=1, r=1, n=set.length){
        if(j==set.length){
            j=j-i;
            i=0;
        }
        if(n==0){return}
        var slice;
        if(Array.isArray(set)){
            set = set.join("")
        }
        slice = set.slice(i, j)

        if(slice.length){array.push(slice)}

        set = this.rotate(set, r)
        i++
        j++;
        n--;
        this.iterJSliceRotateSwap(set, i, j, r, n, array)
        return array
    }

    iterJSlice(set, i=0, j=1, n=set.length, array=[]){
        if(j==set.length){
            j=j-i;
            i=0;
        }
        if(n==0){return}
        var slice;
        if(Array.isArray(set)){
            set = set.join("")
        }
        slice = set.slice(i, j)

        if(slice.length){array.push(slice)}

        j++;
        n--;
        this.iterJSliceRotateSwap(set, i, j, n, array)
        return array
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
            return b
        }else if(typeof a === 'string'){
            var b = a.slice().split("")
            const tmp = b[i]
            b[i] = b[j]
            b[j] = tmp
            return b.join("")
        }else{
            throw Error("swap expects string or array")
        }

    }

    isOdd(num) { return num % 2;}

    factorialize(n){
        var factorial = 1
        for(var i = 0; n>i; n--){
            factorial*=n
        }
        return factorial
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
            return str
        }
    }
}

var recursion = new Recursion()
var i=0;
var j=2;
var s=0;
var n=1000;
// console.log(recursion.iterIJSliceRotateSwap("abcdefghijklmnopqrstuvwxyz", i, j, s, 1, n))
// console.log(recursion.iterIJSliceRotateSwap(['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'], i, j, s, 1, n))

console.log(recursion.iterIJSliceRotateSwap("abcdefghijklmnopqrstuvwxyz", i, j, s, -2, n))
console.log(recursion.iterIJSliceRotateSwap(['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'], i, j, s, -2, n))

// console.log(recursion.rotate("abcdefghijklmnopqrstuvwxyz", -1))
// console.log(recursion.rotate(['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'], -1))