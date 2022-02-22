//menggunakan literal object
var saya = {
    //properti dan value
    nama: "akmal",
    umur: 24
}

console.log(saya) //output { nama: 'akmal', umur: 24 }

//menambahkan properti dan value diluar object
var mahasiswa = {
    nama: "wahab",
    jurusan: "Teknik Informatika"
}
//tambahkan kodingan ini jika ingin menambah properti
mahasiswa.angkatan = 2016

console.log(mahasiswa) // output { nama: 'wahab', jurusan: 'Teknik Informatika', angkatan: 2016 }

//MENGHAPUS PROPERTI SAAT DIPANGGIL
var mobil = {
    merek: "Jikang",
    warna: "Merah",
    harga: 24000000
}

delete mobil.warna

console.log(mobil) // output { merek: 'Jikang', harga: 24000000 }

//====menambahkan fungsi pada objek
let kucing = {
    lucu: true,
    kaki: 4,
    suara: function () {
        return "meong"
    }
}

console.log(kucing.suara()) //output meong