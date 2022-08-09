import { Recursion } from "../Recursion.js";
import * as assert from "node:assert"

export class sliceRollTests{
    constructor(setStr, n){
        this._sliceRoll(setStr)
        //this._sliceRollN(setStr, n)
    }

    _sliceRoll(set){
        for(var i=0; i<set.length; i++){
            for(var j=i; j<set.length; j++){
                var defined = this.sliceRoll(set, i, j)
                if(defined){
                    console.log(defined)
                }
            }
        }
    }

    sliceRoll(set, i, j){
        //returns the entire iterative subset of slices between i and j
        if((!set)||(!(i>=0))||(!(j>=1))||(j<=i)){
            return
        }
        var recursion = new Recursion()
        var result = recursion.iterJSlice(set, i, j)
        //this.sliceRollValidate(result, i, j, set)
        
        return result
    }

    sliceRollValidate(result, i, j, set){
        //check to make sure result does not violate 
        //i'th set char at index result[z]0 
        if(i==j){
            assert.equal(result, undefined)
        }
        for(var z=0; z<result.length; z++){
            //asserts that the begining of the result always matches set[i], because we should only roll after set[i]
            assert.equal(result[z][0], set[i], "z:"+z+" i:"+i+ " j:"+j+ " result[z][i]:"+result[z][0]+" set[i]:"+set[i])
            //asserts that the entire result is equal to the set slice between i, and j+z
            //if z equals 0, it should just be slice(i, j), z==1 slice(i, j+1) etc...
            assert.equal(result[z], set.slice(i, j+z))
        }
    }

    _sliceRollN(set, n){
        for(var i=0; i<set.length; i++){
            for(var j=i; j<set.length; j++){
                var defined = this.sliceRollN(set, i, j, n)
                if(defined){
                    console.log(defined)
                }
            }
        }
    }

    

    sliceRollN(set, i, j, n){
        //returns the entire iterative subset of slices between i and j
        if((!set)||(!(i>=0))||(!(j>=1))||(j<=i)){
            return
        }
        var recursion = new Recursion()
        var result = recursion.iterJSlice(set, i, j, n)
        this.sliceRollNValidate(result, i, j, set, n)
        return result
    }

    sliceRollNValidate(result, i, j, set, n){
        //check to make sure result does not violate 
        //i'th set char at index result[z]0 
        if(i==j){
            assert.equal(result, undefined)
        }
        for(var z=0; z<result.length; z++){

        }
    }
}