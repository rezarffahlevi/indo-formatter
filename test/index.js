const idf = require('../index');
const {toTerbilang, toUcFirst, toRupiah, toTanggal} = require('../index');

console.log(idf.toUcFirst(idf.toTerbilang(10000)));
console.log(toUcFirst(toTerbilang(2513)));
console.log(toRupiah(10000));
console.log(toRupiah(10000, false));
console.log(toTanggal());
console.log(toTanggal('2020-02-17'));
console.log(toTanggal(new Date('2020/02/16')));
console.log(toTanggal('10/21/2012', 'l'));