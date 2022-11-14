let song=document.getElementById("audio");
let icon=document.getElementById("icon1");

icon.onclick = function(){
    if(song.paused)
    {
        song.play();
        icon.src="/Images/pause.png";
    }
    else{
        song.pause();
        icon.src= "/Images/play.png";
    }
    
}