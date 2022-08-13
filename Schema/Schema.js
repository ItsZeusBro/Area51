export class Schema{
    constructor(){

    }
	//payload is key-wise or value-based payload, so if its recursable, its identified by payload key, if its not, its identified as raw values
    paths(tree, path, _paths=[], pk=['payload'], rk=[]){
		path=path.slice()
		if(Array.isArray(tree)){
			var payload=[]
			for(var i = 0; i<tree.length; i++){
				if(Array.isArray(tree[i]) || typeof tree[i]==='object'){
					//if its an array or object, pass it down
					this.paths(tree[i], path, _paths, pk, rk)
				}else{
					//its a raw value, push to payload
					payload.push(tree[i])
				}
			}
			//use build step add payload to path, add to _paths, and return
			if(payload.length){
				path.push(this.build_step('payload', payload))
			}
			return _paths
		}else if(typeof tree ==='object'){
			var payload=[]

			for(var i = 0; i<Object.keys(tree); i++){
				var key = Object.keys(tree)[i]

				if(this.is_recursive(tree, key, pk)){
					//add recursive key if not included
					if(!rk.includes(key)){rk.push(key)}
					//add recursive step to path
					path.push(this.build_step(key, this.get_payload(tree, pk)))
					//recursively call this.paths
					this.paths(tree[key], path, _paths, pk, rk)
				}else if(pk.includes(key)){
					payload.push(this.build_step(key, tree[key]))
				}
			}
			if(payload.length){
				path.push(this.build_step('payload', payload))
			}
			return _paths
		}else{
			return _paths.push(path.push(this.build_step('payload', tree)))
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
	is_recursive(obj, key, pk){
		//something is recursive if the key is not in pk and if it is associated with a value that is an object or array
		if(!pk.includes(key)&&(Array.isArray(obj[key]||typeof obj[key] === 'object'))){
			return true
		}
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
