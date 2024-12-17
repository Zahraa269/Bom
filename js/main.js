function changecolor(){
    var navbar = document.querySelector(".navbar");
    var scrollvalue = window.scrollY;
    console.log(scrollvalue);
    if (scrollvalue<200){
        navbar.classList.remove('bgnavbar2')

    }else{
        navbar.classList.add('bgnavbar2')
    }

}

window.addEventListener("scroll",changecolor);

// ======================================================
var time = setInterval(myTimer,1000);
function myTimer(){
    var z = new Date();
    document.querySelector("#zahraa").innerHTML = z.toLocaleTimeString();
}






