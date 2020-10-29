var randomNumber1= Math.floor(Math.random()*6)+1;
var randomImg1=("dice"+randomNumber1+".png");
var randomSource1=("images/"+randomImg1);

var image1=document.querySelector(".img1");
image1.setAttribute("src",randomSource1);



var randomNumber2= Math.floor(Math.random()*6)+1;
var randomImg2=("dice"+randomNumber2+".png");
var randomSource2=("images/"+randomImg2);



var image2=document.querySelector(".img2");
image2.setAttribute("src",randomSource2);


if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML="🚩Player 1 wins";

}
else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML="Player 2 wins🚩";

}

else {
  document.querySelector("h1").innerHTML="🚩Draw🚩";

}
