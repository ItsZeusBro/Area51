import { Recursion } from "./Recursion.js";

class Test{
    constructor(){
        this.tests()
    }

    tests(){
        this._pinchSet()
        this._reversePinchSet()

    }
    _pinchSet(){

        var setStr = "abcdefghijklmnopqrstuvwxyz"
        var setArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
        
        var pinchSet = this.pinchSet(setArr)
        console.log(pinchSet)
        
    }

    _expandSet(){

        var setStr = "abcdefghijklmnopqrstuvwxyz"
        var setArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
        
        var expandSet = this.expandSet(setArr)
        console.log(expandSet)
        
    }

    pinchSet(set){
        var i=0;
        var recursion = new Recursion()
        return recursion.reverseIterJSlice(set, i, set.length)
    }
    expandSet(set){
        var i=0;
        var j=1;
        var recursion = new Recursion()
        return recursion.iterJSlice(set, i, j)
    }
}

new Test()