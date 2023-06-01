// FAKTORIAL

// function Faktorial(n) {
//   if (n === 0) return 1;

//   return n * Faktorial(n - 1);
// }

// console.log(Faktorial(5));

// ANGKA 1 - 10

// EXPRESSION

// let looping = function (a) {
//   if (a === 0) {
//     return looping;
//   } else {
//     console.log(a);
//     return looping(a - 1);
//   }
// };
// looping(10);

let looping = function (a) {
  if (a === 10) {
    return looping;
  } else {
    console.log(a);
    return looping(a + 1);
  }
};
looping(1);
