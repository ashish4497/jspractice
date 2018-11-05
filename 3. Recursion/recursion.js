//1. Write a function that loops through the numbers n down to 0.
	var i =5;
		for(i=0; i<=5; i++){
			console.log(i)
		} 



//2. Write a function countTo that takes one argument limit and prints number from 0 to limit
function count(a,b){
if(a>b) return;
console.log(a)
count(++a,b)
}
count(5,10)

//3. Write a function 'exponent' that takes two arguments base, and expo,
//uses a while loop to return the exponenet value of the base.
var base =3;
var expo =4;
function factorial(base,expo) {
}



//4. Write a function factorial that take 1 argument 'number' and gives the factorial of the number.
function factorial(a){
	if(a==1) return 1;
	return a*factorial(--a)
	console.log(a)
}
factorial(5)





//5. Write a function 'RecursiveExponent' that takes two arguments base, and expo, recursively returns exponent value of the base.



//6. Write a function 'recursiveMultiplier' that takes two arguments, 'arr and num'
// and multiplies each arr value into by num and returns an array of the values.



// 7. Write a function 'recursiveReverse' that takes an array and uses recursion
// to return its contents in reverse

