function groupPrice(str){
    let find = /([A-Z]{3}|\$|£|€)(\d+)\.(\d{2})/g;
    let res = [];
    let match;
    while ((match = find.exec(str)) !== null) {
        res.push([match[0], match[2], match[3]]);
      }
      return res
}

// const price ="The price of $4.00"
// console.log(groupPrice(price))