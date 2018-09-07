//1. Create an array named colors that contains five different names of colors as strings.
	var array = ["red","green","blue","yellow","purple"];

//2. Access the first color in the array and print it to the console using console.log()
	var array = ["green","red","yellow"];
		console.log (array[1]);
//3.Now do the same with the third color in the list. (Remember that array indexes start at 0, not at 1!)
	var array = ["red","grey","blue","purpel"];
		console.log (array[3]);
//4.Write one line of code that changes the value of the last color in the list to "ultraviolet" (overwriting the previous value).
	var array = ["red","grey","blue","purpel"];
		console.log (array[3]="purpel";

//5. Create a new variable called fourthColor and set it equal to the fourth color in the list.
	var fourthColor = ["grey","red","yellow","green","pink","purpel"];
		console.log (fourthColor[4]=="pink");


//6.Add another color to the end of the list.
	var add =["grey","red","yellow","green","pink"];
		add.push("purpel");
	add;

//7.Add another color to the beginning of the list.
	var add =["grey","red","yellow","green","pink"];
		add.unshift("purpel");
	add;
//8. Print the length of the array to the console with console.log()
	var add =["grey","red","yellow","green","pink"];
		add.length;
	add;
//9.Remove the last color from the end of list, and then print the length of the array to the console one more time.
	var remove =["grey","red","yellow","green","pink"];
		remove.pop();
	remove;
			remove.length;
		console.log(remove);
//10.Write a for loop to iterate through every color in the array and print each color's value to the console.
	var add =["grey","red","yellow","green","pink"];
		for(i=0 ;i<=add.length ; i++) {
			console.log(add[i]);
		}
			console.log(add);
//11.Copying from that loop you just wrote, modify it to print every color's value and every color's index in this format: 3, purple or 0, blue etc.
	var add =["grey","red","yellow","green","pink"];
			for(i=0 ;i<=add.length ; i++) {
				console.log(i + add[i]);
			}
			console.log(add);
//12.Create a variable named lastColor that will always point to the last element of the colors array,
// no matter how many colors are in the list. (Hint: make use of the array's length property for this!)
	var lastColor =["grey","red","yellow","green","pink"];
		lastColor[lastColor.length-1]
		