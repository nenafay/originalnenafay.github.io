function navbtnFunction(x) {
    x.classList.toggle("change");
}

function respNavFunction(){
    var y = document.getElementById("myTopNav");
    if(y.className === "topNav") {
        y.className += "responsive";
    } else {
        y.className = "topNav";
    }
}

