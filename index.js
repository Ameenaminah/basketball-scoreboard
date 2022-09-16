
let homePointEl = document.getElementById("home-point");
let homePointBtnOne = document.getElementById("home-point-btn1");
const homePointBtnTwo = document.getElementById("home-point-btn2");
const homePointBtnThree = document.getElementById("home-point-btn3");
let homePoint = 0;
const guestPointEl = document.getElementById("guest-point");
const guestPointBtnOne = document.getElementById("guest-point-btn1");
const guestPointBtnTwo = document.getElementById("guest-point-btn2");
const guestPointBtnThree = document.getElementById("guest-point-btn3");
let guestPoint = 0;
const newGameBtn = document.getElementById("new-game-btn");
// let periodEl = document.getElementById("period-el");



    homePointBtnOne.addEventListener("click", function() {
        homePoint++;
        homePointEl.textContent = homePoint;
    });
    homePointBtnTwo.addEventListener("click", function() {
        homePoint += 2;
        homePointEl.textContent = homePoint;
    });
    homePointBtnThree.addEventListener("click", function() {
        homePoint += 3;
        homePointEl.textContent = homePoint;
    });

guestPointBtnOne.addEventListener("click", function() {
    guestPoint++;
    guestPointEl.textContent = guestPoint;
});
guestPointBtnTwo.addEventListener("click", function() {
    guestPoint += 2;
    guestPointEl.textContent = guestPoint;
});
guestPointBtnThree.addEventListener("click", function() {
    guestPoint += 3;
    guestPointEl.textContent = guestPoint;
});

newGameBtn.addEventListener("click", function() {
    // periodEl.textContent = 2;
    // homePointEl.textContent = homePoint;
    // guestPointEl.textContent = guestPoint;
    // periodEl.textContent = 1;
    homePointEl.textContent = 0;
    guestPointEl.textContent = 0;
    guestPoint = 0;
    homePoint = 0;
    
})
