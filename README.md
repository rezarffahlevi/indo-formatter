# indo-formatter

NPM https://www.npmjs.com/package/indo-formatter

GIT https://github.com/rezarffahlevi/indo-formatter

Available:
- Rupiah format
- Writing numbers (does not support commas)
- Indonesian date format
- Initial capital
- Relative time

Version 1.0.3

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

toRupiah(10000, false) // Rp. 10.000

toTanggal() // Selasa, 18 februari 2020 (today)

toTanggal('2020-02-17') // Senin, 17 februari 2020

toTanggal('10/21/2012', 'l') // 21 okt 2012


// Assumption is now on March 12, 2020 at 10:30

fromNow('03-04-2020 20:10:00'); // 8 hari yang lalu

fromNow(1583983217435); // 16 menit lagi

fromNow('2021-02-17'); // sekitar 2 tahun lagi

fromNow('2018-02-17'); // sekitar 2 tahun yang lalu
```

# Available Props

| Name                           | Params Type             | Default                        | Description                                                                                                                                |
| ------------------------------ | ---------------- | ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| toTerbilang(param)             | string or int    | none (required)                | Writing numbers (does not support commas), support until 10^62
| toRupiah(param, format)        | string or int, boolean    | none (required), default format is true | For rupiah format. param must be string or int, and format must be boolean. if true rupiah with commas and if false rupiah only
| toTanggal(date, format)        | string or int or timestamp | today                | For Indonesia format date. Date must be string or date with format('YYYY-MM-DD') or format('DD-MM-YYYY') or New Date(); and format default is 'L' if the value format is 'l' so will be return format date Indonesia without day.
| toUcFirst(param)              | string                    | none (required)        | For initial capitalize. param must be string; support until 10^62
| fromNow(param)                | string or int or timestamp | none (required) | For relative time, future or past
