function indexOf(arr, value, start =0) {
    if (start < 0) start = 0;
    for (let i = start; i < arr.length; i++) {
        if (arr[i] === value) {
            return i;
        }
    }
    return -1;
}

function lastIndexOf(arr, value, start= arr.length-1) {
    if (start >= arr.length) start = arr.length - 1;
    for (let i = start; i >= 0; i--) {
        if (arr[i] === value) {
            return i;
        }
    }
    return -1;
}

function includes(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return true;
        }
    }
    return false;
}

console.log(lastIndexOf(["t",0,0,"t"],"t",2))