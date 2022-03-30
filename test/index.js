const idf = require('../index');
const {toTerbilang, toUcFirst, toRupiah, toTanggal, fromNow} = require('../index');

console.log(idf.toUcFirst(idf.toTerbilang(10000)));
console.log(toUcFirst(toTerbilang(2513)));
console.log(toRupiah(10000));
console.log(toRupiah(10000, false));
console.log(toTanggal());
console.log(toTanggal('2020-02-17'));
console.log(toTanggal('02-17-2020'));
console.log(toTanggal('17-02-2020'));
console.log(toTanggal(new Date('2020/02/16')));
console.log(toTanggal('10/21/2012', 'l'));
console.log(toTanggal('10/21/2012'));
console.log(toTanggal('21/10/2012'));
console.log(toTanggal(1588599301));
console.log(toTanggal(1588599301000));

console.log(fromNow('03-04-2020 20:10:00'));
console.log(fromNow(1583983217435));
console.log(fromNow('2020-02-17'));