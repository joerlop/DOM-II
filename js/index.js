// Your code goes here

let title = document.querySelector("header h1");

title.addEventListener("mouseover", event => {
    event.target.style.color = "red";
})

title.addEventListener("mouseout", event => {
    event.target.style.color = "black";
})

window.addEventListener('load', event => {
    alert('Helloooooooo!!!');
});

window.addEventListener('resize', event => {
    alert('Resizing in process!');
});

window.addEventListener('scroll', event => {
    if (window.scrollY >= 1924.8) {
        alert("You've scrolled to the end!");
    }
});

let headerP = document.querySelector(".intro p");

headerP.addEventListener("select", event => {
    event.target.style.color = "red";
    alert("Hey");
})

const name = document.querySelector("#fname");

name.addEventListener("focus", event => {
    event.target.style.backgroundColor = "pink";
})

name.addEventListener("blur", event => {
    event.target.style.backgroundColor = "";
})

const message = document.querySelector("#subject");

message.addEventListener("input", event => {
    if (event.target.value == "something") {
        alert("Bingo!");
    }
})

message.addEventListener("select", event => {
    alert("You've selected something!");
})

const mainImg = document.querySelector(".intro img");

mainImg.addEventListener("dblclick", event => {
    mainImg.classList.toggle("large");
})

title.addEventListener("mouseover", event => {
    event.target.style.animationPlayState = "running";
})

//Second task

const btn1 = document.querySelector(".destination .btn");
const btnContainer = document.querySelector(".btn-container");

btn1.addEventListener("click", event => {
    alert("Please scroll down and fill the form!");
    event.stopPropagation();
})

btnContainer.addEventListener("click", event => {
    alert("Clicked outside the button!");
})

// Third task

const navigation = document.querySelectorAll(".nav-link");

navigation.forEach(element => {
    element.addEventListener("click", event => {
        event.preventDefault();
    })
})