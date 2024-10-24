function defaultCurry(obj) {
    return function (obj2) {
        let ans = { ...obj };
        Object.keys(obj2).forEach(function (key) {
            ans[key] = obj2[key];
        });
        return ans;
    };
}

function mapCurry(func) {
    return function (obj) {
        let ans = {};
        Object.keys(obj).forEach(function (key) {
            let buf = func([key, obj[key]]);
            ans[buf[0]] = buf[1];
        });
        return ans;
    };
}

function reduceCurry(func) {
    return function (obj, acc) {
        let ans = Number.isInteger(acc) ? 0 : acc;
        Object.keys(obj).forEach(function (key) {
            let buf = func(acc, [key, obj[key]]);
            if (Number.isInteger(buf)) {
                ans += buf;
            } else {
                ans += buf.split(acc)[1];
            }
        });
        return ans;
    };
}

function filterCurry(func) {
    return function (obj) {
        let ans = {};
        Object.keys(obj).forEach(function (key) {
            if (func([key, obj[key]])) {
                ans[key] = obj[key];
            }
        });
        return ans;
    };
}

function reduceScore(obj, acc) {
    if (acc === undefined) acc = 0;
    let filtered = filterCurry(function ([, v]) {
        return v.isForceUser === true;
    })(obj);

    Object.keys(filtered).forEach(function (key) {
        acc += reduceCurry(function (acc, [, v]) {
            return acc += v;
        })(defaultCurry(filtered[key])({ id: 0, isForceUser: 0 }), 0);
    });
    return acc;
}

function filterForce(obj) {
    return filterCurry(function ([, v]) {
        return v.shootingScore >= 80 && v.isForceUser === true;
    })(obj);
}

function mapAverage(obj) {
    let ans = {};
    Object.keys(obj).forEach(function (key) {
        let medium = (obj[key].pilotingScore + obj[key].shootingScore) / 2;
        ans[key] = defaultCurry(obj[key])({ averageScore: medium });
    });
    return ans;
}


// defaultCurry: Merges two objs together. It takes an initial obj, then adds or overrides its properties with another Object.

// mapCurry: Works like a .map() function for objs. It applies a transformation function to each key-value pair in the obj and returns a new Object.

// reduceCurry: Works like .reduce() for objs. It accumulates a result by applying a function to each key-value pair and an initial value (accumulator).

// filterCurry: Filters the obj based on a predicate function that checks each key-value pair. It returns an obj containing only the pairs that pass the condition.

// reduceScore: Sums up scores for the objs where isForceUser is true. It uses filterCurry to filter force users, and reduceCurry to sum their scores.

// filterForce: Filters out all objs where shootingScore is greater than or equal to 80, and isForceUser is true.

// mapAverage: Calculates the average score (of pilotingScore and shootingScore) for each obj and adds it to the obj as averageScore.