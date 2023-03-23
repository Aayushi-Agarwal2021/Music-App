console.log("hi");
// Initialise the variables
let songIndex=0;
let audioElement = new Audio('songs/song1.mp3.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');

let giff = document.getElementById('giff');
let masterSongName = document.getElementById('masterSongName')
let songItems = Array.from( document.getElementsByClassName('songitem'));
let songs=[
    {songName: "Barish",filepath: "songs/song1.mp3.mp3", coverPath:"cover/cover1.png"},
    {songName: "Bhool Bhulaiya",filepath: "songs/song2.mp3.mp3", coverPath:"cover/cover2.png"},
    {songName: "Waareya",filepath: "songs/song3.mp3.mp3", coverPath:"cover/cover3.png"},
    {songName: "Ranjhaana",filepath: "songs/song4.mp3.mp3", coverPath:"cover/cover4.png"},
    {songName: "Tum PRem Ho Radhe",filepath: "songs/song5.mp3.mp3", coverPath:"cover/cover5.png"},
    {songName: "Ram Siya Ram",filepath: "songs/song6.mp3.mp3", coverPath:"cover/cover6.png"},
]
songItems.forEach((element,i)=>{
// console.log(element,i);
element.getElementsByTagName('img')[0].src = songs[i].coverPath;
element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
})
// let audioElement= new Audio('songs/song1.mp3.mp3');
// audioElement.play();


// handel play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
     giff.style.opacity = 1;   
      }
    else
    {
        audioElement.pause();
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');
    giff.style.opacity = 0;  
   }
})  
// listen to events
audioElement.addEventListener('timeupdate',()=>{
    // update seekbar
 progress = parseInt((audioElement.currentTime / audioElement.duration)*100);
myProgressBar.value = progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})
const makeallplays = ()=>{
 Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    
    element.classList.remove('fa-pause-circle');
    element.classList.add('fa-play-circle');
 })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        // console.log(e.target);
        makeallplays();
        songIndex = parseInt(e.target.id);

        masterSongName.innerText = songs[(songIndex-1)].songName;
    //    index=e.target.id;   
       m="songs/song"+songIndex+".mp3.mp3";     
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = m;
        audioElement.currentTime=0;
        audioElement.play();
        giff.style.opacity = 1; 
        masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=6){
        songIndex=0;
    }
    else{
        songIndex += 1;
    }
    m="songs/song"+(songIndex+1)+".mp3.mp3";
    audioElement.src = m;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime =0;
    audioElement.play();
    giff.style.opacity = 1; 
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex -= 1;
    }
    m="songs/song"+(songIndex+1)+".mp3.mp3";
    audioElement.src = m;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime =0;
    audioElement.play();
    giff.style.opacity = 1; 
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})