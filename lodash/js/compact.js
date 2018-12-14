// function compact take argument array
 export default	function compact (array) {
		return array.reduce((acc,val) => {
			// console.log(val);
			if(val) {	
				acc.push(val)}
				return acc;
		},[])
	}
// eample
// compact([1,2,"",3])
// (3) [1, 2, 3]
// compact([1,2,"",false,4,5])
// (4) [1, 2, 4, 5]