//1. Create an array named colors that contains five different names of colors as strings.
	var array =["red","green","blue","purpel","black"]
	console.log(array)
//2. Access the first color in the array and print it to the console using console.log()
	var array =["red","green","blue","purpel","black"]
	console.log(array[0]);

//3.Now do the same with the third color in the list. (Remember that array indexes start at 0, not at 1!)
	var array =["red","green","blue","purpel","black"]
	console.log(array[2]);
//4.Write one line of code that changes the value of the last color in the list to "ultraviolet" (overwriting the previous value).
	var array =["red","green","blue","purpel","black"]
	array.push('ultraviolet');
	console.log(array);

//5. Create a new variable called fourthColor and set it equal to the fourth color in the list.
	var fourthColor =["red","green","blue","purpel","black"]


//6.Add another color to the end of the list.
	var fourthColor =["red","green","blue","purpel","black"]
	fourthColor.push("yellow");
	console.log(fourthColor);

//7.Add another color to the beginning of the list.
	var fourthColor =["red","green","blue","purpel","black"]
	fourthColor.unshift("grey");
	console.log(fourthColor);
	
//8. Print the length of the array to the console with console.log()
	var array =["red","green","blue","purpel","black"]
	console.log(array.length);
	
//9.Remove the last color from the end of list, and then print the length of the array to the console one more time.
	var array =["red","green","blue","purpel","black","yellow"]
	array.pop("yellow");
	(array);
		console.log(array.length);
//10.Write a for loop to iterate through every color in the array and print each color's value to the console.
	var array =["red","green","blue","purpel","black","yellow"]
	for(var i=0 ;i<=array.length ;i++){
		console.log(array[i])
	}

//11.Copying from that loop you just wrote, modify it to print every color's value and every color's index in this format: 3, purple or 0, blue etc.
		var array =["red","green","blue","purpel","black","yellow"]
	for(var i=0 ;i<=array.length ;i++){
		console.log( i + array[i])
	}
//12.Create a variable named lastColor that will always point to the last element of the colors array,
// no matter how many colors are in the list. (Hint: make use of the array's length property for this!)
	var lastColor =["red","green","blue","purpel","black","yellow"]
		 lastColor[lastColor.length-1]