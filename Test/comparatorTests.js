import { Recursion } from "../Recursion.js"
import { RandGen } from "./RandGen.js"
import * as assert from "node:assert"

export class ComparatorTests{
	constructor(){
		this.testArrays()
		this.testNumbers()
		this.testStrings()
		this.testObjects()
	}

	testArrays(){
		for(var i = 0; i<1000; i++){
			this.testArray()
		}

	}

	testNumbers(){

	}

	testStrings(){

	}

	testObjects(){

	}

	testArray(){
		var recursion = new Recursion()
		var array1 = new RandGen().randArr(20)
		var array2 = new RandGen().randArr(20)
		console.log(array1, array2)
		assert.equal(recursion.isEqualArr(array1.slice(), array1.slice()), true)
		assert.equal(recursion.isEqualArr(array1.slice(), array2.slice()), false)

	}
	testNumber(testNumber){
		var recursion = new Recursion()
		recursion.isEqual(testNumber, testNumber)

	}
	testString(testString){
		var recursion = new Recursion()
		recursion.isEqual(testString.slice(), testString.slice())
	}
	testObject(testObject){
		var recursion = new Recursion()
	}
}

new ComparatorTests()