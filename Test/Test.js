import { Recursion } from "../Recursion.js";
import { ioTests } from "./ioTests.js"
import * as assert from "node:assert"
import * as util from "node:util"

class Test{
    constructor(experiment=false){
        this.setArr = [
            'a','b','c','d','e','f','g','h','i',
            'j','k','l','m','n','o','p','q','r',
            's','t','u','v','w','x','y','z'
        ]
        this.setStr = "abcdefghijklmnopqrstuvwxyz"
        this.tree = {
            'payload':{
                '0a':'0a'
            },
            '1a':{
                'payload':{
                    '1a':'1a'
                },
                '1a2a':{
                    'payload':{
                        '1a2a':'1a2a'
                    },
                    '1a2a3a':{
                        'payload':{
                            '1a2a3a':'1a2a3a'
                        }
                    }
                },
                '1a2b':{
                    'payload':{
                        '1a2b':'1a2b'
                    },
                    '1a2b3a':{
                        'payload':{
                            '1a2b3a':'1a2b3a'
                        }
                    }
                }
            },
            '1b':{
                'payload':{
                    '1b':'1b'
                },
                '1b2a':{
                    'payload':{
                        '1b2a':'1b2a'
                    },
                    '1b2a3a':{
                        'payload':{
                            '1b2a3a':'1b2a3a'
                        }
                    }
                },
                '1b2b':[   
                    {
                        '1b2b3a':[
                            {
                                '1b2b3a4a':{
                                    'payload':{
                                        '1b2b3a4a':'1b2b3a4a'
                                    }
                                }
                            },
                            {
                                '1b2b3a4b':{
                                    'payload':{
                                        '1b2b3a4b':'1b2b3a4b'
                                    }
                                }
                            }
                        ]
                    },
                    {
                        '1b2b3b':{
                            'payload':{
                                '1b2b3b':'1b2b3b'
                            },
                            '1b2b3b4a':{
                                'payload':{
                                    '1b2b3b4a':'1b2b3b4a'
                                }
                            },
                            '1b2b3b4b':{
                                'payload':{
                                    '1b2b3b4b':'1b2b3b4b'
                                }
                            },
                            '1b2b3b4c':[
                                {
                                    '1b2b3b4c5a':{
                                        'payload':{
                                            '1b2b3b4c5a':'1b2b3b4c5a'
                                        }
                                    }
                                }
                            ]
                        }
                    }
                ]
            }
        }
        if(!experiment){
            this.tests(this.setArr, this.setStr, this.tree)
        }else{
            this.experiments()
        }
    }

    tests(setArr, setStr, tree){
        new ioTests()

        this._paths(tree)
        this._sliceRoll(setStr)
        this._sliceWrap(setStr)
        this._sliceRollN(setStr, 100)
        this._sliceWrapN(setStr, 100)
        //this.experiments()
    }

    iterJSliceExperiment(set, i, j){
        var recursion = new Recursion()
        return recursion.iterJSlice(set, i, j)
    }
    reverseIterJSliceExperiment(set, i, j){
        var recursion = new Recursion()
        return recursion.reverseIterJSlice(set, i, j)
    }

    

    

    

    paths(tree){
        var recursion = new Recursion()
        var arr=recursion.paths(tree)
        return arr
    }

    _paths(tree){
        this._validate(this.paths(tree), tree)
    }

    _validate(paths, tree){
        var recursion = new Recursion()
        for(var i = 0; i<paths.length; i++){
            assert.equal(recursion.validate(tree, paths[i]), true)
        }
    }


    log(obj){
        if(obj){
            util.inspect(obj, false, null, true)
        }
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
    
    sliceRoll(set, i, j){
        //returns the entire iterative subset of slices between i and j
        if((!set)||(!(i>=0))||(!(j>=1))||(j<=i)){
            return
        }
        var recursion = new Recursion()
        var result = recursion.iterJSlice(set, i, j)
        this.sliceRollValidate(result, i, j, set)
        
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

new Test()