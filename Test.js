import { Recursion } from "./Recursion.js";
import * as assert from "node:assert"

class Test{
    constructor(){
        this.setArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
        this.setStr = "abcdefghijklmnopqrstuvwxyz"
        this.tests()
    }

    tests(){
        this._orderedPinchSet()
        this._orderedExpandSet()
        this.inputOutput()

    }

    inputOutput(){
        Array.prototype.equals = function(arr2) {
            return (
              this.length === arr2.length &&
              this.every((value, index) => value === arr2[index])
            );
          };

        var recursion = new Recursion()

        for(var i=0; i<10; i++){
            console.log('rotate', this.setArr, i)
            assert.equal(
                recursion.rotate(this.setArr,  i).equals(recursion.rotate(this.setStr, i)),
                true  
            )

            if(i){
                assert.equal(
                    recursion.rotate(this.setArr,  -i).equals(recursion.rotate(this.setStr, -i)),
                    true  
                )
            }


            for(var j=0; j<10; j++){
                console.log('swap', this.setArr, i, j)
                assert.equal(
                        recursion.swap(this.setArr,  i, j)
                    .equals(
                        recursion.swap(this.setStr, i, j)
                    ),
                    true    
                )

                console.log('iterJSlice', this.setArr, i, j)
                assert.equal(
                        recursion.iterJSlice(this.setArr,  i, j)
                    .equals(
                        recursion.iterJSlice(this.setStr, i, j)
                    ),
                    true   
                )

                console.log('reverseIterJSlice', this.setArr, i, j)
                assert.equal(
                        recursion.reverseIterJSlice(this.setArr,  i, j)
                    .equals(
                        recursion.reverseIterJSlice(this.setStr, i, j)
                    ),
                    true  
                )

                for(var r=0; r<10; r++){
                    
                    console.log('iterIJSliceRotate', this.setArr, i, j, r)
                    assert.equal(
                            recursion.iterIJSliceRotate(this.setArr,  i, j, r)
                        .equals(
                            recursion.iterIJSliceRotate(this.setStr, i, j, r)
                        ),
                        true
                    )

                    for(var n=0; n<10; n++){
                        console.log('iterJSliceRotate', this.setArr, i, j, r, n)
                        assert.equal(
                                recursion.iterJSliceRotate(this.setArr,  i, j, r, n)
                            .equals(
                                recursion.iterJSliceRotate(this.setStr, i, j, r, n)
                            ),
                            true
                            
                        )

                        console.log('iterJSliceRotate', this.setArr, i, j, r, n)
                        assert.equal(
                                recursion.iterJSliceRotate(this.setArr,  i, j, r, n)
                            .equals(
                                recursion.iterJSliceRotate(this.setStr, i, j, r, n)
                            ),
                            true
                        )

                        console.log('reverseIterIJSliceRotate', this.setArr, i, j, r, n)
                            assert.equal(
                                    recursion.reverseIterIJSliceRotate(this.setArr,  i, j, r, n)
                                .equals(
                                    recursion.reverseIterIJSliceRotate(this.setStr, i, j, r, n)
                                ),
                                true
                            )

                        console.log('iterIJSliceRotateSwap', this.setArr, i, j, r, n)
                        assert.equal(
                                recursion.iterIJSliceRotateSwap(this.setArr,  i, j, r, n)
                            .equals(
                                recursion.iterIJSliceRotateSwap(this.setStr, i, j, r, n)
                            ),
                            true
                        )

                        for(var s=0; s<10; s++){
                            console.log('iterJSliceRotateSwap', this.setArr, i, j, s, r, n)
                            assert.equal(
                                    recursion.iterJSliceRotateSwap(this.setArr,  i, j, s, r, n)
                                .equals(
                                    recursion.iterJSliceRotateSwap(this.setStr, i, j, s, r, n)
                                ),
                                true
                            )

                            
                            console.log('iterIJSSliceRotateSwap', this.setArr, i, j, s, r, n)
                            assert.equal(
                                    recursion.iterIJSSliceRotateSwap(this.setArr,  i, j, s, r, n)
                                .equals(
                                    recursion.iterIJSSliceRotateSwap(this.setStr, i, j, s, r, n)
                                ),
                                true
                            )
                            
                        }
                    }
                }
            }
        }
    }
    _experiments(){
        
        this.iterJSliceExperiment(this.setStr)
    }

    _orderedPinchSet(){

        var pinchSet = this.orderedPinchSet(this.setArr)
        console.log(pinchSet)
        
    }

    _orderedExpandSet(){

        var expandSet = this.orderedExpandSet(this.setArr)
        console.log(expandSet)
        
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
    iterJSliceExperiment(set, i, j){
        var recursion = new Recursion()
        return recursion.iterJSlice(set, i, j)
    }
}

new Test()