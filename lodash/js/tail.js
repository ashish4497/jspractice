//get all element of array not the first element of array
//arguument Array

function tail(array) {
	[a,...b] = array

	return b;
}
//tail(elm)
// (4) [2, 3, 4, 5]