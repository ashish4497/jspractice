//2. Create the constructor function for a Video object. The function should take in arguments of
 // title (a string), uploader (a string, the person who uploaded it), and seconds (a number, the duration), 
 // and it should save them as properties of the object.
class viedo {
	constructor(title,uploder,seconds){
	this.title =title;
	this.uploder =uploder;
	this.seconds =seconds;
}



//Create a method on the Video object called watch(). When that method is called, it should use console.
// log to output a string like "You watched all 60 seconds of Otters Holding Hands!"
watch(){
	console.log("You watched all 60 seconds of Otters Holding Hands!");
}
}



//Instantiate a new Video object and call the watch() method on it.
var viedo1 = new Video("viedoTitle","rrr");

//Instantiate another Video object with different constructor arguments.
class viedo1 {
	constructor(title,time,){
		this.title;
		this.time;
	}




//Make the watch method accept amounts of seconds to watch for, and call it with different amounts of seconds.
watch(){
	return 
}
}


//Define a new class called MusicVideo that extends Video. Its constructor should also take in an artist argument.
class MusicVideo extends Video {
	constructor(artist){
		this.artist = artist
		super()
	}


//Instantiate a new MusicVideo object and call the watch() method on it.
	MusicVideo.watch()
//Add a method to MusicVideo called rockOut() that uses console.log to output a string like "You rocked out to La Bamba by Ritchie Valens!.
	rockOut(){
		console.log("You rocked out to La Bamba by Ritchie Valens!")
	}

//Use an array of data and a for loop to instantiate 5 MusicVideo objects.


//Make an array of video data with both normal videos and music videos, loop through them, 
// and decide on each one whether to make it a Video or MusicVideo object.


//Comment out the MusicVideo code, as you'll be working on changing Video first.

//Change the Video constructor function to accept a single object literal argument instead of multiple arguments.
function Viedo(title,uploder,seconds){
	this.title = title;
	this.uploder = uploder;
	this.seconds = seconds;
}
viedo.prototype.watch() {
	return this.title;
}

//Create a new Video object and call watch() on it.
var newobject = new Viedo('rr','r',10);

//Make the arguments optional by giving them default values if they're not specified.


//Change the MusicVideo constructor function to also accept a single object literal argument instead of multiple arguments. Test it by calling it at least once.



//make sure that if the object literal is missing some values, that default values are used instead of undefined
