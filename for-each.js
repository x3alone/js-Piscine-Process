function forEach(arr, fn){
    // if (typeof arr !== Array.isArray && typeof fn !== 'function'){
    //     return
    // }
    for (let i = 0; i < arr.length; i++) {
        fn(arr[i], i, arr);
    }
}