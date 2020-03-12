const {toUcFirst, toRupiah} = require('./src/helpers');
const toTerbilang = require('./src/toTerbilang');
const toTanggal = require('./src/toTanggal');
const fromNow = require('./src/relativeTime');

const idf = {};
idf.toTerbilang = toTerbilang;
idf.toUcFirst = toUcFirst;
idf.toRupiah = toRupiah;
idf.toTanggal = toTanggal;
idf.fromNow = fromNow;

module.exports = idf, { toTerbilang, toUcFirst, toRupiah, toTanggal, fromNow};