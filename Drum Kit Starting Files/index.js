let drumButtons = document.querySelectorAll(".drum");

for (let i = 0; i < drumButtons.length; i++) {
    drumButtons[i].addEventListener("click", function () {
        makeSound(drumButtons[i].innerHTML);
        buttonAnimation(drumButtons[i].innerHTML);
    })
}

document.addEventListener("keydown", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
})



function makeSound(key) {
    switch (key) {
        case "w":
            let tom1 = new Audio('./sounds/tom-1.mp3');
            tom1.play();
            break;
        
        case "a":
            let snare = new Audio('./sounds/snare.mp3');
            snare.play();
            
        case "s":
            let tom3 = new Audio('./sounds/tom3.mp3');
            tom3.play();

        case "d":
            let tom4 = new Audio('./sounds/tom4.mp3');
            tom4.play();

        case "j":
            let crash = new Audio('./sounds/crash.mp3');
            crash.play();

        case "k":
            let kick = new Audio('./sounds/kick.mp3');
            kick.play();

        case "l":
            let tom2 = new Audio('./sounds/tom-2.mp3');
            tom2.play();

        default:
            break;
    }   
}


function buttonAnimation(currentKey) {
    document.querySelector("." + currentKey).classList.add("pressed");

    setTimeout(function() {
        document.querySelector("." + currentKey).classList.remove("pressed")
    }, 100);
}