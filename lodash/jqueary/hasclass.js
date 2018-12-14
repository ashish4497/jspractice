//Determine whether any of the matched elements are assigned the given class.

// function hasClass(class) {
// 	var elm =[]
// 	class.forEach((v)=>)
// }

// let div = document.querySelector('div');
	function select(par){
		this.elem = document.querySelector(par)
	}

// var newS = new select("div")
var $ = (p) => new select(p);
// 	if (div.classList.contains('main')) {console.log("haaa claass hai")}
// else{console.log(false)}

	// select.prototype.hasClass = function(className){
	// 	if(this.elem.classList.contains(className)){
	// 		return `${true}, ${className}`	;
	// 	} else return false;
	// }


// div.style.color = "red";
//hide
	select.prototype.hide = function(){
		this.elem.style.display = "none";
	}


	// if(div.classList.contain('css').style.background = "red") {
	// 	console.log(true);
	// } else {
	// 	console.log(false)
	// }
//add color
	select.prototype.css = function(attr	,val){
		this.elem.style[attr] = val;
	}

//show
select.prototype.show = function(){
		this.elem.style.display = "block";
	}

//html
 select.prototype.html = function(val){
		this.elem.innerHTML = val;
	}

//remove
 select.prototype.removeattrs = function(attr,val){
		this.elem.removeAttribute(attr,val)
	}

//attribute
select.prototype.attrs = function(attr,val){
		this.elem.setAttribute(attr,val)
}

//append
select.prototype.append = function(val){
		this.elem.append(val)
}

//fetch
	select.prototype.fetch = function(url){
		fetch(url).then(res=>res.json())
		.then(d=>console.log(d))
	}
