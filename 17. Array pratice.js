let penumpang = [];

let tambahPenumpang = function (namaPenumpang, penumpang) {
  // JIKA ANGKOT MASIH KOSONG
  if (penumpang.length == 0) {
    penumpang.push(namaPenumpang);
    return penumpang;
  }
  // JIKA ADA INDEX UNDEFINED
  else {
    for (var i = 0; i < penumpang.length; i++) {
      if (penumpang[i] == undefined) {
        penumpang[i] = namaPenumpang;
        return penumpang;
      }
      // JIKA NAMA YANG SAMA SUDAH DI DALAM ANGKOT
      else if (penumpang[i] == namaPenumpang) {
        alert("Penumpang dengan nama tersebut sudah di dalam angkot");
        return penumpang;
      }
      // JIKA ANGKOR SUDAH PENUH
      else if (i == penumpang.length - 1) {
        penumpang.push(namaPenumpang);
        return penumpang;
      }
    }
  }
};

var i = 0;
let hapusPenumpang = function (namaPenumpang, penumpang) {
  if (angkot.length == 0) {
    alert("angkot masih kosong");
  } else {
    for (var i = 0; i < penumpang.length; i++) {
      if (penumpang[i] == namaPenumpang) {
        penumpang[i] = undefined;
        return penumpang;
      } else if (i == penumpang.length - 1) {
        alert("tidak ada penumpang di dalam angkot");
      }
    }
  }
};
