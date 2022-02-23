//IF,ELSE PADA JAVA SCRIPT 
console.log("\nIF, ELSE, ELSE IF=======")
const sudahMenikah = "Belum"

if (sudahMenikah === "Belum") {
    console.log("Semoga cepat menyusul")
} else {
    console.log("Semoga Sakinah Mawaddah Warohmah")
}

//IF, ELSE IF, ELSE
const sudahLulus = "Bentar lagi"

if (sudahLulus === "Sudah") {
    console.log("Alhamdulillah")
} else if (sudahLulus === "Bentar lagi") {
    console.log("Semoga dipermudah")
} else {
    console.log("Ayo Semangat!")
}

//SWITCH CASE
console.log("\nSWITCH CASE=======")
const cuaca = "Gerimis"

switch (cuaca) {
    case "Hujan":
        console.log("Pakai jas hujan")
        break
    case "Gerimis":
        console.log("Pakai payung")
        break
    case "Cerah":
        console.log("Ayo bermain!")
        break
    default:
        console.log("Males keluar")
}

// MENCOBA 
console.log("\nMENCOBA=======")

var nilai = 99

if (nilai >= 80) {
    console.log("Nilai A")
} else if (nilai < 80 && nilai >= 60) {
    console.log("Nilai B")
} else if (nilai < 60 && nilai >= 40) {
    console.log("Nilai C")
} else if (nilai < 40 && nilai >= 1) {
    console.log("Nilai D")
} else {
    console.log("Nilai E (MENGULANG!)")
}

//soal lainnya
function ganjilGenap(platNomor) {
    // Tulis kode kalian di dalam fungsi ini

    if (platNomor % 2 === 0) {
        return "Genap"
    } else {
        return "Ganjil"
    }

    platNomor(23768)

}