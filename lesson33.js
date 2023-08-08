// Scope var, let, const
var num = 20; // global
let count = 10; // block
function doIt() {
  let count = 22;
  var num = 24;
  console.log(count);
  console.log(num);
}

doIt();
