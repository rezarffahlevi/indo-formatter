const {toUcFirst} = require('./helpers');

const bulan = ['januari', 'februari', 'maret', 'april', 'mei', 'juni', 'juli', 'agustus', 'september', 'oktober', 'desember'];
const lbulan = ['jan', 'feb', 'mar', 'apr', 'mei', 'jun', 'jul', 'agu', 'sep', 'okt', 'des'];
const hari = ['minggu', 'senin', 'selasa', 'rabu', 'kamis', `jum'at`, 'sabtu'];

function convertTgl(param, format)
{
    let result = '';
    let day = param.getDay();
    let tgl = param.getDate();
    let bln = param.getMonth();
    let thn = param.getFullYear();

    if(format === 'l')
        result = tgl + ' ' +lbulan[bln] + ' ' + thn ;
    else
        result = hari[day] + ', ' + tgl + ' ' +bulan[bln] + ' ' + thn ;

    return result;
}

const toTanggal = (tanggal, format = 'L') => {
    let result = '';
    if(typeof tanggal == 'string' && tanggal.length === 8)
    {
        let tgl = tanggal.substr(2,2);
        let bln = tanggal.substr(0,2);
        let thn = tanggal.substr(4,4);
        result = tgl + '-' + bln + '-' + thn;
    }
    else if(typeof tanggal == 'string' && tanggal.length > 8)
    {
        let date = new Date(tanggal);
        result = convertTgl(date, format);
    }
    else if(typeof tanggal == 'object')
    {
        result = convertTgl(tanggal, format);
    }
    else {
        let date = new Date();
        result = convertTgl(date, format);   
    }
    return toUcFirst(result);
}

module.exports = toTanggal;