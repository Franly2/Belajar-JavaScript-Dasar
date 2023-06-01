// var s = "";

// for (var i = 10; i > 0; i--) {
//   for (var j = 0; j < i; j++) {
//     s += "*";
//   }
//   s += "\n";
// }

// console.log(s);

// var s = "";

// for (var x = 0; x < 4; x++) {
//   for (var y = 0; y <= x; y++) {
//     s += "*";
//   }
//   s += "\n";
// }
// console.log(s);

// var s = "";

// for (var x = 0; x < 4; x++) {
//   if (x % 2 == 0) {
//     console.log("# # # # #");
//   } else {
//     console.log(" # # # # #");
//   }
//   s += "\n";
// }
// console.log(s);

function segitiga(tinggi) {
  for (let i = 1; i <= tinggi; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "*";
    }
    console.log(row);
  }
}

// segitiga(10);

let pengisian = "";

function segitigaSamaSisi(tinggi) {
  for (let i = 1; i <= tinggi; i++) {
    // print space nya
    for (let space = 1; space <= tinggi - i; space++) {
      pengisian += " ";
    }
    // print bintang nya
    for (let j = 1; j <= 2 * i - 1; j++) {
      pengisian += "*";
      if (j == 2 * i - 1) {
        pengisian += "\n";
      }
    }
  }
}

segitigaSamaSisi(10);
console.log(pengisian);
