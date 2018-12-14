//function flatten
function flatten (array) {
var narr = [];
array.forEach((v)=>
Array.isArray(v) ? array.concat(v) : narr.push(v))
  return narr;
}