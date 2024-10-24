function interpolation(obj) {
    let number = 0;
    const timePerStep = obj.duration / obj.step;
    const range = obj.end - obj.start;

    const interval = setInterval(() => {
        const x = obj.start + (number * range) / obj.step;
        const y = (number + 1) * timePerStep;
        obj.callback([x, y]);

        if (++number === obj.step) {
            clearInterval(interval);
        }
    }, timePerStep);
}
