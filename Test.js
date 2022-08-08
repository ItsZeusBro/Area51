import { Recursion } from "./Recursion.js";
import * as assert from "node:assert"
import * as util from "node:util"

class Test{
    constructor(){
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
        this.tests()
    }

    tests(){
        this._orderedPinchSet()
        this._orderedExpandSet()
        this.inputOutput(5)
        this._experiments()
        this._paths()
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
        console.log('swapInputTest ASSERT')
        assert.equal(
                recursion.swap(this.setArr,  i, j)
            .equals(
                recursion.swap(this.setStr, i, j)
            ),
            true    
        )
        console.log('swapInputTest PASS')
    }

    rotateInputTest(i, recursion){
        console.log('rotateInputTest ASSERT')
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
        console.log('rotateInputTest PASS')
    }

    iterJSliceInputTest(i, j, recursion){
        console.log("iterJSliceInputTest ASSERT")
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
        console.log("iterJSliceInputTest PASS")

    }

    iterJSliceRotateInputTest(i, j, r, n, recursion){
        console.log("iterJSliceRotateInputTest ASSERT")
        assert.equal(
                recursion.iterJSliceRotate(this.setArr,  i, j, r, n)
            .equals(
                recursion.iterJSliceRotate(this.setStr, i, j, r, n)
            ),
            true
        )
        console.log("iterJSliceRotateInputTest PASS")
    }

    iterIJSliceRotateInputTest(i, j, r, n, recursion){
        console.log("iterIJSliceRotateInputTest ASSERT")
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
        console.log("iterIJSliceRotateInputTest PASS")
    }

    iterIJSliceRotateSwapInputTest(i, j, r, n, s, recursion){
        console.log("iterIJSliceRotateSwapInputTest ASSERT")
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
        console.log("iterIJSliceRotateSwapInputTest PASS")
    }


    _experiments(){
        this.iterJSliceExperiment(this.setStr, 0, 2)
    }

    iterJSliceExperiment(set, i, j){
        var recursion = new Recursion()
        return recursion.iterJSlice(set, i, j)
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
}

new Test()