import { Recursion } from "../Recursion.js";
import * as assert from "node:assert"

export class sliceWrapTests{
    constructor(setStr, n){
        this._sliceWrap(setStr)
        this._sliceWrapN(setStr, n)

    }

    _sliceWrap(set){
        for(var i=0; i<=set.length; i++){
            for(var j=i; j<=set.length; j++){
                var defined = this.sliceWrap(set, i, j)
                if(defined){
                    console.log(defined)
                }
            }
        }
    }
    
    _sliceWrapN(set, n){
        for(var i=0; i<=set.length; i++){
            for(var j=i; j<=set.length; j++){
                var defined = this.sliceWrapN(set, i, j, n)
                if(defined){
                    console.log(defined)
                }
            }
        }
    }
    
    sliceWrap(set, i, j){
        //returns the entire iterative subset of slices between i and j
        if((!set)||(!(i>=0))||(!(j>=1))||(j<=i)){
            return
        }
        var recursion = new Recursion()
        var result = recursion.reverseIterJSlice(set, i, j)
    
        this.sliceWrapValidate(result, i, j, set)
    
        return result
    }
    
    sliceWrapValidate(result, i, j, set){
        //check to make sure result does not violate 
        //i'th set char at index result[z]0 
        if(i==j){
            assert.equal(result, undefined)
        }
        for(var z=0; z<result.length; z++){
            assert.equal(result[z][0], set[i], "z:"+z+" i:"+i+ " j:"+j+ " result[z][i]:"+result[z][0]+" set[i]:"+set[i])
            assert.equal(result[z][0], result[result.length-1][0])
            assert.equal(true, result[result.length-1].length==1)
            //assert.equal(result[z], set.slice(i, j-z))
        }
    }
    
    sliceWrapN(set, i, j, n){
        //returns the entire iterative subset of slices between i and j
        if((!set)||(!(i>=0))||(!(j>=1))||(j<=i)){
            return
        }
        var recursion = new Recursion()
        var result = recursion.reverseIterJSlice(set, i, j, n)
    
        this.sliceWrapValidate(result, i, j, set)
    
        return result
    }
    
    sliceWrapNValidate(result, i, j, set, n){
        //check to make sure result does not violate 
        //i'th set char at index result[z]0 
        if(i==j){
            assert.equal(result, undefined)
        }
        for(var z=0; z<result.length; z++){
    
        }
    }

}

