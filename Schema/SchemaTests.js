import { Trees } from "./Trees.js.js";
import * as assert from "node:assert"
import * as util from "node:util"

export class TreeTests{
    constructor(tree){
        this._paths(tree)
    }

    _paths(tree){
        this._validate(this.paths(tree), tree)
    }

    paths(tree){
        var trees = new Trees()
        return trees.paths(tree)
    }

    _validate(paths, tree){
        var trees = new Trees()
		this.log(tree)
        for(var i = 0; i<paths.length; i++){
			console.log("VALIDATING PATH: ", paths[i])
            assert.equal(trees.validate(tree, paths[i]), true)
			console.log("VALIDATED PATH: ", paths[i])

        }
    }

	log(obj){
        if(obj){
            console.log(util.inspect(obj, false, null, true))
        }
    }
}