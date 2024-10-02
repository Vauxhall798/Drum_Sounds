var len=document.querySelectorAll(".drum").length

console.log(len)

for(var i=0;i<len;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function() {
        var buttonName=this.innerHTML;
        switch (buttonName) {
            case "w":
                var audio=new Audio("./sounds/crash.mp3")
                audio.play();
            break;
            case "a":
                var audio=new Audio("./sounds/kick-bass.mp3")
                audio.play();
            break;
            case "s":
                var audio=new Audio("./sounds/snare.mp3")
                audio.play();
            break;
            case "d":
                var audio=new Audio("./sounds/tom-1.mp3")
                audio.play();
            break;
            case "j":
                var audio=new Audio("./sounds/tom-2.mp3")
                audio.play();
            break;
            case "k":
                var audio=new Audio("./sounds/tom-3.mp3")
                audio.play();
            break;
            case "l":
                var audio=new Audio("./sounds/tom-4.mp3")
                audio.play();
            break;
        
            default:
                break;
        }
        addAnimation(buttonName);
    })
    
}

document.addEventListener("keypress",function(event){
    switch (event.key) {
        case "w":
            var audio=new Audio("./sounds/crash.mp3")
            audio.play();
        break;
        case "a":
            var audio=new Audio("./sounds/kick-bass.mp3")
            audio.play();
        break;
        case "s":
            var audio=new Audio("./sounds/snare.mp3")
            audio.play();
        break;
        case "d":
            var audio=new Audio("./sounds/tom-1.mp3")
            audio.play();
        break;
        case "j":
            var audio=new Audio("./sounds/tom-2.mp3")
            audio.play();
        break;
        case "k":
            var audio=new Audio("./sounds/tom-3.mp3")
            audio.play();
        break;
        case "l":
            var audio=new Audio("./sounds/tom-4.mp3")
            audio.play();
        break;
    
        default:
            break;
    }
    addAnimation(event.key);
})

function addAnimation(currentKey){
    var curr=document.querySelector("."+currentKey);
    curr.classList.add("pressed");

    setTimeout(function () {
        curr.classList.remove("pressed");
    },100)
}