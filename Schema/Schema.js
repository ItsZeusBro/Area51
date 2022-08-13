export class Schema{
    constructor(){

    }
	//payload is key-wise or value-based payload, so if its recursable, its identified by payload key, if its not, its identified as raw values
    paths(tree, path, _paths=[], pk=['payload'], rk=[]){
		//if its an array
			//step is a payload step (which is just payload as a key and payload)
			//if it
		//if its an object
			//step includes	a key and payload
			//if it does not have a recursive key, its a base case

    }    
	
	build_step(key, payload){
		return {[key]:payload}
	}


	get_payload(obj, pk){
		var payload;
		if(Array.isArray(obj)){
			payload=[]
			//if the object in the array is not a base case and not recursive its payload
			
		}else if(typeof obj === 'object'){
			payload = {}
			for(var i=0; i<pk.length; i++){
				if(obj[pk[i]]){ payload[pk[i]]=obj[pk[i]]; }
			}
		}
		return payload
	}
	is_recursive(obj, key, pk){
		//something is recursive if the key is not in pk and if it is associated with a value that is an object or array
		if(!pk.includes(key)&&(Array.isArray(obj[key]||typeof obj[key] === 'object'))){
			return true
		}
	}
    
}

const SCHEMA=
[
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
console.log(schema.paths(SCHEMA, [], [], ['~DEFAULT~']))