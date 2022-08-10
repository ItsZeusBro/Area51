import { Recursion } from "../Recursion.js";
import { ioTests } from "./ioTests.js"
import { sliceWrapTests } from "./sliceWrapTests.js";
import { sliceRollTests } from "./sliceRollTests.js"
import { treeTests } from "./treeTests.js";
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

        this.tests(this.setArr, this.setStr, this.tree)
        
    }

    tests(setArr, setStr, tree){
        //new ioTests(setArr, setStr, 5)
        new sliceRollTests(setStr, 100)
        new sliceWrapTests(setStr, 100)
        new treeTests(tree)
    }

    log(obj){
        if(obj){
            util.inspect(obj, false, null, true)
        }
    }

}

new Test()