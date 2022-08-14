import * as util from "node:util"

export class Schema{
	paths(schema, pk, path=[], _paths=[]){

		if(Array.isArray(schema)){
			for(var i=0; i<schema.length; i++){
				var val=schema[i];
				if(Array.isArray(val)){
					//push index to path
					var _path = path.slice()
					_path.push(i)
					this.paths(val, pk, _path, _paths)
				}else if(typeof val === 'object'){
					var _path = path.slice()
					_path.push(i)
					this.paths(val, pk, _path, _paths)
				}else{
					path = path.slice()
					path.push({[i]:val})
				}
			}

		}else if(typeof schema === 'object'){
			for(var i=0; i<Object.keys(schema).length; i++){
				var key = Object.keys(schema)[i];
				var val = schema[key]
				if(pk.includes(key)){
					path.push({[key]:val})
				}else{
					var _path = path.slice()
					_path.push(key)
					this.paths(val, pk, _path, _paths)
				}
			}
		}else{
			//base case
			path.push({"base":schema})
			_paths.push(path)
			return
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