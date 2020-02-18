# indo-formatter

Tersedia:
- Format Rupiah
- Format angka terbilang
- Format Tanggal
- Kapital Awal

Cara pemakaian:

const idf = require('../index');
const {toTerbilang, toUcFirst, toRupiah, toTanggal} = require('../index');

//ES6
import idf, { toTerbilang, toUcFirst, toRupiah, toTanggal } from 'indo-formatter';

idf.toUcFirst(idf.toTerbilang(10000)); //Sepuluh ribu
toUcFirst(toTerbilang(2513)) //Dua ribu lima ratus tiga belas
toRupiah(10000) //Rp. 10.000,00
toRupiah(10000, false) //Rp. 10.000
toTanggal() //Selasa, 18 februari 2020 (Hari ini)
toTanggal('2020-02-17') //Senin, 17 februari 2020
toTanggal('10/21/2012', 'l') //21 okt 2012

Semoga bermanfaat
