function init (){
   // let nama = 'randi';

    return function tampilNama(nama){
        console.log(nama);
    }
    
}
let panggilNama = init();
panggilNama('bobo');
panggilNama('coco');





function ucapkanSalam (waktu){
    return function (nama){
        console.log(`halo ${nama}, selamat ${waktu} semoga harimu menyenangkan`);
    }
}

let selamatPagi = ucapkanSalam('pagi');
let selamatSiang = ucapkanSalam('siang');
let selamatMalam = ucapkanSalam('malam');

selamatPagi('oon');
ucapkanSalam('pagi')('opi');




let add = (function(){
    let counter = 0;
    return function (){
    return ++counter;
    }
})();

counter = 100;

console.log(add());
console.log(add());
console.log(add());