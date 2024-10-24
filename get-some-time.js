function firstDayWeek(nb, year){
    if (nb == 1) {
        return ("01-01-"+year)
    }
    let z= new Date(year)
    let date =new Date(z.getTime() + ((nb -1)*7*24*60*60*1000))
    while(date.getDay()!== 1){
        date.setDate(date.getDate()-1)
    }
    console.log(date)
    let day = date.getDate().toString().padStart(2, "0")
    let month = (date.getMonth()+1).toString().padStart(2, "0")
     year = date.getFullYear().toString().padStart(4, "0")

    return `${day}-${month}-${year}`
}
console.log(firstDayWeek(1, '4000'))