const round = (x) => {
    if (x > 0) {
        x += 0.5;
        return divide(x, 1);
    } else {
        const decimalPart = x - divide(x, 1);
        if (decimalPart <= -0.5) {
            x -= 0.5;
            return divide(x, 1);
        } else {
            return divide(x, 1);
        }
    }
}

const ceil = (x) => {
    if (divide(x, 1) === x) {
        return x;
    }
    if (x > 0) {
        return divide(x, 1) + 1;
    }
    return divide(x, 1);
}

const floor = (x) => {
    if (divide(x, 1) === x) {
        return x;
    }

    if (x > 0) {
        return divide(x, 1);
    }

    return divide(x, 1) - 1;
}

const trunc = (n) => {
    let hold = 1;
    let giv = 0;
    if (n < 0) {
        n = -n;
        hold = -1;
    }
    if (n > 0xfffffffff) {
        n -= 0xfffffffff;
        giv += 0xfffffffff;
    }
    if (n > -1 && n < 0) {
        return -0;
    }
    if (n >= 0 && n < 1) {
        return 0;
    }
    while (n >= 1) {
        n--;
        giv++;
    }
    return giv * hold;
};

const divide = (a, b) => {
    let result = 0;
    const neg = (a < 0) !== (b < 0);  
    let AbA = a < 0 ? -a : a;
    let AbB = b < 0 ? -b : b;
    while (AbA >= AbB) {
        AbA -= AbB;
        result++;
    }

    return neg ? -result : result;
}