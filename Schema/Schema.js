export class Schema{
    constructor(){

    }

    paths(tree, _paths=[], pk=['payload']){
		if(Array.isArray(tree)){
			for(var i = 0; i<tree.length; i++){
				//every element in the array could be an object, array, or a terminating value
			}
		}else if(typeof tree === 'object'){
			for(var i = 0; i<Object.keys(tree).length; i++){
				//every element always has a key
				var key = Object.keys(tree)[i]
				var val = tree[key]

				console.log(this.build_step(key, this.get_payload(tree, pk)))
			}
		}else{
			//every element is a raw value (base case)
		}
    }    

	build_step(key, payload){
		return {[key]:payload}
	}

	get_payload(obj, pk){
		var payload={};
		for(var i=0; i<pk.length; i++){
			if(obj[pk[i]]){ payload[pk[i]]=obj[pk[i]]; }
		}
		return payload;
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
