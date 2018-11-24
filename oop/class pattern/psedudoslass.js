// presudo methord

function Animal(name,age){
	this.name=name;
	this.age=age;
}

Animal.prototype.walk=function(){
		console.log('animalwalk')
}
Animal.prototype.move=function(){
		console.log('animalmove')
}


var animal = new Animal("dog",45)