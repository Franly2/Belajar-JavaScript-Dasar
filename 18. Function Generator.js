// function* createNames() {
//   yield "Budi";
//   yield "Lewis";
//   yield "Vettel";
// }

// const names = createNames();
// for (const name of names) {
//   console.log(name);

// MENGGUNAKAN ARRAY

// function generateAngkaGanjilArray(value) {
//   const myArr = [];
//   for (let i = 1; i <= value; i++) {
//     if (i % 2 === 1) {
//       console.log("Yield " + i);
//       myArr.push(i);
//     }
//   }
//   return myArr;
// }

// MENGGUNAKAN FUNCTION GENERATOR

function* generateAngkaGanjil(value) {
  for (i = 0; i < value; i++) {
    if (i % 2 === 1) {
      yield i;
    }
  }
}

const AngkaGanjil = generateAngkaGanjil(100);
// for (const ganjil of AngkaGanjil) {
//   console.log(ganjil);
// }

console.info(AngkaGanjil.next().value);
console.info(AngkaGanjil.next().value);
console.info(AngkaGanjil.next().value);
