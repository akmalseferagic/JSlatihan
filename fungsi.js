//Penjumlahan
console.log("===PENJUMLAHAN===")

//Case 1
function penjumlahan() {
    console.log(10 + 2)
}
penjumlahan()

//Case 2
var penjumlahan1 = function () {
    console.log("Hasilnya adalah :", 20 + 10)
}
penjumlahan1()

// argumen dari fungsi bisa diubah, dengan menentukan parameter saat deklarasi
function persegipan(panjang /*parameter 1*/, lebar/*parameter 2*/) {
    console.log(panjang * lebar)
}

persegipan(10, 2)
//========//
var persegipan1 = function (panjang, lebar) {
    return panjang + lebar
}

console.log("Hasilnya adalah :", persegipan1(24, 18))