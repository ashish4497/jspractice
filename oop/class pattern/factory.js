 var animal={
	walk: function(){
console.log('animalwalk')},
	move: function(){
console.log('animalmove')}
}
function createanimal (name,age){
	var obj =Object.create(animal);
	obj.name=name;
	obj.age =age;
	return obj
}
var rat = createanimal("whiteRat",1)