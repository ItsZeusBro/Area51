import { Comparators } from "./Comparators.js"
import { RandGen } from "../Random/RandGen.js"
import * as assert from "node:assert"
import * as util from "node:util"

export class ComparatorTests{
	constructor(){
		this.testArrays()
		this.testObjects()
		this.testNumber()
		this.testString()
		this.testEquals()
	}

	testArrays(){
		for(var i = 0; i<1000; i++){
			this.testArray()
		}

	}


	testObjects(){
		for(var i = 0; i<1000; i++){
			this.testObject()
		}
	}

	testArray(){
		console.log("TEST ARRAY")
		var comparators = new Comparators()
		var array1 = new RandGen().randArr(20)
		var array2 = new RandGen().randArr(20)
		assert.equal(comparators.isEqualArr(array1.slice(), array1.slice()), true)
		assert.equal(comparators.isEqualArr(array1.slice(), array2.slice()), false)
		console.log("TEST ARRAY PASSED")

	}

	testObject(){
		console.log("TEST OBJ")
		var comparators = new Comparators()
		var obj1 = new RandGen().randObj(20)
		var obj2 = new RandGen().randObj(20)
		assert.equal(comparators.isEqualObj(obj1, obj1), true)
		assert.equal(comparators.isEqualObj(obj1, obj2), false)
		console.log("TEST OBJ PASSED")
	}

	testNumber(){
		console.log("TEST NUMBER")
		var comparators = new Comparators()
		var num1 = 1234
		var num2 = 2345
		assert.equal(comparators.isEqualNumber(num1, num1), true)
		assert.equal(comparators.isEqualNumber(num1, num2), false)		
		console.log("TEST NUMBER PASSED")
	}
	testString(){
		console.log("TEST STRING")
		var comparators = new Comparators()
		var str1 = "kldsjfhasklgjhsdglaksdjgalukierhtfglkaszjgnaslgkuhaerg"
		var str2 = "kldsjfhasklgjhsdglaksdjgalukierhtfglkaszjgnaslgkuhaergkldsjfhasklgjhsdglaksdjgalukierhtfglkaszjgnaslgkuhaerg"
		assert.equal(comparators.isEqualStr(str1, str1), true)
		assert.equal(comparators.isEqualStr(str1, str2), false)		
		console.log("TEST STRING PASSED")
	}
	testEquals(){
		console.log("TEST EQUAL")
		var comparators = new Comparators()
		var array1 = new RandGen().randArr(20)
		var array2 = new RandGen().randArr(20)
		assert.equal(comparators.isEqual(array1.slice(), array1.slice()), true)
		assert.equal(comparators.isEqual(array1.slice(), array2.slice()), false)

		var obj1 = new RandGen().randObj(20)
		var obj2 = new RandGen().randObj(20)
		assert.equal(comparators.isEqual(obj1, obj1), true)
		assert.equal(comparators.isEqual(obj1, obj2), false)

		var num1 = 1234
		var num2 = 2345
		assert.equal(comparators.isEqual(num1, num1), true)
		assert.equal(comparators.isEqual(num1, num2), false)	


		var str1 = "kldsjfhasklgjhsdglaksdjgalukierhtfglkaszjgnaslgkuhaerg"
		var str2 = "kldsjfhasklgjhsdglaksdjgalukierhtfglkaszjgnaslgkuhaergkldsjfhasklgjhsdglaksdjgalukierhtfglkaszjgnaslgkuhaerg"
		assert.equal(comparators.isEqual(str1, str1), true)
		assert.equal(comparators.isEqual(str1, str2), false)		
		console.log("TEST EQUAL PASSED")
	}
	log(obj){
        if(obj){
            console.log(util.inspect(obj, false, null, true))
        }
    }

}