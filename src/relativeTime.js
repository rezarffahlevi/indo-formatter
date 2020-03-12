const fromNow = (param) => {

    var current = new Date();
    previous = param === null ? new Date() : new Date(param);
    var msPerMinute = 60 * 1000;
    var msPerHour = msPerMinute * 60;
    var msPerDay = msPerHour * 24;
    var msPerMonth = msPerDay * 30;
    var msPerYear = msPerDay * 365;

    var elapsed = current - previous;
    elapsed = elapsed < 0 ? elapsed*-1 : elapsed;
    var prefix = 'sekitar ';
    var suffix =  previous > current ? ' lagi' : ' yang lalu';

    if (elapsed < msPerMinute) {
         return Math.round(elapsed/1000) + ' detik' + suffix;   
    }

    else if (elapsed < msPerHour) {
         return Math.round(elapsed/msPerMinute) + ' menit' + suffix;   
    }

    else if (elapsed < msPerDay ) {
         return Math.round(elapsed/msPerHour ) + ' jam' + suffix;   
    }

    else if (elapsed < msPerMonth) {
        return Math.round(elapsed/msPerDay) + ' hari' + suffix;   
    }

    else if (elapsed < msPerYear) {
        return Math.round(elapsed/msPerMonth) + ' bulan' + suffix;   
    }

    else {
        return prefix + Math.round(elapsed/msPerYear ) + ' tahun' + suffix;   
    }
}

module.exports = fromNow;