//Perulangan FOR
console.log("\nPerulangan FOR =====")
for (var i = 1; i <= 10; i++) {
    console.log(i)
}

//Perulangan WHILE, DO WHILE
console.log("\nWHILE =====")
var angka = 1

while (angka <= 21) {
    console.log(angka++)
}

//
console.log("\nDO WHILE =====")
var angka1 = 2

do {
    angka1++
    console.log(angka1)
} while (angka1 < 10)

/*For/In Loop
Berbeda dengan for loop dari topik sebelumnya, 
for...in digunakan untuk mengulang setiap properti dari sebuah objek.*/
console.log("\nFor/In Loop =====")
var merekHp = {
    merek: "Samsung Xt72",
    tahun: 2018,
    warna: "Hitam"
}

for (prop in merekHp) {
    console.log(prop, ":", merekHp[prop])
}
//perbedaan jika tidak diloop
console.log(merekHp)

/*For/Of Loop
Berbeda dengan for loop dari topik sebelumnya, 
for...of digunakan untuk mengulang setiap element dari objek yang bisa diulang (contoh array atau string).*/
console.log("\nFor/Of Loop =====")
var Movies = ["Spiderman : Far From Home", "Guardian Of Galaxy", "The Matrix Rescuriction", "Justice League"]

for (prop of Movies) {
    console.log(prop)
}


//While For/in/Of Loop
console.log("\nWhile For/Of/In Loop =====")
var Film = ["Spiderman : Far From Home", "Guardian Of Galaxy", "The Matrix Rescuriction", "Justice League"]
var i = 1

while (i <= 4) {
    for (prop of Film) {
        console.log(i, prop)
        i++
    }
}


//========================================================================
//soal latihan
console.log("\nSOAL =====")
let bilangan = [1, 46, 75, 12, 89, 54, 101];
let genap = [];

// Tulis kode kalian di bawah ini

for (j = 0; j < bilangan.length; j++) {
    if (bilangan[j] % 2 === 0) {
        genap.push(bilangan[j])
    }

}

console.log(genap)

//Soal lagi
console.log("\nSOAL lagi =====")
let angkasa = [1, 46, 75, 12, 89, 54, 101];
let ganjil = [];

// Tulis kode kalian di bawah ini

for (prop of angkasa) {
    if (prop % 2 === 1) {
        ganjil.push(prop)

    }
}
console.log(ganjil)

//soal lagi
console.log("\nSOAL lagi =====")
let angkas = [];
var i = 5

// Tulis kode kalian di bawah ini
while (i >= 0) {
    angkas.push(i)
    i--
}
console.log(angkas)
