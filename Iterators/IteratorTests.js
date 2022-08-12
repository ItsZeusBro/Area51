import {Iterators} from './Iterators.js'
import { ioTests } from './ioTests.js'
import * as assert from "node:assert"

export class IteratorTests{
    constructor(setStr){
        this._sliceRollTests(setStr)
        this._sliceWrapTests(setStr)
    }

    _sliceRollTests(set){
        for(var i=0; i<set.length; i++){
            for(var j=i; j<set.length; j++){
                var defined = this.sliceRoll(set, i, j)
                if(defined){
                    console.log(defined)
                }
            }
        }
    }
    _sliceWrapTests(set){
        for(var i=0; i<=set.length; i++){
            for(var j=i; j<=set.length; j++){
                var defined = this.sliceWrap(set, i, j)
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
        var iterators = new Iterators()
        var result = iterators.iterJSlice(set, i, j)
        //this.sliceRollValidate(result, i, j, set)
        
        return result
    }

    sliceWrap(set, i, j){
        //returns the entire iterative subset of slices between i and j
        if((!set)||(!(i>=0))||(!(j>=1))||(j<=i)){
            return
        }
        var iterators = new Iterators()
        var result = iterators.reverseIterJSlice(set, i, j)
    
        this.sliceWrapValidate(result, i, j, set)
    
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
}