//drop function 

function drop (array ,n=1){
  return array.splice(n,array.length-n)
}

// e.g
// var elm =[1,2,3,4,5]
// drop(elm,2)
// (3) [3, 4, 5]


function drop (array ,n=1) {
   array.splice(-n)
return array
}

// var w =[11,222,33,44,55,666,777]
// drop(w,5)
// (2) [11, 222]