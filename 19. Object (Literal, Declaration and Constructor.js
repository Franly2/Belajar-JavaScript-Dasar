// MENGGUNAKAN CARA LITERAL
let siswa1 = {
  nama: "Jansen",
  usia: 13 + " Tahun",
  kelas: 8,
  nilai: [7, 6, 8, 5, 7, 9, 8, 5, 7],
};

let siswa2 = {
  nama: "Shaw",
  usia: 14 + " Tahun",
  kelas: 9,
  nilai: [5, 8, 3, 5, 9, 6, 8, 9, 7],
};

// CARA FUNCTION DECLARATION
function buatObjectSiswa(nama, usia, kelas, nilai) {
  let siswa = {};
  siswa.nama = nama;
  siswa.usia = usia;
  siswa.kelas = kelas;
  siswa.nilai = nilai;
  return siswa;
}

let siswa3 = buatObjectSiswa("Vin", 13, 8, [8, 7, 7, 6, 8, 9, 7, 5, 7]);
let siswa4 = buatObjectSiswa("Paul", 14, 9, [7, 7, 7, 6, 8, 3, 7, 6, 7]);

// CARA CONSTRUCTOR FUNCTION
function Siswa(nama, usia, kelas, nilai) {
  this.nama = nama;
  this.usia = usia;
  this.kelas = kelas;
  this.nilai = nilai;
}

let siswa5 = new Siswa("Mia", 14, 9, [7, 5, 7, 5, 9, 8, 9, 9, 9]);
