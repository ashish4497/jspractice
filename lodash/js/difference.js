
//difference function take argument array 

// function a(arr1,arr2){
//   var newarr=[];
// 		arr1.foreach(v=>{
// 		arr2.foreach(d=>{
// if(!(v===d)) newarr.push(v)
// 	})
// 		console.log(v)
// 	})
// return newarr;
// }
export default function a(arr1,arr2){
  var newarr=[];
		arr1.forEach(v=>{
		if(!arr2.includes(v)){newarr.push(v)}
	})
return newarr;
}

// e.g
//a([1,3,4],[1,2])
//(2) [3, 4] output