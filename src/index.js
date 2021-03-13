
// You should implement your task here.
let answer=[]
module.exports = function towelSort (matrix) {
    if (arguments.length==0|| matrix.length==0){ return []}
   else {
    //    answer=matrix.flat().sort(function(a,b){ return a - b;}
    for (i=0; i<matrix.length; i++) {
        if (i%2>0) {
            matrix[i].sort(function(a,b){ return b - a;})
        }
    }
    answer=matrix.flat();

  return answer}
}
