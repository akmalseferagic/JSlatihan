//cara 1
var mahasiswa = ["Wahab", "Rahmanto"]

console.log(mahasiswa) //output  ['Wahab', 'Rahmanto' ]

//cara 2
var mahasiswa2 = new Array("Fahmi", "Hafidzulhaq")

console.log(mahasiswa2) //output [ 'Fahmi', 'Hafidzulhaq' ]

//====index dan lenght
// index selalu dimulai dari 0
// length selalu dimulai dari 1

//contoh 1
var mahasiswa3 = ["Satria", "Rahmanto"]

console.log(mahasiswa3[mahasiswa3.length - 2]) //output satria

//mengubah indeks value dari array
var mahasiswa4 = ["Adit", "Arif"]
mahasiswa4[0] = "Reza"

console.log(mahasiswa4) // output [ 'Reza', 'Arif' ]

//===== toString Method =======
//mengubah bentuk array menjadi string ketika dipanggil
var mahasiswa5 = ["Chairil", "Yazid"]

console.log(mahasiswa5.toString()) //output Chairil,Yazid

//menambahkan join pada array
var mahasiswa6 = ["Haya", "Syfa"]

console.log(mahasiswa6.join(" ")) //output Haya Syfa , bisa diganti menjadi apapun.

//method POP
//method pop akan menghapus indeks array terakhir dan memunculkan sisasnya ketika dipanggil
var kopi = ["Arabica", "Robusta", "Kopi Susu"]
kopi.pop()

console.log(kopi) // output [ 'Arabica', 'Robusta' ]

//method PUSH
//menambahkan indeks kedalam array paling belakang ketika dipanggil
var juice = ["jus jambu", "jus mangga", "jus alpukat"]
juice.push("jus amma")

console.log(juice) //output [ 'jus jambu', 'jus mangga', 'jus alpukat', 'jus amma' ]

//method SHIFT
//kebalikan dari POP, yaitu menghilangkan indeks awal dari array ketika dipanggil.
var ML = ["miya", "Johnson", "Akai", "Zilong"]
ML.shift()

console.log(ML) //output [ 'Johnson', 'Akai', 'Zilong' ]

//UNSHIFT
//sama seperti PUSH, namun bedanya ini menambahkan elemen di awal array
var matakuliah = ["DDP", "jaringan", "DKV", "Pemrograman Web"]
matakuliah.unshift("Bahasa Indonesia")

console.log(matakuliah) //output [ 'Bahasa Indonesia', 'DDP', 'jaringan', 'DKV', 'Pemrograman Web' ]

//CONCAT
//menggabungkan 2 variable menjadi 1
var jurusan = ["Informatika", "Sistem Informasi"]
var newJurusan = ["Bisnis Digital"]

console.log(jurusan.concat(newJurusan)) //output [ 'Informatika', 'Sistem Informasi', 'Bisnis Digital' ]

//SLICE
//digunakan untuk mengambil elemen lain dari array yang sudah ada, dan disimpan di variable baru.
var merekHp = ["Xiaomi", "Redmi", "Samsung", "Nokia", "Blackberry"]
var newMerekHp = merekHp.slice(2, 5) // varibale newMerekHp akan mengambil element dari indeks ke2 , dan mengambil sampai length ke5

console.log(newMerekHp) // output [ 'Samsung', 'Nokia', 'Blackberry' ]

//SORT
var buah = ["Mangga", "Apel", "Alpukat", "Jeruk", "Jambu", "Ceri", "Delima", "Sawo"] //sedangkan jika dengan alphabet, tidak akan ada masalah
console.log(buah.sort())
//kita coba dengan angka
var angka = [1, 4, 7, 8, 9, 5, 3, 2, 11, 15, 24, 65] //akan menyortir dari karakter, misal jika ada angka 10 diantara 1, 3, 5, 10, 
//maka angka 10 akan diletakkan setelah angka 1 karena karakter awalnya adalah angka 1

console.log(angka.sort()) // output [1, 11, 15,  2, 24, 3,  4,  5, 65,  7, 8,  9]

//solusinya
var newAngka = [1, 4, 7, 8, 9, 5, 3, 2, 11, 15, 24, 65]

console.log(newAngka.sort((a, b) => a - b)) // output akan rapih dari urutan terkecil ke terbesar

//REVERSE
var angkaBaru = [1, 4, 7, 8, 9, 5, 3, 2, 11, 15, 24, 65]

console.log(angkaBaru.reverse())

//SPLICE 
//menambah, menghapus dan mengganti element di array dengan splice
var manUnited = ["Ronaldo", "Bruno", "Pogba", "Cavani", "Fred"]

manUnited.splice(3, 0, "De Gea") //3 adalah indeks mana yang kamu pilih untuk awalan elemen baru kamu.
//0 adalah lenght mana yang akan dieksekusi, dalam kasus ini, akan terhapus jika memilih diatas 0.

console.log(manUnited)

