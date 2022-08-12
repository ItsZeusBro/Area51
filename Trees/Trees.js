export class Trees{
    constructor(){

    }
    //gives the individual paths of a tree as an array of paths. 
	//Paths are nothing but arrays of objects that hold the leveled steps in the path as the keys, and the arbitrary payloads
	//as the values
	//THIS FUNCTION WILL BE USED PRIMARILY FOR GUARD. PATHS are just an abstraction for GUARD schema to use for validating
	//input to a function. The way that paths is constructed is the way guard is evaluated
    paths(tree, path=[], _paths=[], pk=['payload']){
        var rKeys=[]
        Object.keys(tree).forEach((key)=>{
            if(!pk.includes(key)){
                rKeys.push(key)
            }
        })
        if(!rKeys.length){
            _paths.push(path)
            return
        }else{
            for(var i = 0; i<rKeys.length; i++){
                if(Array.isArray(tree[rKeys[i]])){
                    for(var j = 0; j<tree[rKeys[i]].length; j++){
                        var _path=[].concat(path).concat({[rKeys[i]]: undefined})
                        this.paths(tree[rKeys[i]][j], _path, _paths)
                    }
                }else if(typeof tree[rKeys[i]] === 'object'){
                    var _path=[].concat(path).concat({[rKeys[i]]: tree[rKeys[i]]['payload']})
                    this.paths(tree[rKeys[i]], _path, _paths)
                }
            }
        }
        return _paths
    }    
    
	//validates that the path exists in the tree
    validate(tree, path, n=0, invalid=[false]){
        if((!tree)||!path||n<0||!invalid.length){
            invalid[0]=true
            return !invalid[0]
        }else{
            if((n>path.length-1) || invalid[0]){
                return
            }
            if(Array.isArray(tree)){
                
                for(var i=0; i<tree.length; i++){
                    var key = Object.keys(path[n])[0]
                    if(tree[i][key]){
                        return this.validate(tree[i][key], path, n+1, invalid)  //short circuit when valid
                    }
                }
                invalid[0]=true
                return
            }else if(typeof tree === 'object'){
    
                var key = Object.keys(path[n])[0]
                if(tree[key]){
                    this.validate(tree[key], path, n+1, invalid)
                }else{
                    invalid[0]=true
                    return
                }
            }else{
                invalid[0]=true
                return
            }
        }
        
        return !invalid[0]
    }
    
    
}
