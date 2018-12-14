//function  equality comparisons  in which only the first occurrence of each element is kept.
//Arguments array (Array)

function uniq (array){
	var newarr =[];
  array.forEach((v)=> {(!newarr.includes(v)) ? newarr.push(v) : null}) 
  return newarr;
}

//var elm =[1,2,3,4,5,6,4,5,6]
//uniq(elm)
// [1, 2, 3, 4, 5, 6]