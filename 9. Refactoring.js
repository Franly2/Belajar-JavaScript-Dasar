function penjumlahanVolumeKubus(a, b) {
  var kubus1 = a * a * a;
  var kubus2 = b * b * b;

  var total = kubus1 + kubus2;

  return total;
}

alert(penjumlahanVolumeKubus(3, 8));

//   SETELAH REFACTORING

function penjumlahanVolumeKubus(a, b) {
  return a * a * a + b * b * b;
}

alert(penjumlahanVolumeKubus(3, 8));
