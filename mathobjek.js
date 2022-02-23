//Math.PI
//untuk menghitung pi / jari-jari
let r = 10;
let luasLingkaran = Math.PI * (r ** 2);

console.log(luasLingkaran); // Output: 314.1592653589793

/* Math.abs(x)
Digunakan untuk mengubah angka x yang bernilai negatif menjadi positif.*/

let bilangan1 = -70.5;

console.log(Math.abs(bilangan1)); // Output: 70.5

/* Math.pow(x, y)
Digunakan untuk menghitung hasil dari x pangkat y.*/

let bilangan2 = 6;
let pangkat = 2;

console.log(Math.pow(bilangan2, pangkat)); // Output: 36

/*Math.sqrt(x)
Digunakan untuk menghitung akar kuadrat dari x.*/

let bilangan3 = 64;

console.log(Math.sqrt(bilangan3)); // Output: 8

/*Math.cbrt(x)
Digunakan untuk menghitung akar pangkat 3 dari x.*/

let bilangan4 = 8;

console.log(Math.cbrt(bilangan4)); // Output: 2

/*Math.round(x)
Digunakan untuk membulatkan angka desimal x menjadi bilangan bulat. 
Pembulatan ke atas bila angka di belakang koma lebih besar atau sama dengan 5, 
dan pembulatan ke bawah jika angka di belakang koma kurang dari 5.*/

let bilanganA = 5.7;
let bilanganB = 5.4;

console.log(Math.round(bilanganA)); // Output: 6
console.log(Math.round(bilanganB)); // Output: 5

/*Math.floor(x)
Digunakan untuk membulatkan angka desimal x ke bawah.*/

let bilanganAA = 5.7;
let bilanganBB = 5.4;

console.log(Math.floor(bilanganAA)); // Output: 5
console.log(Math.round(bilanganBB)); // Output: 5

/*Math.ceil(x)
Digunakan untuk membulatkan angka desimal x ke atas.*/

let bilanganAB = 5.7;
let bilanganBA = 5.4;

console.log(Math.ceil(bilanganAB)); // Output: 6
console.log(Math.ceil(bilanganBA)); // Output: 6

/*Math.random()
Digunakan untuk menampilkan angka secara acak antara 0 hingga 1 (0 termasuk. 1 tidak).*/

console.log(Math.random()); // Output: 0.14087695004117018
console.log(Math.random()); // Output: 0.17923176966306498

/*Math.max(x, y, z, ..., n)
Digunakan untuk mencari angka terbesar di antara parameter x, y, z, ..., n.*/

console.log(Math.max(1, 4, 6, 7)); // Output: 7

/*Math.min(x, y, z, ..., n)
Digunakan untuk mencari angka terkecil di antara parameter x, y, z, ..., n.*/

console.log(Math.min(1, 4, 6, 7)); // Output: 1