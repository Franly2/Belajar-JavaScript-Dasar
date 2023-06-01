var a = prompt("berapa panjang sisi kubus 1");
var b = prompt("berapa panjang sisi kubus 2");

function penjumlahanVolumeKubus(a, b) {
  var volumeKubus1 = a * a * a;
  var volumeKubus2 = b * b * b;

  var total = volumeKubus1 + volumeKubus2;

  return total;
}

alert(penjumlahanVolumeKubus(a, b));
