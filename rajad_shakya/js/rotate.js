var rot = document.getElementsByClassName("rotate")[0];
var rbutton = document.createElement("button");
rbutton.innerHTML = "Hello";

rot.appendChild(rbutton);
rbutton.style.border=0+'px';
rbutton.style.backgroundColor = "red";
var rotated = false;
var deg = 0;

function toggler(){
    color = rbutton.style.backgroundColor;
    if (color === 'red'){
        color='blue';
        rbutton.style.backgroundColor=color;
        rot.style.backgroundColor=color;
    }else if(color === 'blue'){
        color='red';
        rbutton.style.backgroundColor=color;
        rot.style.backgroundColor=color;
    }
}

rot.addEventListener ("click", function() {
    deg = rotated ? 0 : 90;
    rot.style.transformOrigin = "top left";
    rot.style.transform       = 'rotate('+deg+'deg)'; 
    rotated = !rotated;
    toggler();
  });