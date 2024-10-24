function getAcceleration(x) {
    if (Number.isInteger(x.f) && Number.isInteger(x.m)) {
        return x.f / x.m; 
    }
    if (Number.isInteger(x.Δv) && Number.isInteger(x.Δt)) {
        return x.Δv / x.Δt;
    }
    if (Number.isInteger(x.d) && Number.isInteger(x.t)) {
        return (2 * x.d) / Math.pow(x.t, 2);
    }
    return "impossible";
}