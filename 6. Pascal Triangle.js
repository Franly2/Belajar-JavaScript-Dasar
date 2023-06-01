// var SIZE = 5;
// var s = "";
// var value = 1;

// for (var x = 0; x <= SIZE; x++) {
//   for (var j = 0; j < SIZE - x; j++) {
//     s += value++ + " ";
//   }
//   s += "\n";
// }
// console.log(s);

//
//
//

// var SIZE = 5;
// var s = "";
// var value = 1;

// for (var i = 0; i <= SIZE; i++) {
//   for (var j = 0; j < SIZE - i; j++) {
//     s += i + j + 1 + " ";
//   }
//   s += "\n";
// }
// console.log(s);

// var SIZE = 5;

// for (var i = 0; i < SIZE; i++) {
//   var value = i + 1;
//   var s = value + " ";
//   for (var j = 1; j <= i; j++) {
//     value += SIZE - j;
//     s += value++ + " ";
//   }
//   console.log(s);
// }

var uk = 5;
var value = "";
var spasi = " ";

for (var i = 1; i <= uk; i++) {
  console.log((value += "*"));
}
