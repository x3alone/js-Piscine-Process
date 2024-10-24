const escapeStr = "\`\\\/\"\'";
const arr = [4, '2'];
const obj = {
    str: "heldbyme",
    num: 313113113111313,
    bool: true,
    undef: undefined,
};
const nested = {
    arr: [4, undefined, '2'],
    obj: {
        str: "sec",
        num: 318318318,
        bool: true,
        undef: undefined,
    }
};
Object.freeze(nested.arr);
Object.freeze(nested.obj);
Object.freeze(nested)
Object.freeze(arr);
Object.freeze(obj);