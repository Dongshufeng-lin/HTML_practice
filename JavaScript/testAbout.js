// let a = {};
// b = {
//     n:'3'
// }
// c = {
//     m:'2'
// }
// a[b] = 'TESTA';
// a[c] = 'TESTB';
// console.log(a[c]);

// console.log(a);

var test = (function(i) {
    return function() {
        console.log(i *= 2);
    }
})(2);
test(10000);