import * as util from "node:util"

export class Schema{
	paths(){
		//payload is either defined by a key if its an object, or it is defined as something that is not an array
		//or not an object (inside of an array)
		//base case 1 raw value
		//recursive case 1 array
			//if its an array, there is payload, but no key so each payload has its own step at the index
			//{indexKey:payload}
		//recursive case 2 object 
			//{key:payload at level of the key}
		
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
schema.log(schema.paths(SCHEMA2, ['~DEFAULT~', 'payload']))
