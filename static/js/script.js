window.onscroll=function(){

    console.log(document.documentElement.scrollTop)
    if(document.documentElement.scrollTop>50){
        document.getElementById("nav").style.backgroundColor="crimson";
        document.getElementById("lio").style.color="white";
        document.getElementById("button-to-up").style.display="block"
        document.getElementById("button-to-up").style.color="crimson"
    }
    else{
        document.getElementById("nav").style.backgroundColor="transparent";
        document.getElementById("lio").style.color="crimson";
        document.getElementById("button-to-up").style.display="none"
    }

}

var i = 0;
var txt = 'Developer.';
var speed = 50;
var flag=0
setInterval(function () {
    // console.log(flag)
    if (i < txt.length && flag==0) {
        document.getElementById("typing").innerHTML += txt.charAt(i)
        i++;
        if(i==txt.length){
            flag=1
        }
    }
    if(flag==1){
        document.getElementById("typing").innerHTML = txt.substr(0,i)
        i--;
        if(i==-1){
            flag=0
            document.getElementById("typing").innerHTML =''
        }
    }
},300)

