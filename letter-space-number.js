function letterSpaceNumber(str){
    let matches = /[a-zA-Z]\s\d(?!\d|[a-zA-Z])/g;
    //for every match that is a letter (upper or lower),\s followed by space, \d followed by dicimal,?! and afterwards != alpha nor double digits dicimals
    return str.match(matches) || []
}
console.log(letterSpaceNumber("He is 8 or 9 years old, not 10."))