function citiesOnly(arr) {
    // let res = [];
    // for (let obj of arr) {
    //     if (obj.hasOwnProperty('city')) {
    //         res.push(obj['city']);
    //     }
    // }
    // return res;
    return arr.map(a=>a.city)
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function upperCasingStates(arr){
    return arr.map(state => 
        state
        .split(' ') 
        .map(wrd => capitalizeFirstLetter(wrd))
        .join(' ')
    );   
}

function fahrenheitToCelsius(arr) {
    return arr.map(tmp => {
        let fahrenheit = parseFloat(tmp);
        let cl = (fahrenheit - 32) *5/9
    
    return Math.floor(cl) + "°C"
    });
}

function trimTemp(arr) {
  return arr.map(obj => ({
    ...obj,
    temperature: obj.temperature.replace(/\s+/g, '')
  }));
}


function tempForecasts(arr){
    return arr.map(x => {
        let hot = trimTemp([x])[0].temperature
        let cel = fahrenheitToCelsius([hot])[0].replace("°C", "°Celsius")
        let st = upperCasingStates([x.state])[0]
        return `${cel} in ${capitalizeFirstLetter(x.city)}, ${st}`
    })
}
// console.log(tempForecasts([
//     {
//       city: 'Pasadena',
//       temperature: ' 101 °F',
//       state: 'california',
//       region: 'West',
//     },
//   ])) // -> ['38°Celsius in Pasadena, California'])
// console.log(trimTemp( [
//     {
//       city: 'Los Angeles',
//       state: 'california',
//       region: 'West',
//       temperature: '101°F',
//     },
//     {
//       city: 'San Francisco',
//       state: 'california',
//       region: 'West',
//       temperature: '84°F',
//     },
//     { city: 'Miami', state: 'Florida', region: 'South', temperature: '112°F' },
//     {
//       city: 'New York City',
//       state: 'new york',
//       region: 'North East',
//       temperature: '0°F',
//     },
//     { city: 'Juneau', state: 'Alaska', region: 'West', temperature: '21°F' },
//     {
//       city: 'Boston',
//       state: 'massachussetts',
//       region: 'North East',
//       temperature: '45°F',
//     },
//     {
//       city: 'Jackson',
//       state: 'mississippi',
//       region: 'South',
//       temperature: '70°F',
//     },
//     { city: 'Utqiagvik', state: 'Alaska', region: 'West', temperature: '-1°F' },
//     {
//       city: 'Albuquerque',
//       state: 'new mexico',
//       region: 'West',
//       temperature: '95°F',
//     },
//   ])) /* -> [
//     { city: 'Los Angeles', temperature: '101°F' },
//     { city: 'San Francisco', temperature: '84°F' },
//   ] */

// console.log(fahrenheitToCelsius([
//     '30°C',
//     '37°C',
//     '5°C',
//     '12°C',
//     '-13°C',
//     '21°C',
//     '-19°C',
//   ])) // -> ['20°C', '15°C', '-4°C']

// console.log(upperCasingStates(['alabama', 'new jersey'])) // -> ['Alabama', 'New Jersey']

// console.log(citiesOnly([
//     {
//       city: 'Los Angeles',
//       temperature: '  101 °F   ',
//     },
//     {
//       city: 'San Francisco',
//       temperature: ' 84 ° F   ',
//     },
//   ])) // -> ['Los Angeles', 'San Francisco']))