// 1. Add a new property to your penguin called outfit and set it equal to another object 
// with the following properties: hat, shirt, pants, and shoes -- each property should have a 
// string as its value! (I suggest you give it a baseball cap, Hawaiian shirt, cargo shorts, and 
// flip-flops, because wouldn't that be ridiculous?)
var myPenguin = {
	characterName:"Roy and Silo",
	origin: "And Tango Makes Three",
	author: "Peter Parnell and Justin Richardson"
}
 var property ={
 	hat :"baseball cap",
 	shirt :"Hawaiian shirt",
 	pants :"cargo shorts",
 	shoes :"flip-flops"
 }
 myPenguin.outfit ="property"
  console.log(myPenguin.outfit);

// 2. Create a new variable called penguinHatType and set it equal to the value of the hat in 
// your penguin's outfit! Then print your new variable to the console.
	var penguinHatType ="baseball cap"
	console.log(penguinHatType);

// 3. Without modifying any of your previous code, write one new line of code to add an accessory
 // property to your penguin's outfit and set it equal to the string "pocket watch" -- because penguins
  // are classy like that!
   myPenguin.outfit.accessory ="pocket watch"

// 4. Write one more line of code to change the hat in your penguin's outfit to "top hat" and 
// override the previous value. (Again, because penguins are classy!)
myPenguin.outfit.property="top hat"

// 5. This penguin is a freelancer who always works from home, so it doesn't actually need to 
// wear any pants! Let's delete the pants property from this penguin's outfit property. 
// (Hint: see this page on the delete operator for examples.)
	delete(myPenguin.property.pants)
// 6. Write a for ... in loop to print the value of each piece of clothing in your penguin's outfit so you can see a 
// list of clothing items in the console. (Hint: This is the same as step 31 from above,
 // only now we're accessing values from a nested object!)
 