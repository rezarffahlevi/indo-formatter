const {toUcFirst, toRupiah} = require('./src/helpers');
const toTerbilang = require('./src/toTerbilang');
const toTanggal = require('./src/toTanggal');

const idf = {};
idf.toTerbilang = toTerbilang;
idf.toUcFirst = toUcFirst;
idf.toRupiah = toRupiah;
idf.toTanggal = toTanggal;

module.exports = idf, { toTerbilang, toUcFirst, toRupiah, toTanggal };