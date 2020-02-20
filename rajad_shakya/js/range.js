var i0 = document.getElementById("i0");
var i1 = document.getElementById("i1");
var i2 = document.getElementById("i2");
var i3 = document.getElementById("i3");
var i4 = document.getElementById("i4");
var i5 = document.getElementById("i5");
var i6 = document.getElementById("i6");
var i7 = document.getElementById("i7");
var i8 = document.getElementById("i8");
var i9 = document.getElementById("i9");

var array = [9,19,28,29,45,50,51,52,86,97];
var count = [];
count.length = 10;
count.fill(0);

array.forEach(function(element,index){
    count[Math.floor(element/10)] +=1;
});
count.forEach(function(element,index){
    var star = '*';
    var id = 'i'+index;
    var list = document.getElementById(id);
    list.innerHTML = star.repeat(element);
});

