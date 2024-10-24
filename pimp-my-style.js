import { styles } from './pimp-my-style.data.js';

let c = 0; 

export function pimp() {
  const button = document.querySelector('button.button');

  if (!button.classList.contains("unpimp")) {
    button.classList.add(-styles[c]);
    c++;
  } else {
    c--;
    button.classList.remove(styles[c]);
    if (c === 0) {
        button.classList.toggle("unpimp");
    }
  }

  if (c === styles.length) {
    button.classList.toggle('unpimp');
  }
}

