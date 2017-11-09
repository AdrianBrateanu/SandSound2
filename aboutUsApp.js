var contactButton=document.getElementById("contactButton");
var aboutImage=document.getElementById("aboutUsImg");
var helloBox=document.getElementById("helloTag");

function openContactWindow() {
    window.open("contact.html");

}

function typeHello() {
   helloBox.innerHTML="Hello!";
}

contactButton.addEventListener("click",openContactWindow);

aboutImage.addEventListener("mouseover",typeHello);
