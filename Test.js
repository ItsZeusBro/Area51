import { Recursion } from "./Recursion";

class Test{
    constructor(){
        this.tests()
    }

    tests(){
        var recursion = new Recursion()
        var i=0;
        var j=1;
        var s=0;
        var n=1000;
        var setStr = "abcdefghijklmnopqrstuvwxyz"
        var setArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
        
        //The test cases should actually use these things in a useful way to complete some task
        //otherwise the test cases are not secure
        recursion.reverseIterJSlice(setStr, i, setStr.length)
        recursion.reverseIterJSlice(setArr, i, setArr.length)
    }

}