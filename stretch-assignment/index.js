let redBlock = document.querySelector(".block--red");

redBlock.addEventListener("mousedown", event => {
    TweenMax.to(event.target, 3, {x:300});
})

redBlock.addEventListener("mouseup", event => {
    TweenMax.to(event.target, 3, {x:0});
})