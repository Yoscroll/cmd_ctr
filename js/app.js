var box = document.getElementById('box');
var box2 = document.getElementById('box2');
var box3 = document.getElementById('box3');
var text = document.getElementsByClassName('text');
var aBox = document.getElementsByClassName('aBox');

function green() {
  box.style.transition = "all 0.5s";
  box.style.backgroundColor="lightgreen";
  box.style.height = "200px";
  box.style.width = "200px";
}

function pink() {
  box2.style.transition = "all 0.5s";
  box2.style.backgroundColor="salmon";
  box2.style.height = "200px";
  box2.style.width = "200px";
}

function blue() {
  box3.style.transition = "all 0.5s";
  box3.style.backgroundColor="lightblue";
  box3.style.height = "200px";
  box3.style.width = "200px";
}

function leave(){
  for (var i = 0; i < 3; i++) {
    aBox[i].style.transition = "all 0.5s"; 
    aBox[i].style.backgroundColor="white";
    aBox[i].style.height = "100px";
    aBox[i].style.width = "100px";
  }
}

