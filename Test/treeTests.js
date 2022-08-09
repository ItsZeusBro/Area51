import { Recursion } from "../Recursion.js";
import * as assert from "node:assert"

export class treeTests{
    constructor(tree){
        this._paths(tree)
    }

    _paths(tree){
        this._validate(this.paths(tree), tree)
    }

    paths(tree){
        var recursion = new Recursion()
        var arr=recursion.paths(tree)
        return arr
    }

    _validate(paths, tree){
        var recursion = new Recursion()
        for(var i = 0; i<paths.length; i++){
            assert.equal(recursion.validate(tree, paths[i]), true)
        }
    }
}