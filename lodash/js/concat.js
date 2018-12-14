//concat function take a argument [array]

export default function concat(array){
	return array.reduce((acc,val) => {
	return	acc.concat(val)
	},[])
}

//example 1
//var array =[1,2,3,[4,5,6],7,8]
//concat(array)
// out put   [1, 2, 3, 4, 5, 6, 7, 8]
//example2
//var array =[1,2,3,[4,5,6],[[7,8]]]
//concat(array)
//(7) [1, 2, 3, 4, 5, 6, Array(2)]