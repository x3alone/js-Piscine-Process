function dogYears(name, age) {
    // age /= 60
    // age /= 60
    // age /= 24
    // age /= earthday
    // age *= 7
    var earthage = age / 60 / 60 / 24 / 365.25 * 7
    if (name === "earth") {
        return Number(earthage.toFixed(2))
    }
    if (name === "mercury") {
        var eq = earthage / 0.2408467

    }
    if (name === "venus") {
        var eq = earthage / 0.61519726
    }
    if (name === "mars") {
        var eq = earthage / 1.8808158
    }
    if (name === "jupiter") {
        var eq = earthage / 11.862615
    }
    if (name === "saturn") {
        var eq = earthage / 29.447498
    }
    if (name === "uranus") {
        var eq = earthage / 84.016846
    }
    if (name === "neptune") {
        var eq = earthage / 164.79132
    }

    return Number(eq.toFixed(2))
}


console.log(dogYears('uranus', 1000000000))