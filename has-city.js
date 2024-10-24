function hasCity(country, arr){
    return function(city) {
        if (arr.includes(city)) {
            return city + " is a city from " + country;
        } else {
            return city + " is not a city from " + country;
        }
    };
}


// const checkCityInUSA = hasCity('USA', ['New York', 'Los Angeles', 'Chicago', 'Houston']);

// console.log(checkCityInUSA('New York'));
// console.log(checkCityInUSA('Miami'));