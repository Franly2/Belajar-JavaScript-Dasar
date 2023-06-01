let angka = [1, 6, 3, 7, 2, 5, 7, 2, 5, 2, 9, 4];

let angka2 = angka.filter(function (e) {
  return e > 5;
});

console.log(angka2);

// filter dapat menamilpkan lebih dari satu nilai
// find hanya menampilkan satu nilai yang pertama kali ditemukan
