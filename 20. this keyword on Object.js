// ! Cara 1: declaration
// * this mengembalika Object global
// function declare() {
//   console.log("halo");
//   console.log(this);
// }
// declare();

// ! Cara 2:  literal
// * this mengembalika Object yang bersangkutan
// let literal = { a: 10, nama: "Tom" };
// literal.halo = function () {
//   console.log("Halo");
//   console.log(this);
// };
// literal.halo();

// ! Cara3 :Constructor
// * this mengembalikan obejct yang baru dibuat
// function Constructor() {
//   console.log("Halo");
//   console.log(this);
// }
// var obj1 = new Constructor();
