import * as util from "node:util"

export class Schema{
    constructor(){

    }
	//payload is key-wise or value-based payload, so if its recursable, its identified by payload key, if its not, its identified as raw values
    paths(tree, pk=['payload'], path=[], _paths=[]){
		path=path.slice()

		if(Array.isArray(tree)){
			//collect payload (if it exists), add it to path with a general payload key
			var [payload, schema]=this.separate(tree, pk)
			//check if base case
			if(schema.length){
				//it recursive
				for(var i=0; i<schema.length; i++){
					path.push({[i]:payload})
					this.paths(schema[i], pk, path, _paths)
				}
			}

		}else if(typeof tree === 'object'){
			//collect all payload in pk's (if it exists), add it to path with a general payload key
			var [payload, schema]=this.separate(tree, pk)
			//base case here is defined if the object does not contain recursable values associated with non-payload keys
			if(Object.keys(schema).length){
				for(var i=0; i<Object.keys(schema).length; i++){
					var key=Object.keys(schema)[i]
					path.push({[key]:payload})
					this.paths(schema[key], pk, path, _paths)				
				}
			}

		}else{
			var [payload, schema]=this.separate(tree, pk)
			path.push({[schema]:payload})
			_paths.push(path)
			return _paths
		}
		return _paths

    }    
	
	separate(obj, pk){
		//separate payload from recursable values
		if(Array.isArray(obj)){
			var payload=[];
			var schema = [];
			for(var i =0; i<obj.length; i++){
				//if its an array or object value then its apart of schema
				//else its a part of payload
				if(Array.isArray(obj[i]) || typeof obj[i]==='object'){
					schema.push(obj[i])
				}else{
					payload.push(obj[i])
				}
			}
			return [payload, schema]

		}else if(typeof obj === 'object'){
			var payload = {};
			var schema = {};
			for(var i=0; i<Object.keys(obj).length; i++){
				var key=Object.keys(obj)[i]
				if(pk.includes(key)){
					payload[key] = obj[key]
				}else{
					schema[key] = obj[key]
				}
			}
			return [payload, schema]
		}else{
			//there is no difference between payload and schema, so its a base case
			return [undefined, obj]
		}
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
			{ '~DEFAULT~': 'utf8', 'isEnc': 'wackyFunction1' }
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
			'isIntArr': [ { '~DEFAULT~': 2, 'isInt': 'wackyFunction10' } ]
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
schema.log(schema.paths(SCHEMA2, ['~DEFAULT~', 'payload']))
