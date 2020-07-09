
const container = document.getElementById("container");

let x= 16;
let y= 256;
let z= 500 / x;
let squares, color = "black";

let reset = document.getElementById("reset");
let randomColor= document.getElementById("randomColor");
let black= document.getElementById("black");

function resetAction(){
  x = 16;
  y = 256;
  createGridDiv(y);
  reset.addEventListener("click", ()=>{
    resetGridSize();
    createGridDiv(y);
  });
}
resetAction();

function resetGridSize(){
  x= prompt('So...do you want to change the canvas? Pick a value between 16 & 500', '16');
  if(x>500){
    alert("YOU CAN'T DO THAT. Enter a number lesser than 501");
    resetGridSize();
  } else if(x=== ''){
    x=16;
    y= Math.pow(x,2);
  } else if(x) {
    y= Math.pow(x,2);
  } else {
    y= Math.pow(x,2);
  }
}

function createGridDiv(y) {
  while(container.firstChild){
    container.removeChild(container.lastChild);
  }
    for(let i=0; i < y; i++){
      const div =document.createElement('div');
      div.className ="squares";
      container.appendChild(div);
      div.addEventListener("mouseover", () =>{
        div.style.cssText = "background-color: green";
      });
    }
    setGridProperties(z);
  
}

function setContainerProperties(){
  container.style.display = 'grid';
  container.style.height = '500px';
  container.style.width = "500px";
  container.style.placeItems = "start";
  container.style.border = "50px solid #A00";
  container.style.borderRadius = "20px";
  container.style.gridTemplateColumns = `repeat(${x}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${x}. 1fr)`;
}

function setGridProperties(z){
  z = 500/x;
  setContainerProperties();
  var squares = document.querySelectorAll('.squares');
  squares.forEach((element) =>{
    element.style.minWidth = z +'px';
    element.style.minHeight = z + 'px';
    element.style.maxWidth = '500px';
    element.style.maxHeight = '500px';
    element.style.backgroundColor = 'whitesmoke'; 
  });
}




function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}