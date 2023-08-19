var video1=document.querySelector("#video1");
var vc1=document.querySelector("#vc1");
var counter1= 0 ;

video1.addEventListener("play", function(){
    counter1++;
    vc1.innerHTML = counter1;
})
