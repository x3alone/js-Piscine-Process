
is.num = function(a){
    return typeof a === 'number';
}
is.nan = function(b){
    return Number.isNaN(b);
}
is.str = function(c){
    return typeof c === "string";
}
is.bool = function(d){
    return typeof d ==="boolean";
}
is.undef = function(e){
    return typeof e ==="undefined";
}
is.def = function (f){
    return typeof f !== "undefined";
}
is.arr = function (g){
    return Array.isArray(g);
}
is.obj = function(h){
    return typeof h === 'object' && !Array.isArray(h) && h !== null;
}
is.fun = function(i){
    return typeof i === 'function';
}
is.truthy = function(i){
    return Boolean(i) === true;
}
is.falsy = function(j){
    return Boolean(j) === false;
}
