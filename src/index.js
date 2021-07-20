
// You should implement your task here.

module.exports = function towelSort (matrix) {
if (matrix === undefined || matrix.length === 0){
    return []
  }
let matrixI = [];
let matrixN = matrix;
matrixN.unshift("p");
matrixN.reduce(function(previousValue, item, index, array) {
if (index % 2 === 0){
      item = item.reverse().concat(previousValue);
    } else{
      item = item;
    }
},)
matrixN.splice(0, 1);
return matrixN.join().split(",")
}
