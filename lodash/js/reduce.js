
function inc(val){
	return val+1;
}

function dec(val){
	return val-1;
}

function dbl(val){
	return val*2;
}

function half(val){
	return val/2;
}

function sqr(val){
	return val*val;
}

var arr=[inc,dec,dbl,half,sqr]

arr.reduce((acc,val)=>{
	// console.log(`acc= ${acc} val=${val} `)
	acc=val(acc)
	return acc;
},3)