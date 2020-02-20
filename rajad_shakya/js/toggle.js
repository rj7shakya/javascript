var button = document.createElement("button");
button.innerHTML = "Button";
var body = document.getElementsByClassName("toggle")[0];
var color = '';

body.appendChild(button);
button.style.backgroundColor="red";
button.style.width = 150+"px";
button.style.height = 40+"px";
button.style.border=0+"px";
button.style.color="white";
button.style.borderTopRightRadius=25+"px";
button.style.borderBottomLeftRadius=25+"px";

function toggle(){
    color = button.style.backgroundColor;
    if (color === 'red'){
        color='blue';
        button.style.backgroundColor=color;
    }else if(color === 'blue'){
        color='red';
        button.style.backgroundColor=color;
    }
}

button.addEventListener ("click", function(){
    toggle();
  });