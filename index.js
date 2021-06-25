function GenerateRandomNumber(){

var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1 * 6) + 1;

return randomNumber1.toString();
}



function Result(num1,num2){
  if(num1 > num2){
    document.querySelector("h1").textContent = "🚩 Player1 wins";
  }
  else if(num2 > num1){
    document.querySelector("h1").textContent = "Player2 wins 🚩";
  }

  else{
    document.querySelector("h1").textContent = "🚩 DRAW 🚩";
  }

}

function OnclickButton(){
  var myRandomNumber1 = GenerateRandomNumber();
  var myRandomNumber2 = GenerateRandomNumber();
  document.querySelector(".img1").setAttribute("src", "images/dice"+myRandomNumber1+".png");
  document.querySelector(".img2").setAttribute("src", "images/dice"+myRandomNumber2+".png");
  Result(myRandomNumber1,myRandomNumber2);
}

document.querySelector(".btn").onclick = OnclickButton;
