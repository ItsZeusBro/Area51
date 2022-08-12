import { Trees } from "./Trees.js";
import * as assert from "node:assert"

export class TreeTests{
    constructor(tree){
        this._paths(tree)
    }

    _paths(tree){
        this._validate(this.paths(tree), tree)
    }

    paths(tree){
        var trees = new Trees()
        var arr=trees.paths(tree)
        return arr
    }

    _validate(paths, tree){
        var trees = new Trees()
        for(var i = 0; i<paths.length; i++){
            assert.equal(trees.validate(tree, paths[i]), true)
        }
    }
}