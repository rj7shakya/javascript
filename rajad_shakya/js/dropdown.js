var mobile = document.getElementById("mobile");
var pc = document.getElementById("pc");
var tablet = document.getElementById("tablet");

var mobile_d = document.getElementById("mobiled");
var pc_d = document.getElementById("pcd");
var tab_d = document.getElementById("tabd");
pc_d.style.display = 'None';
mobile_d.style.display = 'None';
tab_d.style.display = 'None';

setInterval(function(){
        if(mobile.checked){
            pc_d.style.display = 'None';
            mobile_d.style.display = 'block';
            tab_d.style.display = 'None';
        }else if(pc.checked){
            mobile_d.style.display = 'None';
            pc_d.style.display = 'block';
            tab_d.style.display = 'None';
        }else if(tablet.checked){
            mobile_d.style.display = 'None';
            pc_d.style.display = 'None';
            tab_d.style.display = 'Block';
        } 
    }, 300);