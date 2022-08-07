import { Recursion } from "./Recursion";

class Test{
    constructor(){
        this.tests()
    }

    tests(){
        this._pinchSet()
    }
    _pinchSet(){

        var setStr = "abcdefghijklmnopqrstuvwxyz"
        var setArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
        
        var pinchSet = this.pinchSet(setArr)
        console.log(pinchSet)
        
    }

    pinchSet(set){
        var i=0;
        var recursion = new Recursion()
        recursion.reverseIterJSlice(set, i, set.length)
    }
    

}