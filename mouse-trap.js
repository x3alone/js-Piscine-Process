let PrevCircle = null;

export function createCircle(event) {
    const circle = document.createElement('div');
    circle.className = 'circle';
    circle.style.left = event.clientX - 25+'px';
    circle.style.top = event.clientY - 25+'px';
    circle.style.background = 'white';
    document.body.appendChild(circle);
    PrevCircle = circle;
}
export function moveCircle(event) {
    if (PrevCircle) {
        const box = document.querySelector('.box').getBoundingClientRect();
        let x = event.clientX - 25;
        let y = event.clientY - 25;
        if (isInside(x, y, box)) {
            PrevCircle.style.background = 'var(--purple)';
            let minX = box.left +1
            let maxX= box.right - 2 *25 - 1;
            x = Math.max(minX, Math.min(x,maxX));
            let minY = box.top +1
            let maxY= box.bottom - 2 *25 - 1;
            y = Math.max(minY, Math.min(y,maxY));
        } else if (PrevCircle.style.background === 'var(--purple)') {
            if (event.clientX < box.left + 25) x = box.left + 1;
            if (event.clientX > box.right - 25) x = box.right - 2 * 25 - 1;
            if (event.clientY < box.top + 25) y = box.top + 1;
            if (event.clientY > box.bottom - 25) y = box.bottom - 2 * 25 - 1;
        } else {
            PrevCircle.style.background = 'white';
        }

        PrevCircle.style.left = x+'px';
        PrevCircle.style.top = y+'px';
    }
}
function isInside(x, y, box) {
    return x > box.left && x + 2 * 25 < box.right && y > box.top && y + 2 * 25 < box.bottom;
}
export function setBox() {
    const box = document.createElement('div');
    box.className = 'box';
    document.body.appendChild(box);
}
document.addEventListener('click', createCircle);
document.addEventListener('mousemove', moveCircle);
