let angka = [1, 20, 5, 3, 6, 2, 10, 3, 6, 30, 9];
// let angka = ["aaron", "birn", "cris", 3, 6, "abe", 10, 3, 6, "agustus", "lyne"];

angka.sort(function (a, b) {
  return a - b;
});

console.log(angka.join(" - "));
