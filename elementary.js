

function multiply(a,b){
    let result = 0;
    for (let i = 0; i < Math.abs(b); i++) {
      result += a;
    }
    return b < 0 ? -result : result;
  }

function divide(a,b){
    let count = 0;
    let temp = Math.abs(a);
    
    while (temp >= Math.abs(b)) {
      temp -= Math.abs(b);
      count++;
    }
    return (a < 0) ^ (b < 0) ? -count : count;
  }

function modulo(a,b){
    let div = divide(a,b)
    let mod= multiply(div,b)
    return a-mod
}