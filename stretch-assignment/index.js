let redBlock = document.querySelector(".block--red");
let blueBlock = document.querySelector(".block--blue")
let greenBlock = document.querySelector(".block--green")
let pinkBlock = document.querySelector(".block--pink")
let grayBlock = document.querySelector(".block--gray")
let blocks = document.querySelectorAll(".block")

blueBlock.addEventListener("click", event => {
    blocks.forEach(block => block.style.order = "initial");
    event.target.style.order = -5;
})

redBlock.addEventListener("click", event => {
    event.target.style.order = -5;
})

greenBlock.addEventListener("click", event => {
    event.target.style.order = -5;
})

pinkBlock.addEventListener("click", event => {
    event.target.style.order = -5;
})

grayBlock.addEventListener("click", event => {
    event.target.style.order = -5;
})

redBlock.addEventListener("mousedown", event => {
    TweenMax.to(event.target, 3, {x:300});
})
redBlock.addEventListener("mouseup", event => {
    TweenMax.to(event.target, 3, {x:0});
})

blueBlock.addEventListener("mousedown", event => {
    TweenMax.to(event.target, 3, {x:300});
})
blueBlock.addEventListener("mouseup", event => {
    TweenMax.to(event.target, 3, {x:0});
})

greenBlock.addEventListener("mousedown", event => {
    TweenMax.to(event.target, 3, {x:300});
})
greenBlock.addEventListener("mouseup", event => {
    TweenMax.to(event.target, 3, {x:0});
})

pinkBlock.addEventListener("mousedown", event => {
    TweenMax.to(event.target, 3, {x:300});
})
pinkBlock.addEventListener("mouseup", event => {
    TweenMax.to(event.target, 3, {x:0});
})

grayBlock.addEventListener("mousedown", event => {
    TweenMax.to(event.target, 3, {x:300});
})
grayBlock.addEventListener("mouseup", event => {
    TweenMax.to(event.target, 3, {x:0});
})