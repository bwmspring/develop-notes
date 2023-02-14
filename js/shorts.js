// function sum(x, y) {
//   let z = x + y;
//   console.log(z);
// }

function sum(x, y, z = x + y) {
  console.log(z);
}

sum(1,2)