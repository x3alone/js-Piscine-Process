export function build(n) {
    let body = document.getElementsByTagName("body")[0];
    let bricks = 1;
    let interval = setInterval(function() {
        let brick = document.createElement("div");
        brick.setAttribute("id", "brick-" + bricks);
        if (bricks % 3 === 2) {
            brick.dataset.foundation = true;
        }
        body.appendChild(brick);
        bricks++;
        if (bricks > n) {
            clearInterval(interval);
        }
    }, 100);
}

export function repair(...ids) {
    ids.forEach(function(id) {
        let brick = document.getElementById(id);
        if (brick.getAttribute("foundation")) {
            brick.dataset.repaired = "in progress";
        } else {
            brick.dataset.repaired = true;
        }
    });
}

export function destroy() {
    let bricks = document.getElementsByTagName("div");
    if (bricks.length > 0) {
        bricks[bricks.length - 1].remove();
    }
}
