import { Recursion } from "./Recursion.js";
import * as assert from "node:assert"
import * as util from "node:util"

class Test{
    constructor(){
        this.setArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
        this.setStr = "abcdefghijklmnopqrstuvwxyz"
        this.tree = {
            'payload':{
                'some':'payload_0'
            },
            'a':{
                'payload':{
                    'some':'payload_a'
                },
                '1':{
                    'payload':{
                        'some':'payload_1'
                    },
                    'd':{
                        'payload':{
                            'some':'payload_d'
                        }
                    },
                    'e':{
                        'payload':{
                            'some':'payload_e'
                        }
                    },
                    'f':{
                        'payload':{
                            'some':'payload_f'
                        }
                    }
                },
                '2':{
                    'payload':{
                        'some':'payload_2'
                    },
                    'g':{
                        'payload':{
                            'some':'payload_g'
                        }
                    },
                    'h':{
                        'payload':{
                            'some':'payload_h'
                        }
                    },
                    'i':{
                        'payload':{
                            'some':'payload_i'
                        }
                    }
                },
                '3':{
                    'payload':{
                        'some':'payload_3'
                    },
                    'j':{
                        'payload':{
                            'some':'payload_j'
                        }
                    },
                    'k':{
                        'payload':{
                            'some':'payload_k'
                        }
                    },
                    'l':{
                        'payload':{
                            'some':'payload_l'
                        }
                    }
                }
            }, 
            'b':{
                '4':{
                    'm':{
                        'payload':{
                            'some':'payload_m'
                        }
                    },
                    'n':{
                        'payload':{
                            'some':'payload_n'
                        }
                    },
                    'o':{
                        'payload':{
                            'some':'payload_o'
                        }
                    }
                },
                '5':{
                    'p':{
                        'payload':{
                            'some':'payload_p'
                        }
                    },
                    'q':{
                        'payload':{
                            'some':'payload_q'
                        }
                    },
                    'r':{
                        'payload':{
                            'some':'payload_r'
                        }
                    }
                },
                '6':{
                    's':{
                        'payload':{
                            'some':'payload_s'
                        }
                    },
                    't':{
                        'payload':{
                            'some':'payload_t'
                        }
                    },
                    'u':{
                        'payload':{
                            'some':'payload_u'
                        }
                    }
                }
            },
            'c':{
                '7':{
                    'v':{
                        'payload':{
                            'some':'payload_v'
                        }
                    },
                    'w':{
                        'payload':{
                            'some':'payload_w'
                        }
                    },
                    'x':{
                        'payload':{
                            'some':'payload_x'
                        }
                    }
                },
                '8':{
                    'y':{
                        'payload':{
                            'some':'payload_y'
                        }
                    },
                    'z':{
                        'payload':{
                            'some':'payload_z'
                        }
                    }
                },
                '9':[   
                        {
                            '10':[
                                {
                                    'aa':{
                                        'payload':{
                                            'some':'payload_aa'
                                        }
                                    }
                                },
                                {
                                    'bb':{
                                        'payload':{
                                            'some':'payload_bb'
                                        }
                                    }
                                }
                            ]
                        },
                        {
                            '11':{
                                'payload':{
                                    'some':'payload_11'
                                }
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
        this._iterables()
        this._recursivePaths()

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


            for(var j=0; j<x; j++){
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

                for(var r=0; r<x; r++){
                    
                    console.log('iterIJSliceRotate', this.setArr, i, j, r)
                    assert.equal(
                            recursion.iterIJSliceRotate(this.setArr,  i, j, r)
                        .equals(
                            recursion.iterIJSliceRotate(this.setStr, i, j, r)
                        ),
                        true
                    )

                    for(var n=0; n<x; n++){
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

                        for(var s=0; s<x; s++){
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
        
        console.log(this.iterJSliceExperiment(this.setStr, 0, 2))
    }
    iterJSliceExperiment(set, i, j){
        var recursion = new Recursion()
        return recursion.iterJSlice(set, i, j)
    }
    _iterables(){
        console.log(this.iterables(this.setStr))
    }
    iterables(set){
        var recursion = new Recursion()
        return recursion.iterables(set)
    }
    _recursivePaths(){
        this.log(this.recursivePaths(this.tree))
    }

    recursivePaths(tree){
        var recursion = new Recursion()
        var arr=recursion.paths(tree)
        return arr
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

    log(obj){
        if(obj){
            console.log(util.inspect(obj, false, null, true))
        }
      }
}

new Test()