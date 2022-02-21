console.log("=== Hoisting JS === \n------------------------------- ")

//panggil fungsi
sapaOrang()

//fungsi
function sapaOrang() {
    let orang = {
        nama: "Wahab",
        pekerjaan: "mahasiswa"
    }

    console.log(`Hai ${orang.nama}, apakah benar anda adalah seorang ${orang.pekerjaan} ?`)
}

//Fungsi dengan variable global
console.log("\n=== Global function === \n------------------------------- ")

var mahasiswa = {
    nama: "wahab",
    angkatan: 2016
}

const panggilMahasiswa = function () {
    console.log(`Atas nama saudara ${mahasiswa.nama}, anda adalah mahasiswa angkatan ${mahasiswa.angkatan}`)
}

panggilMahasiswa()
//Variable mahasiswa masih bisa dipanggil karena global
console.log(mahasiswa)

//Fungsi dengan variable local
console.log("\n=== Local function === \n------------------------------- ")

const panggilMahasiswa1 = function () {

    var mahasiswa1 = {
        nama: "wahab",
        angkatan: 2016
    }

    console.log(`Atas nama saudara ${mahasiswa1.nama}, anda adalah mahasiswa angkatan ${mahasiswa1.angkatan}`)
}

panggilMahasiswa1()
//Variable mahasiswa tidak bisa dipanggil karena global
// console.log(mahasiswa1) ==> code ini akan error jika diaktifkan

