var mobile = document.getElementById("mobile");
var pc = document.getElementById("pc");
var tablet = document.getElementById("tablet");

var mobile_d = document.getElementById("mobiled");
var pc_d = document.getElementById("pcd");
var tab_d = document.getElementById("tabd");

function delChild(){
    main = document.getElementById('mobiled');
    while(main.firstChild){
        main.removeChild(main.lastChild);
    }
}

function change(){
    if(mobile.checked){
        delChild();
        var mobileArray = ['mobile operating system used.',
                'Android','iOS'];
    }else if(pc.checked){
        delChild();
        var mobileArray = ['pc/laptop operating system used.',
            'Windows','linux'];
    }else if(tablet.checked){
        delChild();
        var mobileArray = ['tablet operating system used.',
                'Android','iOS'];
    }
    mobileArray.forEach(function(element,index){
        var option = document.createElement("OPTION"),
        txt = document.createTextNode(element);
        option.appendChild(txt);
        option.setAttribute("value",element);
        mobile_d.insertBefore(option,mobile_d.lastChild);
    });
}