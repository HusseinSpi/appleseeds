let buttons = document.querySelectorAll(".btn");

for (let i = 0; i<buttons.length; i++ ) {
    buttons[i].addEventListener("click", function () {
        if (buttons[i].tagName === "A") {
            alert("hello I'm a link")
        } else {
            alert("hello I'm a Button")
        }
    })
}