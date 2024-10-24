// const input = document.querySelector("input");
// const defaultTe = document.getElementById("default");
// const debounceT = document.getElementById("debounce");
// const throttleText = document.getElementById("throttle");

// const updebounceTe = debounce((text) => {
//     debounceT.textContent = text;
// }, 300); 

// input.addEventListener("input", (e) => {
//     defaultTe.textContent = e.target.value;
//     updebounceTe(e.target.value); 
// });

function debounce(fn, delay) {
    let timer;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, args), delay);
    };
}

function opDebounce(cb, delay = 1000, { leading = false } = {}) {
    let timer;
    let firstCall = true;

    return function(...args) {
        if (leading && firstCall) {
            cb.apply(this, args); 
            firstCall = false;    
        }

        clearTimeout(timer);

        timer = setTimeout(() => {
            if (!leading) {
                cb.apply(this, args); 
            }
            firstCall = true; 
        }, delay);
    };
}

