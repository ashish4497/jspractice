// The opposite of _.pickBy; this method creates an object composed of the own and inherited enumerable string keyed properties of object that predicate doesn't return truthy for.
// The predicate is invoked with two arguments: (value, key).

function pick (obj,arr) {
	var newobj ={}
	keys = Object.keys(obj)
	keys.forEach((k)=>{
		if(arr.includes(k)){
			newobj[k]=obj[k];
		}	
	})
	return newobj;
 }

 //  var obj ={
	// 	a:1,
	// 	b:2,
	// 	c:3,
	// 	d:4
	// }
  // 	pick(obj,['a','c'])
  // {a: 1, c: 3}