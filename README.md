# indo-formatter

npm https://www.npmjs.com/package/indo-formatter
git https://github.com/rezarffahlevi/indo-formatter

Tersedia:
- Format Rupiah
- Format Angka Terbilang
- Format Tanggal
- Kapital Awal

# Import

```jsx

const idf = require('indo-formatter');

const {toTerbilang, toUcFirst, toRupiah, toTanggal} = require('indo-formatter');

//ES6

import idf, { toTerbilang, toUcFirst, toRupiah, toTanggal } from 'indo-formatter';
```

# Cara pemakaian

```jsx

const idf = require('indo-formatter');

const {toTerbilang, toUcFirst, toRupiah, toTanggal} = require('indo-formatter');

//ES6

import idf, { toTerbilang, toUcFirst, toRupiah, toTanggal } from 'indo-formatter';

// sekali import menggunakan idf

idf.toUcFirst(idf.toTerbilang(10000)); //Sepuluh ribu
idf.toTanggal() //Selasa, 18 februari 2020 (Hari ini)

// menggunakan import function

toTerbilang(2513) //dua ribu lima ratus tiga belas

toUcFirst(toTerbilang(2513)) //Dua ribu lima ratus tiga belas

toRupiah(10000) //Rp. 10.000,00

toRupiah(10000, false) //Rp. 10.000

toTanggal() //Selasa, 18 februari 2020 (Hari ini)

toTanggal('2020-02-17') //Senin, 17 februari 2020

toTanggal('10/21/2012', 'l') //21 okt 2012
```



Semoga bermanfaat
