import { colors } from "./fifty-shades-of-cold.data.js";

export const generateClasses = () => {
    const head = document.head || document.getElementsByTagName("head")[0];
    const style = document.createElement("style");

    let css = "";
    for (let i = 0; i < colors.length; i++) {
        css += `.${colors[i]} { background: ${colors[i]}; }\n`;
    }

    style.textContent = css;
    head.appendChild(style);
}

export const generateColdShades = () => {
    const body = document.body || document.getElementsByTagName("body")[0];
    const coldShades = ["aqua", "blue", "turquoise", "green", "cyan", "navy", "purple"];
    
    const filteredColors = colors.filter(color => coldShades.some(shade => color.includes(shade)));

    filteredColors.forEach(color => {
        const div = document.createElement("div");
        div.className = color;
        div.textContent = color;
        body.appendChild(div);
    });
}

export const choseShade = (shade) => {
    const divs = document.querySelectorAll("div"); 
    divs.forEach(div => {
        div.className = shade; 
    });
}



