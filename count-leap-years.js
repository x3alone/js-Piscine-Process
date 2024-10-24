function countLeapYears(date){
    let statrack = 0

    for (let i= 1 ; i < date.getFullYear(); i++){
        if ((i %4 ===0 && i % 100!== 0) || i %400===0){
            statrack++
        }
    }
    return statrack
}
// console.log(countLeapYears(new Date('1664-08-09')))