
var button = document.getElementById("button"),
 buttonText = document.getElementById("buttontext"),
 c = document.querySelector('#button'),
 root = document.documentElement;

button.onclick = (function(){
  
var phrases = ["Click here BiCh", "Happy Birthday Chodu", "Stay Happy", "Stay Blessed", "USA giye vule jais na", "boyosh bartese", "sathe pet o bartese", "doa kori jeno dream fulfill korte paros", "now enjoy some candids", "1", "2", "3", "4", "5", "6", "chill, ar candid nai", "still a long way to go", "wish u all the best", "sufferman sayem"],
  
  bImages = ["images/first.jpg", "images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg", "images/5.jpg", "images/6.jpg", "images/7.jpg", "images/8.jpg", "images/9.jpg", "images/10.jpg", "images/11.jpg", "images/12.jpg", "images/13.jpg", "images/14.jpg", "images/15.jpg", "images/16.jpg", "images/17.jpg", "images/18.jpg"];
  
 var count = 0;
 var imageCount = 0;
  return function(){
  root.style.setProperty('--image', "url(" + bImages[++count % phrases.length] + ")");
  buttonText.textContent = phrases[++imageCount % phrases.length];
  };
}());


/* if(count>7){
  do: release balloons/confetti/or something cool;
}
*/
