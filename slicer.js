function slice(arr,start = 0,end=arr.length){
    if (start < 0){ 
        start =arr.length+start
        if (start<0){
            start =0
        }
    }
    if (end < 0){ 
        end =arr.length+end
        if (end<0){
            end =0
        }
    }
    else if (end >arr.length){
        end=arr.length;
    }
    if (Array.isArray(arr)=== true ){
    var str = []
    for (let i = start; i < end; i++){
        str.push(arr[i]);
        }
    return str;
    }
    if (typeof arr ==='string') {
        var str = ""
    for (let i = start; i < end; i++){
          str= str +(arr[i]);
        }
    return str;
    }
}

// console.log(slice([1,2,3,4,5,6],2))
// console.log(slice('abcdef', -3))