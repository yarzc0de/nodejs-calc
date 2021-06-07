const calcFunc = require("./module/calc");
const readline = require("readline-sync");

(async () => {
    isNext = false;
    do {
        console.log("Tipe Kalkulator Sederhana")
        console.log("1 = Pertambahan")
        console.log("2 = Pengurangan");
        console.log("3 = Perkalian")
        console.log("4 = Pembagian")
        let tipe = readline.question("Tipe : ");
        let typeName = "";
    
        let angka1 = readline.question("Angka 1 : ");
        let angka2 = readline.question("Angka 2 : ");
        let hasil = "";
        if(tipe === "1") {
            typeName = "Ditambah"
            hasil = calcFunc.tambah(angka1, angka2);
        } else if(tipe === "2") {
            typeName = "Dikurang"
            hasil = calcFunc.kurang(angka1, angka2);
        } else if(tipe === "3") {
            typeName = "Dikali"
            hasil = calcFunc.kali(angka1, angka2);
        } else if(tipe === "4") {
            typeName = "Dibagi"
            hasil = calcFunc.bagi(angka1, angka2);
        } else {
            console.log("Tipe tidak ditemukan");
        }

        console.log("Hasil dari "+angka1+" "+typeName+" "+angka2+" adalah "+hasil);
        let lanjut = readline.question("Continue? (y/N) ");

        if(lanjut.toLowerCase() == "y") {
            isNext = true;
        } else {
            isNext = false;
        }
    } while(isNext);
})();