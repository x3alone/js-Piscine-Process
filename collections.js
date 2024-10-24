function arrToSet(x) {
    const mySet = new Set(x); 
    return mySet;
}
function arrToStr(arr){
    return arr.join("");
 }
function setToArr(set){
    return Array.from(set);
}

function setToStr(sett){
    var st = setToArr(sett)
    var str = arrToStr(st)
    return str;
}
function strToArr(str){
    return Array.from(str);
}

function strToSet(strr){
    const set = new Set(strr)
    return set
}
function mapToObj(map){
    return Object.fromEntries(map)
}
function objToArr(obj){
    return Object.values(obj)
}
function objToMap(a){
    const map = new Map(Object.entries(a));
    return map

}
function arrToObj(ar){
    const obje = Object.fromEntries(Object.entries(ar));
    return obje
}
function strToObj(st){
    const object = Object.fromEntries(Object.entries(st));
    return object
}

function superTypeOf(o) {
    if (o instanceof Map) {
        return "Map";
    }
    if (o instanceof Set) {
        return "Set";
    }
    if (Array.isArray(o)) {
        return "Array";
    }
    if (o === null) {
        return "null";
    }
    if (typeof o === "string") {
        return "String";
    }
    if (typeof o === "number") {
        return "Number";
    }
    if (typeof o === "function") {
        return "Function";
    }
    if ( o instanceof Object && ! Array.isArray(o) && typeof o !== "function") {
        return "Object";
    }
    return typeof o; 
}

// console.log(strToObj('1 2 3'))