function addWeek(date) {
    if (typeof date !== 'object' || date === null || !(date instanceof Date)) {
        return null;
    }
    const days = {
        0: 'Monday',
        1: 'Tuesday',
        2: 'Wednesday',
        3: 'Thursday',
        4: 'Friday',
        5: 'Saturday',
        6: 'Sunday',
        7: 'secondMonday',
        8: 'secondTuesday',
        9: 'secondWednesday',
        10: 'secondThursday',
        11: 'secondFriday',
        12: 'secondSaturday',
        13: 'secondSunday'
    };
    let base=new Date('0001-01-01')
    let dif = date.getTime() - base.getTime()
    let conv = Math.floor(dif / (1000*60*60*24))
    let res = conv % 14
return days[res]
}

function timeTravel({ date, hour, minute, second }) {
    if (typeof date !== 'object' || date === null || !(date instanceof Date)) {
        return null;
    }
    let newDate = new Date(date);
    newDate.setHours(hour);
    newDate.setMinutes(minute);
    newDate.setSeconds(second);
    return newDate;

}




// console.log(
//     timeTravel({
//         date: new Date('2020-05-29 23:25:22'),
//         hour: 21,
//         minute: 22,
//         second: 22
//     }).toString()
// );
// console.log(addWeek(new Date('0001-01-08')));