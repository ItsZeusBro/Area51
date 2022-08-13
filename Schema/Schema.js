export class Schema{
    constructor(){

    }
	//payload is key-wise or value-based payload, so if its recursable, its identified by payload key, if its not, its identified as raw values
    paths(tree, pk=['payload'], path=[], _paths=[], rk=[]){
		if(Array.isArray(tree)){
			//collect payload (if it exists), add it to path with a general payload key
			var [payload, schema]=this.separate(tree, pk, rk)
			console.log(payload, schema)
			//check if base case
			if(schema.length){
				//it recursive
			}else{
				//its base case
			}

		}else if(typeof tree === 'object'){
			//collect all payload in pk's (if it exists), add it to path with a general payload key
			var [payload, schema]=this.separate(tree, pk, rk)
			console.log(payload, schema)
			//base case here is defined if the object does not contain recursable values associated with non-payload keys
			if(Object.keys(schema).length){
				//its recursive
			}else{
				//its a base case
			}

		}else{
			throw Error("schema invalid")
		}

    }    
	
	build_step(key, payload){
		return {[key]:payload}
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
		}
	}
	is_recursive(obj, key, pk){
		//something is recursive if the key is not in pk and if it is associated with a value that is an object or array
		if(!pk.includes(key)&&(Array.isArray(obj[key]||typeof obj[key] === 'object'))){
			return true
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
  
var schema = new Schema()
schema.paths(SCHEMA, [], [], ['~DEFAULT~'], [])
