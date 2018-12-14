//function to create a array of unique value
//Argument [arrays] (...Array): The arrays to inspect.

function unique(arr1,arr2) {
	var array =[]
	arr1.forEach((v)=>{
	if(arr2.includes(v))
	array.push(v)
})
return array
}

//unique([1,2,3,4,5],[1,3,5,6,78,])
// [1, 3, 5] output