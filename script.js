var displayScript = document.getElementById("scriptReturned"); 
var scriptBtn = document.getElementById("scriptBtn"); 

if (scriptBtn) {
scriptBtn.addEventListener("click", generateScript);
}

function generateScript() {
  
  var name = document.getElementById("name").value;
  var location = document.getElementById("location").value;
  var tell = document.getElementById("tell").value; 
  
displayScript.innerHTML = "Hello, my name is " + name + " and I live in " + location + ". I am writing today to ask you to support bodily autonomy in order to preserve the right to choose. As a supporter of making choices for your own body, I believe it is important to re-instate Roe V Wade and the other SCOTUS cases that allow people the right to control what happens to their body." + tell + ". Please express your support for bodily autonomy.";}

/*var counter = 1;
setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 4){
    counter = 1;
  }
}, 5000);
*/


let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
