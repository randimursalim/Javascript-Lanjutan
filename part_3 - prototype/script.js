// cara untuk membuat object pada javascript
// 1. object literal
// Poblem : tidak efektif untuk objek yang banyak
let mahasiswa1 = {
    nama: "randi",
    energy: 10,
    makan: function (porsi){
        this.energy=this.energy+porsi;
        console.log(`halo ${this.nama}, Selamat makan! `);
    }
}




let mahasiswa2 = {
    nama: "gopal",
    energy: 20,
    makan: function (porsi){
        this.energy=this.energy+porsi;
        console.log(`halo ${this.nama}, Selamat makan! `);
    }
}

// 2. function declaration

const methodMahasiswa = {
    makan: function (porsi) {
        this.energy += porsi;
        console.log(`halo ${this.nama}, selamat makan!`);
    },

    main: function (main) {
        this.energy -= main;
        console.log(`hai ${this.nama}, Selamat Main!`);
    },

    tidur: function (jam) {
        this.energy += jam * 2;
        console.log(`halo ${this.nama}, selamat tidur!`);
    }
};

// function Mahasiswa(nama, energy){
//     let mahasiswa = Object.create(methodMahasiswa);

//     mahasiswa.nama = nama;
//     mahasiswa.energy = energy;
    

    
//     return mahasiswa;
    
// }

// let adudu = Mahasiswa("adudu", 50);

// function Mahasiswa(nama, energy){
//     // let mahasiswa = Object.create(methodMahasiswa);
//     // let this = object.create(Mahasiswa.prototype);
//     this.nama = nama;
//     this.energy = energy;

//     Mahasiswa.prototype.makan = function(porsi){
//         this.energy += porsi;
//         return `halo ${this.nama}, selamat makan!`;
//     }

//     Mahasiswa.prototype.main = function (jam) {
//         this.energy -= jam;
//         return `halo ${this.nama}, selamat bermain!`;
//     }

//     Mahasiswa.prototype.tidur = function (jam) {
//         this.energy += jam * 2;
//         return `halo ${this.nama}, selamat tidur!`;
//     }

// }

// let bagaga = new Mahasiswa("bagaga", 50);

// versi class
class Mahasiswa {
    constructor (nama, energy){
        this.nama = nama;
        this.energy = energy;
    }

    makan (porsi){
        this.energy += porsi;
        return `halo ${this.nama}, selamat makan!`;
    }

    main (jam) {
        this.energy -= jam;
        return `halo ${this.nama}, selamat bermain!`;
    }

    tidur (jam) {
        this.energy += jam * 2;
        return `halo ${this.nama}, selamat tidur!`;
    }
}

let papazola = new Mahasiswa("papa zola", 100);

let angka = [1,2,3];
angka.reverse();

// 3. constructor function
// keyword new
function MahasiswaBaru(nama, energy){

    this.nama = nama;
    this.energy = energy;

    this.makan = function (porsi) {
        this.energy += porsi;
        console.log(`halo ${this.nama}, selamat makan!`);
    }

    this.main = function (main) {
        this.energy -= main;
        console.log(`hai ${this.nama}, Selamat Main!`);
    }
    
}

let bagogo = new MahasiswaBaru("bagogo", 80);

// 4. object.create