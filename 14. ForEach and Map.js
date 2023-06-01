let myArr = ["Budi", "Rafael", "Gaby"];

myArr.forEach(function (e, i) {
  console.log("Mahasiswa ke " + (i + 1) + " : " + e);
});

let angka = [1, 2, 5, 3, 6, 2, 3, 6, 9];

let angka2 = angka.map(function (e) {
  return e * 2;
});

console.log(angka2.join());
