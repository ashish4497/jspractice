// Output in the right sequence

try {
  console.log('First');
  
  helloFirst;

  console.log('Second'); 

} catch(err) {

  console.log('Third' + err); 

} finally {
  console.log('Fourth'); 
}

console.log('Fifth');



// Output in the right sequence

first 
Second
Third undefiind err
Fourth
fifth

// try {
//   {
//   console.log('First');//first

  
//   helloFirst;

//   console.log('Second'); //second

// } catch(err) {

//   console.log('Third' + err); 

// } finally {
//   console.log('Fourth'); 
// }

// console.log('Fifth');



//Use the following Data and do the following

var json = {name:"Steve Jobs",job:"Founder"};
// Write a program using try catch

try{
	var json = {name:"Steve Jobs",job:"Founder"};
}
// check if te json object doesn't ahve a agr property throw an arror saying "Incomplete Data"
try{
	var json = {name:"Steve Jobs",job:"Founder"};

  if (!json.arg) {
    throw new Error("Incomplete Data"); 
  }
  console.log(json.arg)
}
catch(Error) {
 console.log( "JSON Error :" + Error.message ); 
}
// If you have age you can console.log age
	
// in catch statement console.log error message and name

var json = {name:"Steve Jobs",job:"Founder", age: 42};

// Execute your program using this data