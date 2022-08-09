import { Recursion } from "../Recursion.js";
import * as assert from "node:assert"

export class ioTests{
    constructor(setArr, setStr, n, tree){


        this.inputOutput(setArr, setStr, n)
    }

    inputOutput(setArr, setStr, x){
        Array.prototype.equals = function(arr2) {
            return (
              this.length === arr2.length &&
              this.every((value, index) => value === arr2[index])
            );
          };
        var recursion = new Recursion()
    
        for(var i=0; i<x; i++){
            this.rotateInputTest(setArr, setStr, i, recursion)
            for(var j=0; j<x; j++){
                this.swapInputTest(setArr, setStr, i, j, recursion)
                this.iterJSliceInputTest(setArr, setStr, i, j, recursion)
                for(var r=0; r<x; r++){
                    for(var n=0; n<x; n++){
                        this.iterJSliceRotateInputTest(setArr, setStr, i, j, r, n, recursion)
                        this.iterIJSliceRotateInputTest(setArr, setStr, i, j, r, n, recursion)
                        for(var s=0; s<x; s++){
                            this.iterIJSliceRotateSwapInputTest(setArr, setStr, i, j, r, n, s, recursion)
                        }
                    }
                }
            }
        }
    }
    
    swapInputTest(set1, set2, i, j, recursion){
        console.log('swapInputTest ASSERT')
        assert.equal(
                recursion.swap(set1,  i, j)
            .equals(
                recursion.swap(set2, i, j)
            ),
            true    
        )
        console.log('swapInputTest PASS')
    }
    
    rotateInputTest(set1, set2, i, recursion){
        console.log('rotateInputTest ASSERT')
        assert.equal(
                recursion.rotate(set1,  i)
            .equals(
                recursion.rotate(set2, i)
            ),
            true  
        )
    
        if(i){
            assert.equal(
                    recursion.rotate(set1,  -i)
                .equals(
                    recursion.rotate(set2, -i)
                ),
                true  
            )
        }
        console.log('rotateInputTest PASS')
    }
    
    iterJSliceInputTest(set1, set2, i, j, recursion){
        console.log("iterJSliceInputTest ASSERT")
        if(j>i){
            assert.equal(
                recursion.iterJSlice(set1,  i, j)
            .equals(
                recursion.iterJSlice(set2, i, j)
            ),
                true
        )
    
            assert.equal(
                recursion.reverseIterJSlice(set1,  i, j)
            .equals(
                recursion.reverseIterJSlice(set2, i, j)
            ),
            true  
            )
        }
        
        console.log("iterJSliceInputTest PASS")
    
    }
    
    iterJSliceRotateInputTest(set1, set2, i, j, r, n, recursion){
        console.log("iterJSliceRotateInputTest ASSERT")
        assert.equal(
                recursion.iterJSliceRotate(set1,  i, j, r, n)
            .equals(
                recursion.iterJSliceRotate(set2, i, j, r, n)
            ),
            true
        )
        console.log("iterJSliceRotateInputTest PASS")
    }
    
    iterIJSliceRotateInputTest(set1, set2, i, j, r, n, recursion){
        console.log("iterIJSliceRotateInputTest ASSERT")
        assert.equal(
                recursion.iterIJSliceRotate(set1,  i, j, r, n)
            .equals(
                recursion.iterIJSliceRotate(set2, i, j, r, n)
            ),
            true
        )
    
        assert.equal(
                recursion.reverseIterIJSliceRotate(set1,  i, j, r, n)
            .equals(
                recursion.reverseIterIJSliceRotate(set2, i, j, r, n)
            ),
            true
        )
        console.log("iterIJSliceRotateInputTest PASS")
    }
    
    iterIJSliceRotateSwapInputTest(set1, set2, i, j, r, n, s, recursion){
        console.log("iterIJSliceRotateSwapInputTest ASSERT")
        assert.equal(
                recursion.iterIJSliceRotateSwap(set1,  i, j, r, n, s)
            .equals(
                recursion.iterIJSliceRotateSwap(set2, i, j, r, n, s)
            ),
            true
        )
    
        assert.equal(
                recursion.iterJSliceRotateSwap(set1,  i, j, r, n, s)
            .equals(
                recursion.iterJSliceRotateSwap(set2, i, j, r, n, s)
            ),
            true
        )
    
        assert.equal(
                recursion.iterIJSSliceRotateSwap(set1,  i, j, r, n, s)
            .equals(
                recursion.iterIJSSliceRotateSwap(set2, i, j, r, n, s)
            ),
            true
        )
        console.log("iterIJSliceRotateSwapInputTest PASS")
    }
    
}
