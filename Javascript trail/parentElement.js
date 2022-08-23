// document.getElementsByClassName("inner")[0].parentElement.style.background="green";

var newElement=document.createElement("h2");

var newText=document.createTextNode("lorem lipsum at the rate ");

newElement.appendChild(newText);

document.getElementById("outer").appendChild(newElement);

var target=document.getElementById("outer");

target.insertBefore(newElement,target.childNodes[1]);