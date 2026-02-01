var noofkey=document.querySelectorAll(".drum").length;
var arr=document.querySelectorAll(".drum");
for(let i=0;i<noofkey;i++){
    arr[i].addEventListener("mouseover" ,function (){
        var but=this.innerHTML;
        animation(but);
        playsound(but);
    });
}
document.addEventListener("keydown",function(event){
    animation(event.key);
    playsound(event.key);
})
function playsound(i){
   switch(i){
    case "w":
        var tom= new Audio("./sounds/crash.mp3");
        tom.play();
        break;
    case "a":
        var tom= new Audio("./sounds/kick-bass.mp3");
        tom.play();
        break;
    case "s":
        var tom= new Audio("./sounds/snare.mp3");
        tom.play();
        break;
    case "d":
        var tom= new Audio("./sounds/tom-1.mp3");
        tom.play();
        break;
    case "j":
        var tom= new Audio("./sounds/tom-2.mp3");
        tom.play();
        break;
    case "k":
        var tom= new Audio("./sounds/tom-3.mp3");
        tom.play();
        break;
    case "l":
        var tom= new Audio("./sounds/tom-4.mp3");
        tom.play();
        break;
    default:alert("Wrong key "+" "+i+" "+"pressed");
   }
    
}
function animation(event){
    var press=document.querySelector("."+event);
    press.classList.add("pressed");
    setTimeout(function(){
        press.classList.remove("pressed");
    },100);
}