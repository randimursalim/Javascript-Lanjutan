// 2.1 execution context, hoisting & scope

var nama = 'bobi';
console.log(nama);

// creation phase pada global context
// nama var = undefinied
// nama function = fn()
// hoisting
// window = global object
// this = window
// execution phase


var nama1 = 'randi';
var umur = '23';

console.log(sayHello());

function sayHello(){
    return(`hello, nama saya ${nama1}, umur saya ${umur} tahun`);
}

// function membuat local execution context
// yang di dalamnya terdapat creation dan eecution phase
// window
// arguments
// hoisting

var nama3 = 'liu kang';
var username = '@firegodLiukang';

function cetakURL (){
    console.log('penghianat ' + arguments[0]);
    var instagramURL = 'http://instagram.com/';
    return instagramURL + username;
}

console.log(cetakURL('@ShangTsungTheBetrayal'));

function a () {
    console.log('ini a');

    function b () {
        console.log('ini b');

        function c () {
            console.log('ini c');
        }
        c();
    }
    b();
}
a();