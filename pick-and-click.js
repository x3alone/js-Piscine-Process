

export function pick() {
    const HSL_Div = document.createElement("div");
    HSL_Div.className = 'hsl';
    HSL_Div.textContent = 'hsl(0, 50%, 0%)';
    HSL_Div.style.position = 'absolute';
    HSL_Div.style.top = '50%';
    HSL_Div.style.left = '50%';
    HSL_Div.style.transform = 'translate(-50%, -50%';
    document.body.appendChild(HSL_Div);

    const HUE_Div = document.createElement("div");
    HUE_Div.className = 'hue';
    HUE_Div.style.position = 'absolute';
    document.body.appendChild(HUE_Div);

    const LMSTY_Div = document.createElement("div");
    LMSTY_Div.className = 'luminosity';
    LMSTY_Div.style.position = 'absolute';
    document.body.appendChild(LMSTY_Div);

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttributeNS(null, 'height', window.innerHeight);
    svg.setAttributeNS(null, 'width', window.innerWidth);

    const axisY = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    axisY.setAttributeNS(null, 'id', 'axisY');
    axisY.style.stroke = 'white';
    axisY.style.strokeWidth = '1';

    const axisX = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    axisX.setAttributeNS(null, 'id', 'axisX');
    axisX.style.stroke = 'white';
    axisX.style.strokeWidth = '1';

    svg.append(axisX, axisY);
    document.body.append(svg);

    document.addEventListener("mousemove", event => {
        const windowWidth = document.documentElement.clientWidth;
        const windowHeight = document.documentElement.clientHeight;
        const x = event.clientX;
        const y = event.clientY;

        const hue = Math.round((x / windowWidth) * 360);
        const lum = Math.round((1 - y / windowHeight) * 100);

        HUE_Div.textContent = 'Hue: ' + hue;
        LMSTY_Div.textContent = 'Luminosity: ' + lum;
        HSL_Div.textContent = 'hsl(' + hue + ', 50%, ' + lum + '%)';
        document.body.style.backgroundColor = 'hsl(' + hue + ', 50%, ' + lum + '%)';

        axisY.setAttributeNS(null, 'x1', 0);
        axisY.setAttributeNS(null, 'x2', windowWidth);
        axisY.setAttributeNS(null, 'y1', y);
        axisY.setAttributeNS(null, 'y2', y);
        
        axisX.setAttributeNS(null, 'y1', 0);
        axisX.setAttributeNS(null, 'y2', windowHeight);
        axisX.setAttributeNS(null, 'x1', x);
        axisX.setAttributeNS(null, 'x2', x);
    });

    document.addEventListener('click', () => {
        const copyValue = HSL_Div.textContent;
        navigator.clipboard.writeText(copyValue)
            .then(() => console.log('HSL value copied!'))
            .catch(err => console.error('Cant copy: ', err));
    });
}




