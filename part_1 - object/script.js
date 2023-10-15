// cara untuk membuat object pada javascript
// 1. object literal
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

function Mahasiswa(nama, energy){
    let mahasiswa = {};

    mahasiswa.nama = nama;
    mahasiswa.energy = energy;

    mahasiswa.makan = function (porsi) {
        this.energy += porsi;
        console.log(`halo ${this.nama}, selamat makan!`);
    }

    mahasiswa.main = function (main) {
        this.energy -= main;
        console.log(`hai ${this.nama}, Selamat Main!`);
    }
    return mahasiswa;
    
}

let adudu = Mahasiswa("adudu", 50);

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