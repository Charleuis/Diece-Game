let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let randomImage1 = "images/dice" + randomNumber1 + ".png";
let randomImage2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomImage1);
document.querySelectorAll("img")[1].setAttribute("src", randomImage2);

if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 is the Winner 🚩"
}else if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🚩 Player 1 is the winner"
}else{
    document.querySelector("h1").innerHTML="🚩 Its a Draw, Refresh Again 🚩"
};