// Define a constructor function called Persone which takes three arguments
//(name, yearOfBirth, job) Initiate the properties


function Persone(name, yearOfBirth,job){
	this.name=name;
	this.yearOfBirth=yearOfBirth;
	this.job=job;
}
// Define a function name calculateAge which returns the age of the person


	Persone.prototype.age = function(){
		var d = new Date();
		var n = d.getFullYear();
		return n - this.yearOfBirth;
	}
// Use constructor function to make three objects with different values for example ('John', 1990, 'teacher')


	var detail = new Persone  ('John', 1990, 'teacher');



// call the calculateAge function on each object
	
	detail.age();

