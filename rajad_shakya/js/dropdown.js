var mobile = document.getElementById("mobile");
var pc = document.getElementById("pc");
var tablet = document.getElementById("tablet");

var mobile_d = document.getElementById("mobiled");
var pc_d = document.getElementById("pcd");
var tab_d = document.getElementById("tabd");
// pc_d.style.display = 'None';
// mobile_d.style.display = 'None';
// tab_d.style.display = 'None';

mobileArray = [];
// mobileArray = ['mobile operating system used.',
//                 'Android','iOS'];
// pcArray = ['pc/laptop operating system used.',
//             'Windows','linux'];
tabletArray = [];
// var select = document.getElementById("select");

// setInterval(function(){
//         if(mobile.checked){
//             pc_d.style.display = 'None';
//             mobile_d.style.display = 'block';
//             tab_d.style.display = 'None';
//         }else if(pc.checked){
//             mobile_d.style.display = 'None';
//             pc_d.style.display = 'block';
//             tab_d.style.display = 'None';
//         }else if(tablet.checked){
//             mobile_d.style.display = 'None';
//             pc_d.style.display = 'None';
//             tab_d.style.display = 'Block';
//         } 
    
    // }, 300);

function change(){
    mobileArray.forEach(function(element,index){
        var option = document.createElement("OPTION"),
        txt = document.createTextNode(element);
        option.appendChild(txt);
        option.setAttribute("value",element);
        mobile_d.insertBefore(option,mobile_d.lastChild);
    });
    if(mobile.checked){
        txt = document.getElementsByTagName('OPTION');
        console.log(txt);
        mobileArray = ['mobile operating system used.',
                'Android','iOS'];
    }else if(pc.checked){
        mobileArray = ['pc/laptop operating system used.',
            'Windows','linux'];
    }
    
    // mobileArray = [];
}