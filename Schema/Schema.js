export class Schema{
    constructor(){

    }
	//payload is key-wise or value-based payload, so if its recursable, its identified by payload key, if its not, its identified as raw values
    paths(tree, path, _paths=[], pk=['payload'], rk=[]){
		path=path.slice()
		if(Array.isArray(tree)){
			//if its an object it is passed down a level
			//if its a raw type it is payload, and we add a payload step with general 'payload' key associated with a payload array
			var payload=[]
			for(var i = 0; i<tree.length; i++){
				if(Array.isArray(tree[i])){
				//if its an array, pass it down

				}else if(typeof tree[i]==='object'){
				//if its an object, pass it down

				}else{
					payload.push(tree[i])
				}
			}
			//use build step add to path, add to _paths, and return
			return _paths.push(path.push(this.build_step('payload', payload)))

		}else if(typeof tree ==='object'){
			//if its a recursive key, add it to rk
			for(var i = 0; i<Object.keys(tree); i++){
				if(this.is_recursive(tree, key)){

				}else if(this.is_base(tree, key)){

				}else if(this.is_payload(tree, key)){

				}
			}
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
