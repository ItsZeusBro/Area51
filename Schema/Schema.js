import { pbkdf2 } from "node:crypto";
import * as util from "node:util"

export class Schema{
	paths(schema, pk=['payload'], path=[], _paths=[]){
		//payload is either defined by a key if its an object, or it is defined as something that is not an array
		//or not an object (inside of an array)
		//each recursive call is a divergence in the path structure 
		path = path.slice()
		//at each recursive level and iteration we need to create a step object and push it to path
		//each path ends at a base case, and a new subpath is created at each recursive call
		if(Array.isArray(schema)){
			//if its an array, there is payload, but no key so each payload has its own step at the index
				//{indexKey:payload}
			for(var i=0; i<schema.length; i++){
				var val=schema[i];
				if(Array.isArray(val)){
					//push index to path
					path.push(i)
					this.paths(val, pk, path, _paths)
				}else if(typeof val === 'object'){
					//push index to path
					path.push(i)
					this.paths(val, pk, path, _paths)
				}else{
					//payload case, dont recursively call
					path.push({[i]:val})
				}
			}
		}else if(typeof schema === 'object'){
			for(var i=0; i<Object.keys(schema).length; i++){
				var key = Object.keys(schema)[i];
				var val = schema[key]
				if(pk.includes(key)){
					//create a payload object with key value and push to path. Dont recursively call
					path.push({[key]:val})
				}else{
					//push the key to path
					path.push(key)
					this.paths(val, pk, path, _paths)
				}
			}
		}else{
			//base case 1 raw value or no value
			path.push({"base":schema})
			_paths.push(path)
		}
		return _paths
	}

	
	log(obj){
        if(obj){
            console.log(util.inspect(obj, false, null, true))
        }
    }
}

const SCHEMA=[
	{
		'isEncArr': [
			{
				'isEnc': [
					{
						'isArr': [
							{ 
								'~DEFAULT~': 'utf8', 
								'isEnc': 'wackyFunction1' 
							}
						]
					}
				]
			},
			{
				'isStrArr': [
					{
						'~DEFAULT~': [ 'utf8' ],
						'isEncArr': [
							{
								'~DEFAULT~': 'Wm',
								'isStr': 'wackyFunction2'
							},
							{
								'~DEFAULT~': [ { '6K': { 'hDz': undefined } }, undefined ],
								'isObjArr': 'wackyFunction3'
							}
						]
					},
					{
						'isStrArr': [
							{
								'~DEFAULT~': [
									{ 'hLM': undefined },
									{ 'HMi': { 'FpT': undefined } },
									undefined
								],
								'isObjArr': 'wackyFunction4'
							},
							{
								'~DEFAULT~': [ 'utf8' ],
								'isEncArr': 'wackyFunction5'
							}
						]
					}
				]
			},
			{
				'~DEFAULT~': { 'G': { S5: { 'i': undefined } } },
				'isObj': [
					{
						'isEnc': [ { 'isArr': 'wackyFunction6' } ]
					}
				]
			}
		]
	},
	{
		'isStr': [
			{
				'~DEFAULT~': [],
				'isIntArr': [
					{
						'isArr': [
							{
								'~DEFAULT~': [ 0, 2, 3 ],
								'isIntArr': 'wackyFunction7'
							}
						]
					}
				]
			}
		]
	},
	{
		'~DEFAULT~': [],
		'isArr': [
			{
				'~DEFAULT~': [
					{ 'c': undefined },
					{ 'iDI': { 'o': { 'y': undefined } } }
				],
				'isObjArr': [
					{
						'~DEFAULT~': [ 2 ],
						'isIntArr': [
							{
							'isStrArr': 'wackyFunction8'
							},
							{
							'~DEFAULT~': { 'p0': undefined },
							'isObj': 'wackyFunction9'
							}
						]
					},
					{
						'isIntArr': [ 
							{ '~DEFAULT~': 2, 'isInt': 'wackyFunction10' } 
						]
					}
				]
			},
			{
				'isStr': [
					{
						'~DEFAULT~': '',
						'isStr': [
							{
								'~DEFAULT~': [ 'Uvo', 'evH' ],
								'isStrArr': 'wackyFunction11'
							}
						]
					}
				]
			}
		]
	},
  1
]

var SCHEMA2={
	'one':[
			1, 
			2, 
			3, 
			{
				'oneNHalf':'sdlfkjdsflkj'
			},
			[
				'dlfkjsdf',
				2,
				3, 
				4, 
				5
			],
			{
				'~DEFAULT~':{}
			},
			{
				'payload':{}
			}
	],

	'two':{
		'three':[
			{
				'four':[
					[
						{
							'five':{
								'six':"ldkjfsdfolkj",
								'seven':123123412,
								'eight':{
									'nine':"osidjfodsifj"
								}
							}
						}
					],
					[
						[
							1, 2, 3, 4, 5
						],
						[
							1, 2, 3, 4, 5
						]
					],
					[
						'lskdfjsdifk',
						{
							'ten':'ksldjfsdlfkj'
						},
						{
							'eleven':'lsdkfjdslkfjdsg'
						}
					]
				]
			}
		],

		'~DEFAULT~':{},
		'payload':{}
		
	}
}
  
var schema = new Schema()
schema.log(schema.paths(SCHEMA, ['~DEFAULT~', 'payload']))