import { Recursion } from "../Recursion.js";
import * as assert from "node:assert"


export class ioTests{
    constructor(setArr, setStr, n, tree){
        this.inputOutput(setArr, setStr, n)
    }

    inputOutput(setArr, setStr, x){
		console.log("INPUT OUTPUT TEST")
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
		console.log("INPUTOUTPUT TESTS PASSED")

    }
    
    swapInputTest(set1, set2, i, j, recursion){
        console.log('swapInputTest ASSERT')
		console.log(set1, set2)
        assert.equal(recursion.isEqual(recursion.swap(set1,  i, j), recursion.swap(set2, i, j)), true)
        console.log('swapInputTest PASS')
    }
    
    rotateInputTest(set1, set2, i, recursion){

        console.log('rotateInputTest ASSERT')
        assert.equal(recursion.isEqual(recursion.rotate(set1,  i), recursion.rotate(set2, i)), true)

        if(i){
            assert.equal(recursion.isEqual(recursion.rotate(set1,  -i), recursion.rotate(set2, -i)), true)
        }
        console.log('rotateInputTest PASS')
    }
    
    iterJSliceInputTest(set1, set2, i, j, recursion){
        
        console.log("iterJSliceInputTest ASSERT", set1, set2, i, j)
        if(j>i){
            assert.equal(recursion.isEqual(recursion.iterJSlice(set2,  i, j), recursion.iterJSlice(set1, i, j)), true)
            assert.equal(recursion.isEqual(recursion.reverseIterJSlice(set1,  i, j), recursion.reverseIterJSlice(set2, i, j)), true)
        }
        console.log("iterJSliceInputTest PASS")
    }
    
    iterJSliceRotateInputTest(set1, set2, i, j, r, n, recursion){
        console.log("iterJSliceRotateInputTest ASSERT", set1, i, j, r, n)
        assert.equal(recursion.isEqual(recursion.iterJSliceRotate(set1, i, j, r, n), recursion.iterJSliceRotate(set2, i, j, r, n)), true)
        console.log("iterJSliceRotateInputTest PASS")
    }
    
    iterIJSliceRotateInputTest(set1, set2, i, j, r, n, recursion){
        console.log("iterIJSliceRotateInputTest ASSERT")
        assert.equal(recursion.isEqual(recursion.iterIJSliceRotate(set1,  i, j, r, n),recursion.iterIJSliceRotate(set2, i, j, r, n)), true)
        assert.equal(recursion.isEqual(recursion.reverseIterIJSliceRotate(set1,  i, j, r, n), recursion.reverseIterIJSliceRotate(set2, i, j, r, n)), true)
        console.log("iterIJSliceRotateInputTest PASS")
    }
    
    iterIJSliceRotateSwapInputTest(set1, set2, i, j, r, n, s, recursion){
        console.log("iterIJSliceRotateSwapInputTest ASSERT")
        assert.equal(recursion.isEqual(recursion.iterIJSliceRotateSwap(set1,  i, j, r, n, s), recursion.iterIJSliceRotateSwap(set2, i, j, r, n, s)), true)
        assert.equal(recursion.isEqual(recursion.iterJSliceRotateSwap(set1,  i, j, r, n, s), recursion.iterJSliceRotateSwap(set2, i, j, r, n, s)), true)
        assert.equal(recursion.isEqual(recursion.iterIJSSliceRotateSwap(set1,  i, j, r, n, s), recursion.iterIJSSliceRotateSwap(set2, i, j, r, n, s)), true)
        console.log("iterIJSliceRotateSwapInputTest PASS")
    }


}
