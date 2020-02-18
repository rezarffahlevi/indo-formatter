# indo-formatter

npm https://www.npmjs.com/package/indo-formatter

git https://github.com/rezarffahlevi/indo-formatter

Avaible:
- Rupiah format
- Number writing (not yet support coma)
- Date format Indonesia
- Initial capital

# Import

```jsx

const idf = require('indo-formatter');

//Or

const {toTerbilang, toUcFirst, toRupiah, toTanggal} = require('indo-formatter');

//ES6

import idf, { toTerbilang, toUcFirst, toRupiah, toTanggal } from 'indo-formatter';
```

# Example

```jsx
// with default

idf.toUcFirst(idf.toTerbilang(10000)); //Sepuluh ribu
idf.toTanggal() //Selasa, 18 februari 2020 (Hari ini)


// with import function

toTerbilang(2513) //dua ribu lima ratus tiga belas

toUcFirst(toTerbilang(2513)) //Dua ribu lima ratus tiga belas

toRupiah(10000) //Rp. 10.000,00

toRupiah(10000, false) //Rp. 10.000

toTanggal() //Selasa, 18 februari 2020 (Hari ini)

toTanggal('2020-02-17') //Senin, 17 februari 2020

toTanggal('10/21/2012', 'l') //21 okt 2012
```

# PROPS
```
- toTerbilang(param) -> For number writing
param must be string or int, and not yet support for coma, support until 10^62

- toRupiah(param, format) -> For rupiah format
param must be string or int, and format must be boolean. if true rupiah with coma and if false rupiah only

- toTanggal(date, format) -> For Indonesia format date
date must be string or date with format('YYYY-MM-DD') or format('DD-MM-YYYY') or New Date();
and format default is 'L' if the value format is 'l' so will be return format date Indonesia without day.

- toUcFirst(param) -> For initial capitalize
param must be string;

```
