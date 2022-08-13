export class Schema{
    constructor(){

    }
	//payload is key-wise or value-based payload, so if its recursable, its identified by payload key, if its not, its identified as raw values
    paths(tree, path, _paths=[], pk=['payload'], rk=[]){
		path=path.slice()
		if(Array.isArray(tree)){

		}else if(typeof tree ==='object'){
			//if its a recursive key, add it to rk
		}else{

		}
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
	is_recursive(obj, pk){

	}
	is_base(obj, pk){
		//if object has a key not in pk and rk then its a base case key
		if()
	}
    
}


  
var schema = new Schema()
var schemaTree = {
	'key1':{
		'key2':{

		},
		'payload1':{
			'more':'payload1'
		},
		'payload2':{
			'more':'payload2'
		}
	},
	'payload1':{
		'some':'payload1'
	},
	'payload2':{
		'some':'payload2'
	}
}
console.log(schema.build_step('key1', schema.get_payload(schemaTree, ['payload1', 'payload2'])))
