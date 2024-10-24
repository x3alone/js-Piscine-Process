function matchCron(string ,date) {
    let corner = string.split(' ');
    let minute = date.getMinutes();
    let hour = date.getHours();
    let day = date.getDate();
    let month = date.getMonth()+1 ;
    let dayow = date.getDay() 

    if (corner[0] !== '*' && parseInt(corner[0]) !== minute) {
        return false
}
if (corner[1] !== '*' && parseInt(corner[1]) !== hour) {
    return false
}
if (corner[2] !== '*' && parseInt(corner[2]) !== day) {
    return false
}
if (corner[3] !== '*' && parseInt(corner[3]) !== month) {
    return false
}
if (corner[4] !== '*' && parseInt(corner[4]) !== dayow) {
    return false
}

return true
}

console.log(matchCron('* * * 2 *', new Date('2021-02-01 00:00:00'))) // -> true
console.log(matchCron('9 * * * *', new Date('2020-05-30 19:09:00'))) // -> true
console.log(matchCron('9 * * * *', new Date('2020-05-30 19:21:00'))) // -> false
//         | | | | |
//         | | | | +- Day of the Week   (range: 1-7, 1 is Monday)
//         | | | +--- Month of the Year (range: 1-12)
//         | | +----- Day of the Month  (range: 1-31)
//         | +------- Hour              (range: 0-23)
//         +--------- Minute            (range: 0-59)