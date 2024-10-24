async function isWinner(country) {
    const obj = await db;
    const countryData = await obj.getWinner(country).catch(() => {
        return null;
    });
    if (!countryData) {
        return country+ " never was a winner";
    }
    if (countryData.continent !== "Europe") {
        return country + " is not what we are looking for because of the continent";
    }
    const score = await obj.getResults(countryData.id).catch(() => {
        return [];
    });
    if (score.length < 3) {
        return country + " is not what we are looking for because of the number of times it was champion";
    }
    const years = score.map(element => element.year).join(", ");
    const scores = score.map(element => element.score).join(", ");

    return country + " won the FIFA World Cup in " + years + " winning by " + scores;
}