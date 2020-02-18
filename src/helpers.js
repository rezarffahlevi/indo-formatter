
const toUcFirst = (string) => {
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
}

const toRupiah = (number, decimal=true) => {
    let tempNum = String(number).split("").reverse()
    let rupiah = ''

    for (let i = 0; i < tempNum.length; i++) {
        if ((i + 1) % 3 == 0 && i != tempNum.length -1) {
            tempNum[i] = `.${tempNum[i]}`
        }
    }
    if(decimal)
        rupiah = `Rp. ${tempNum.reverse().join("")},00`
    else
        rupiah = `Rp. ${tempNum.reverse().join("")}`
    return rupiah
}

module.exports = { toUcFirst, toRupiah };