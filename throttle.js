function throttle(fn, delay) {
    let tail = 0;
    return function () {
        const now = +new Date();
        if (now - tail > delay) {
            fn.apply(this, arguments);
            tail = now;
        }
    };
}

function opThrottle(fn, delay, { leading = false, trailing = true } = {}) {
    let tail = 0;
    let timer = null;
    return function () {
        const now = +new Date();
        if (!tail && leading === false) {
            tail = now;
        }
        if (now - tail > delay) {
            if (timer) {
                clearTimeout(timer);
                timer = null;
            }
            fn.apply(this, arguments);
            tail = now;
        } else if (!timer && trailing !== false) {
            timer = setTimeout(() => {
                fn.apply(this, arguments);
                tail = +new Date();
                timer = null;
            }, delay);
        }
    };
}