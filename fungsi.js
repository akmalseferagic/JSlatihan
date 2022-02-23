console.log("=== Deklarasi fungsi === \n------------------------------- ")

//cara1
function penjumlahan1() {
    console.log("1.", 10 + 2)
}

penjumlahan1()

//cara2
var penjumlahan2 = function () {
    console.log("2.", 100 + 30)
}

penjumlahan2()

//cara3
function luasSegitiga(alas, tinggi) {
    console.log("3.", alas * tinggi / 2, "cm")
}

luasSegitiga(7, 14)
//atau
function luasSegitiga2(alas, tinggi) {
    return alas * tinggi / 2
}

console.log("3.", luasSegitiga2(7, 14), "cm")
