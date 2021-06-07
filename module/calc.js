module.exports = {
    tambah: function (angka1, angka2) {
        let hasil = Number(angka1) + Number(angka2)
        console.log(hasil)
        return hasil; // Operator Pertambahan di nodejs adalah +
    },
    kurang: function (angka1, angka2) {
        let hasil = Number(angka1) - Number(angka2);
        return hasil; // // Operator Pengurangan di nodejs adalah -
    },
    kali: function (angka1, angka2) {
        let hasil = Number(angka1) * Number(angka2);
        return hasil; // // Operator Perkalian di nodejs adalah *
    },
    bagi: function (angka1, angka2) {
        let hasil = Number(angka1) / Number(angka2);
        return hasil; // // Operator Pembagian di nodejs adalah /
    }
}

// Module exports digunakan untuk mengexport fungsi
// Contoh untuk memanggilnya ada di index.js,