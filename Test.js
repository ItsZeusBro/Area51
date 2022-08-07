import { Recursion } from "./Recursion.js";

class Test{
    constructor(){
        this.setArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
        this.setStr = "abcdefghijklmnopqrstuvwxyz"
        this.tests()
    }

    tests(){
        this._orderedPinchSet()
        this._orderedExpandSet()
        this._experiments()

    }
    inputOutput(){
        var recursion = new Recursion()
        for(var i=0; i<10; i++){
            assert.deepEquals(
                recursion.rotate(this.setArr,  i),
                recursion.rotate(this.setStr, i)
            )
            if(i){
                assert.deepEquals(
                    recursion.rotate(this.setArr, -i),
                    recursion.rotate(this.setStr, -i)
                )
            }


            for(var j=0; j<10; j++){
                
                assert.deepEquals(
                    recursion.swap(this.setArr,  i, j),
                    recursion.swap(this.setStr, i, j)
                )

                assert.deepEquals(
                    recursion.iterJSlice(this.setArr,  i, j),
                    recursion.iterJSlice(this.setStr, i, j)
                )

                assert.deepEquals(
                    recursion.reverseIterJSlice(this.setArr,  i, j),
                    recursion.reverseIterJSlice(this.setStr, i, j)
                )

                for(var r=0; r<10; r++){
                    

                    assert.deepEquals(
                        recursion.iterIJSliceRotate(this.setArr,  i, j, r),
                        recursion.iterIJSliceRotate(this.setStr, i, j, r)
                    )

                    for(var n=0; n<10; n++){

                        assert.deepEquals(
                            recursion.iterJSliceRotate(this.setArr,  i, j, r, n),
                            recursion.iterJSliceRotate(this.setStr, i, j, r, n)
                        )

                        assert.deepEquals(
                            recursion.iterJSliceRotate(this.setArr,  i, j, r, n),
                            recursion.iterJSliceRotate(this.setStr, i, j, r, n)
                        )

                        for(var s=0; s<10; s++){
                            assert.deepEquals(
                                recursion.iterJSliceRotateSwap(this.setArr,  i, j, s, r, n),
                                recursion.iterJSliceRotateSwap(this.setStr, i, j, s, r, n)
                            )
                            assert.deepEquals(
                                recursion.iterIJSliceRotateSwap(this.setArr,  i, j, s, r, n),
                                recursion.iterIJSliceRotateSwap(this.setStr, i, j, s, r, n)
                            )

                            assert.deepEquals(
                                recursion.iterIJSSliceRotateSwap(this.setArr,  i, j, s, r, n),
                                recursion.iterIJSSliceRotateSwap(this.setStr, i, j, s, r, n)
                            )

                            assert.deepEquals(
                                recursion.reverseIterIJSliceRotate(this.setArr,  i, j, r, n),
                                recursion.reverseIterIJSliceRotate(this.setStr, i, j, r, n)
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