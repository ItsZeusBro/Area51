import { Iterators } from "./Iterators.js";
import { Comparators } from "../Comparators/Comparators.js";
import * as assert from "node:assert"


export class ioTests{
    constructor(setArr, setStr, n){
        this.inputOutput(setArr, setStr, n)
    }

    inputOutput(setArr, setStr, x){
		console.log("INPUT OUTPUT TEST")
        for(var i=0; i<x; i++){
            this.rotateInputTest(setArr, setStr, i)
            for(var j=0; j<x; j++){
                this.swapInputTest(setArr, setStr, i, j)
                this.iterJSliceInputTest(setArr, setStr, i, j)
                for(var r=0; r<x; r++){
                    for(var n=0; n<x; n++){
                        this.iterJSliceRotateInputTest(setArr, setStr, i, j, r, n)
                        this.iterIJSliceRotateInputTest(setArr, setStr, i, j, r, n)
                        for(var s=0; s<x; s++){
                            this.iterIJSliceRotateSwapInputTest(setArr, setStr, i, j, r, n, s)
                        }
                    }
                }
            }
        }
		console.log("INPUTOUTPUT TESTS PASSED")
    }
    
    swapInputTest(set1, set2, i, j){
        var iterators = new Iterators()
        var comparators = new Comparators()
        console.log('swapInputTest ASSERT')
		console.log(set1, set2)
        assert.equal(comparators.isEqual(iterators.swap(set1,  i, j), iterators.swap(set2, i, j)), true)
        console.log('swapInputTest PASS')
    }
    
    rotateInputTest(set1, set2, i){
        var iterators = new Iterators()
        var comparators = new Comparators()
        console.log('rotateInputTest ASSERT')
        assert.equal(comparators.isEqual(iterators.rotate(set1,  i), iterators.rotate(set2, i)), true)

        if(i){
            assert.equal(comparators.isEqual(iterators.rotate(set1,  -i), iterators.rotate(set2, -i)), true)
        }
        console.log('rotateInputTest PASS')
    }
    
    iterJSliceInputTest(set1, set2, i, j){
        var iterators = new Iterators()
        var comparators = new Comparators()
        console.log("iterJSliceInputTest ASSERT", set1, set2, i, j)
        if(j>i){
            assert.equal(comparators.isEqual(iterators.iterJSlice(set2,  i, j), iterators.iterJSlice(set1, i, j)), true)
            assert.equal(comparators.isEqual(iterators.reverseIterJSlice(set1,  i, j), iterators.reverseIterJSlice(set2, i, j)), true)
        }
        console.log("iterJSliceInputTest PASS")
    }
    
    iterJSliceRotateInputTest(set1, set2, i, j, r, n){
        var iterators = new Iterators()
        var comparators = new Comparators()
        console.log("iterJSliceRotateInputTest ASSERT", set1, i, j, r, n)
        assert.equal(comparators.isEqual(iterators.iterJSliceRotate(set1, i, j, r, n), iterators.iterJSliceRotate(set2, i, j, r, n)), true)
        console.log("iterJSliceRotateInputTest PASS")
    }
    
    iterIJSliceRotateInputTest(set1, set2, i, j, r, n){
        var iterators = new Iterators()
        var comparators = new Comparators()
        console.log("iterIJSliceRotateInputTest ASSERT")
        assert.equal(comparators.isEqual(iterators.iterIJSliceRotate(set1,  i, j, r, n), iterators.iterIJSliceRotate(set2, i, j, r, n)), true)
        assert.equal(comparators.isEqual(iterators.reverseIterIJSliceRotate(set1,  i, j, r, n), iterators.reverseIterIJSliceRotate(set2, i, j, r, n)), true)
        console.log("iterIJSliceRotateInputTest PASS")
    }
    
    iterIJSliceRotateSwapInputTest(set1, set2, i, j, r, n, s){
        var iterators = new Iterators()
        var comparators = new Comparators()
        console.log("iterIJSliceRotateSwapInputTest ASSERT")
        assert.equal(comparators.isEqual(iterators.iterIJSliceRotateSwap(set1,  i, j, r, n, s), iterators.iterIJSliceRotateSwap(set2, i, j, r, n, s)), true)
        assert.equal(comparators.isEqual(iterators.iterJSliceRotateSwap(set1,  i, j, r, n, s), iterators.iterJSliceRotateSwap(set2, i, j, r, n, s)), true)
        assert.equal(comparators.isEqual(iterators.iterIJSSliceRotateSwap(set1,  i, j, r, n, s), iterators.iterIJSSliceRotateSwap(set2, i, j, r, n, s)), true)
        console.log("iterIJSliceRotateSwapInputTest PASS")
    }


}
