import { Recursion } from "./Recursion.js";
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
            this.tests()
        }else{
            this.experiments()
        }
    }

    tests(){
        // this._orderedPinchSet()
        // this._orderedExpandSet()
        // this.inputOutput(5)
        // this._paths()
        this._sliceRoll()
        this._sliceWrap()
        this._sliceRollN(100)
        this._sliceWrapN(100)
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

    _sliceRoll(){
        var set = this.setStr
        for(var i=0; i<this.setStr.length; i++){
            for(var j=i; j<this.setStr.length; j++){
                var defined = this.sliceRoll(set, i, j)
                if(defined){
                    console.log(defined)
                }
            }
        }
    }



    _sliceWrap(){
        var set = this.setStr
        for(var i=0; i<=this.setStr.length; i++){
            for(var j=i; j<=this.setStr.length; j++){
                var defined = this.sliceWrap(set, i, j)
                if(defined){
                    console.log(defined)
                }
            }
        }
    }

    _sliceRollN(n){
        var set = this.setStr
        for(var i=0; i<this.setStr.length; i++){
            for(var j=i; j<this.setStr.length; j++){
                var defined = this.sliceRollN(set, i, j, n)
                if(defined){
                    console.log(defined)
                }
            }
        }
    }

    _sliceWrapN(n){
        var set = this.setStr
        for(var i=0; i<=this.setStr.length; i++){
            for(var j=i; j<=this.setStr.length; j++){
                var defined = this.sliceWrapN(set, i, j, n)
                if(defined){
                    console.log(defined)
                }
            }
        }
    }

    inputOutput(x){
        Array.prototype.equals = function(arr2) {
            return (
              this.length === arr2.length &&
              this.every((value, index) => value === arr2[index])
            );
          };
        var recursion = new Recursion()

        for(var i=0; i<x; i++){
            this.rotateInputTest(i, recursion)
            for(var j=0; j<x; j++){
                this.swapInputTest(i, j, recursion)
                this.iterJSliceInputTest(i, j, recursion)
                for(var r=0; r<x; r++){
                    for(var n=0; n<x; n++){
                        this.iterJSliceRotateInputTest(i, j, r, n, recursion)
                        this.iterIJSliceRotateInputTest(i, j, r, n, recursion)
                        for(var s=0; s<x; s++){
                            this.iterIJSliceRotateSwapInputTest(i, j, r, n, s, recursion)
                        }
                    }
                }
            }
        }
    }

    swapInputTest(i, j, recursion){
        ////console.log('swapInputTest ASSERT')
        assert.equal(
                recursion.swap(this.setArr,  i, j)
            .equals(
                recursion.swap(this.setStr, i, j)
            ),
            true    
        )
        ////console.log('swapInputTest PASS')
    }

    rotateInputTest(i, recursion){
        //console.log('rotateInputTest ASSERT')
        assert.equal(
                recursion.rotate(this.setArr,  i)
            .equals(
                recursion.rotate(this.setStr, i)
            ),
            true  
        )

        if(i){
            assert.equal(
                    recursion.rotate(this.setArr,  -i)
                .equals(
                    recursion.rotate(this.setStr, -i)
                ),
                true  
            )
        }
        //console.log('rotateInputTest PASS')
    }

    iterJSliceInputTest(i, j, recursion){
        //console.log("iterJSliceInputTest ASSERT")
        assert.equal(
                recursion.iterJSlice(this.setArr,  i, j)
            .equals(
                recursion.iterJSlice(this.setStr, i, j)
            ),
                true
        )

        assert.equal(
                recursion.reverseIterJSlice(this.setArr,  i, j)
            .equals(
                recursion.reverseIterJSlice(this.setStr, i, j)
            ),
            true  
        )
        //console.log("iterJSliceInputTest PASS")

    }

    iterJSliceRotateInputTest(i, j, r, n, recursion){
        //console.log("iterJSliceRotateInputTest ASSERT")
        assert.equal(
                recursion.iterJSliceRotate(this.setArr,  i, j, r, n)
            .equals(
                recursion.iterJSliceRotate(this.setStr, i, j, r, n)
            ),
            true
        )
        //console.log("iterJSliceRotateInputTest PASS")
    }

    iterIJSliceRotateInputTest(i, j, r, n, recursion){
        //console.log("iterIJSliceRotateInputTest ASSERT")
        assert.equal(
                recursion.iterIJSliceRotate(this.setArr,  i, j, r, n)
            .equals(
                recursion.iterIJSliceRotate(this.setStr, i, j, r, n)
            ),
            true
        )

        assert.equal(
                recursion.reverseIterIJSliceRotate(this.setArr,  i, j, r, n)
            .equals(
                recursion.reverseIterIJSliceRotate(this.setStr, i, j, r, n)
            ),
            true
        )
        //console.log("iterIJSliceRotateInputTest PASS")
    }

    iterIJSliceRotateSwapInputTest(i, j, r, n, s, recursion){
        //console.log("iterIJSliceRotateSwapInputTest ASSERT")
        assert.equal(
                recursion.iterIJSliceRotateSwap(this.setArr,  i, j, r, n, s)
            .equals(
                recursion.iterIJSliceRotateSwap(this.setStr, i, j, r, n, s)
            ),
            true
        )

        assert.equal(
                recursion.iterJSliceRotateSwap(this.setArr,  i, j, r, n, s)
            .equals(
                recursion.iterJSliceRotateSwap(this.setStr, i, j, r, n, s)
            ),
            true
        )

        assert.equal(
                recursion.iterIJSSliceRotateSwap(this.setArr,  i, j, r, n, s)
            .equals(
                recursion.iterIJSSliceRotateSwap(this.setStr, i, j, r, n, s)
            ),
            true
        )
        //console.log("iterIJSliceRotateSwapInputTest PASS")
    }


    _paths(){
        this._validate(this.paths(this.tree))
    }

    _validate(paths){
        var recursion = new Recursion()
        for(var i = 0; i<paths.length; i++){
            assert.equal(recursion.validate(this.tree, paths[i]), true)
        }
    }

    paths(tree){
        var recursion = new Recursion()
        var arr=recursion.paths(tree)
        return arr
    }

    _orderedPinchSet(){
        var pinchSet = this.orderedPinchSet(this.setArr)
        
    }

    _orderedExpandSet(){
        var expandSet = this.orderedExpandSet(this.setArr)
    }

    orderedPinchSet(set){
        var i=0;
        var recursion = new Recursion()
        return recursion.reverseIterJSlice(set, i, set.length)
    }

    orderedExpandSet(set){
        var i=0;
        var j=1;
        var recursion = new Recursion()
        return recursion.iterJSlice(set, i, j)
    }

    log(obj){
        if(obj){
            util.inspect(obj, false, null, true)
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
            assert.equal(result[z], set.slice(i, j-z))
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