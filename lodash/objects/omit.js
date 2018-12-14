//This method is like _.merge except that it accepts customizer which is invoked to produce the merged values of the destination and source properties. 
//Arguments  object (Object) sources (...Object)
//Returns  Returns object. 

function omit (obj,arr) {
	var newobj ={}
	keys = Object.keys(obj)
	keys.forEach((k)=>{
		if(!arr.includes(k)){
			newobj[k]=obj[k];
		}	
	})
	return newobj;
 }