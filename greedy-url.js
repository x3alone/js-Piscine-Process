function getURL(x){
    const find = /https?:\/\/[^\s]+/g;
    return dataSet.match(find) || []; 
}
function greedyQuery(dataSet) {
    const urls = getURL(dataSet);
    return urls.filter(url => {
        const queryParams = url.split('?')[1]; 
        return queryParams ? (queryParams.split('&').length >= 3) : false;
    })
}
function notSoGreedy(dataSet) {
    const urls = getURL(dataSet);
    return urls.filter(url => {
        const queryParams = url.split('?')[1]; 
        return queryParams ? (queryParams.split('&').length >= 2 && queryParams.split('&').length <= 3) : false; 
    });
}


// const dataSet = "qqq http:// qqqq q qqqqq https://something.com/hello qqqqqqq qhttp://example.com/hello?you=something&something=you&more=param";


// console.log(notSoGreedy(dataSet));