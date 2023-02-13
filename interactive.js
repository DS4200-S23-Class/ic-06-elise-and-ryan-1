
let circle = document.getElementById("cir1");

if (circle == null) {
        console.log("fail");
}

circle.addEventListener('mouseover', function () { //when the mouse is on the point it's time to highlight
        this.style.fill = "orange";
    });

circle.addEventListener('mouseout', function () { //when the mouse is on the point it's time to highlight
        fill(circle, "black");
});

function fill(x, color) {
        x.style.fill = color;
}

document.getElementById("button").addEventListener('click', submitClick);

function submitClick() {
        let line = document.getElementById("line1");
        line.style.stroke = "red";
}

console.log("test")