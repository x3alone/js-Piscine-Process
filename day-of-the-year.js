function dayOfTheYear(date){
    if (date.getUTCMonth()+1 == 1) {
        return 1;
}

let mine = date.getDate()+1;

for (let i = date.getMonth(); i > 0; i--) {
        date.setDate(-1);
        mine += date.getDate()+1;
}
return mine-1;
};

// console.log(dayOfTheYear(new Date('1664-08-09')))