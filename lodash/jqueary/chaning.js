class Calculation {
	constructor(num) {
		this.num = num;
		this.counter = this.num;
	}
	inc(val){
	this.counter += val;
	return this;
 }

	dec(val){
	this.counter -= val;
	return this;
 }

	dbl(val){
		this.counter *= val;
	return this;
 }

	half(val){
		this.counter /=val;
	return this;
 }

	sqr(val){
		this.counter*=val;
	return this;
 }
 update() {
 	return this.counter;
 }
} 

let n = new Calculation(4);
console.log(n);


