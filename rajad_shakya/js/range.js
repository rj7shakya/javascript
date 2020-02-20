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

