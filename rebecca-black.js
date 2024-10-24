function isFriday(date){
    return (date.getDay() ===5)  
}

function isWeekend(date){
     return (date.getDay() ===0||date.getDay() ===6 )
}
function isLeapYear(date){
    return (date.getFullYear()%4===0)
}
function isLastDayOfMonth(date){
    let zz = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    // if (zz.getDate()=== date.getDate()){
        
    // }
    // console.log(zz,date);
    
    return zz.getDate() === date.getDate();
    // console.log(zz)
}
// console.log(isLastDayOfMonth(new Date('2014-10-30')))