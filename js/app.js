var box = document.getElementById('box');
var box2 = document.getElementById('box2');
var box3 = document.getElementById('box3');

function red() {
  box.style.backgroundColor="lightgreen";
  box.height = "200px";
  box.width = "200px";
}

function pink() {
  box2.style.backgroundColor="salmon";
}

function blue() {
  box3.style.backgroundColor="lightblue";
}

function leave(){
  box.style.transition = "all 1s"; 
  box2.style.transition = "all 1s"; 
  box3.style.transition = "all 1s"; 
  box.style.backgroundColor="white";
  box2.style.backgroundColor="white";
  box3.style.backgroundColor="white";
}

