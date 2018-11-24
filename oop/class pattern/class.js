class Animal {
  constructor(name,age){
	this.name =name,
	this.age = age}
	walk(){
		console.log("is walk")
    }
	move(){
		console.log("is move")
    }
}
	class mammel extends Animal{
	constructor(name,age,color){
	super(name,age)
	this.color=color
    }
   talk(){
   	console.log("yes")
   }
}

	var bird = new mammel ("abc",2,"red")