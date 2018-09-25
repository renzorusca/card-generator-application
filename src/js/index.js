
import '../style/index.scss';

window.onload = function(){
  let cardsuit = generateRandomSuit();
  if (cardsuit == "&diams;" || cardsuit == "&hearts;") {
    document.querySelector(".top-suite").classList.add("suit-color-red");
    document.querySelector(".bottom-suite").classList.add("suit-color-red");
  } else {
   document.querySelector(".top-suite").classList.add("suit-color-black");
   document.querySelector(".bottom-suite").classList.add("suit-color-black");
  }


document.querySelector(".top-suite").innerHTML = cardsuit;
document.querySelector(".bottom-suite").innerHTML = cardsuit;
document.querySelector(".number").innerHTML = (generateRandomNumber());

};

  function generateRandomNumber(){
  let numbers = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
  let indexNumbers = Math.floor(Math.random()*numbers.length);
  return numbers[indexNumbers];
}
  function generateRandomSuit(){
  var suit = ["&diams;","&spades;","&hearts;","&clubs;"];
  let indexSuit = Math.floor(Math.random()*suit.length);
  return suit[indexSuit];
}