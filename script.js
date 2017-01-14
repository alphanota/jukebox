//SECTION 1: URLS's

// the urls of songs stored in the machine

var musicUrls = ["music/chrous.mp3",
    "music/emfisi_chorus.m4r",
    "music/enceladus.mp3",
    "music/hawquindar.mp3",
    "music/houston_discovery.mp3",
    "music/hskquindar.m4r",
    "music/interstellar.mp3",
    "music/jupiter.mp3",
    "music/kepler.mp3",
    "music/kepler_star.mp3",
    "music/orbit.mp3",
    "music/RingTone01_Longer.mp3",
    "music/saturn_radio.mp3",
    "music/spooky_saturn.mp3",
    "music/sputnik.mp3",
    "music/stardust.mp3",
    "music/steve.mp3",
    "music/water_on_the_moon.mp3"
];

// the urls of pictures that can be used as song covers
var pictureUrls = ["pics/building.jpg",
    "pics/moon.jpg",
    "pics/perseid.jpg",
    "pics/sky.jpg",
    "pics/suit.jpg"
];


// Section 2: Data Objects
  // The song object stores song artist and song title,
  // the toString method returns a concatenated song,artist
  // method so that it can be used as an id to get songUrls;
  // TODO: find a better songidentifier, maybe a number?
var Song = function(a, t) {
    this.artist = a;
    this.title = t;
    this.toString = function() {
        return this.artist + "-" + this.title;
    }
}

  //The
var SongUrl = function(u,c){
  this.songUrl = u;
  this.coverUrl = c;
}

var Post =  function(){
  this.post = document.createElement('DIV');
  this.pic = document.createElement('DIV');
  this.text = document.createElement('DIV');
  this.heading_artist = document.createElement("H5");
  this.heading_title = document.createElement("H6");
  this.post_play = document.createElement('I');
  this.post_add = document.createElement('I');

  this.arrangeLayout = function(){
    //set classnames for divs
    this.post.className = "post";
    this.pic.className = "pic";
    this.text.className = "text";
    this.post_play.className = "post-btn post-play";
    this.post_add.className = "post-btn post-add";

    this.post.appendChild(this.pic);
    this.post.appendChild(this.text)
    this.post.appendChild(this.post_play);
    this.post.appendChild(this.post_add);

    this.text.appendChild(this.heading_artist);
    this.text.appendChild(this.heading_title);
  }

  this.fill = function(song,urls){

        this.post.id = song.toString();
        this.post_play.setAttribute("songid",song.toString());
        this.post_add.setAttribute("songid",song.toString());

        //TODO: Add IDs to children as well?
        this.pic.style.backgroundImage = 'url(' + urls.coverUrl+ ')';

        //TODO:Question:
        // Should I add the song url as an attribute to the div containers?
        // or should I just perform a lookup on the urltable? What is better/
        // more efficient???

        //TODO: for now, just do a table lookup, dont add an attribute, review later
        this.heading_artist.innerText = song.artist;
        this.heading_title.innerText = song.title;
  }

}




var song0 = new Song("Kepler", "Chorus");
var song1 = new Song("NASA", "Emfisi");
var song2 = new Song("NASA", "Enceladus");
var song3 = new Song("Quindar", "Haw");

var sw0 = new SongUrl(musicUrls[0], pictureUrls[0]);
var sw1 = new SongUrl(musicUrls[1], pictureUrls[1]);
var sw2 = new SongUrl(musicUrls[2], pictureUrls[2]);
var sw3 = new SongUrl(musicUrls[3], pictureUrls[3]);

//TODO expand or rewrite this object
// so that it can hold more than two states
// have a function next() that increments
// the slide counter from 0 1 2 3 4 then to 0 again and so on
var bgTransition = function(){
  this.slide = 0;

  this.toggle = function(){
    this.slide = this.slide ^ 1;
    return this.slide;
  }

}

// create a song library;
var songLibrary = [];
songLibrary.push(song0);
songLibrary.push(song1);
songLibrary.push(song2);
songLibrary.push(song3);


// store urls in a dict-like object;
var urlTable = {};

urlTable[song0.toString()] = sw0;
urlTable[song1.toString()] = sw1;
urlTable[song2.toString()] = sw2;
urlTable[song3.toString()] = sw3;


for (var i = 0; i < songLibrary.length; i++) {

    // get song data
    var song = songLibrary[i];
    var songUrls = urlTable[song.toString()];

    // create post div and children
    var post = new Post();
    post.arrangeLayout();

    // decorate/fill in post div data with song info and media urls
    post.fill(song,songUrls);
    var container = document.querySelector(".library-container");
    container.appendChild(post.post);

}

bgtransition = new bgTransition();

//
// $("#heading").hover(fIn,fOut);
//

applyFadeEffect = function(post,effect){
  postBtns = post.querySelectorAll('.post-btn');
  for(var i =0; i < postBtns.length; i++){
    effect(postBtns[i],500);
  }
}

function fadeIn(obj,dur){
  $(obj).animate(
     {opacity: 1},dur
   );
}

function fadeOut(obj,dur){
  $(obj).animate(
     {opacity: 0},dur
   );
}

 $(".post").hover(
   function() {applyFadeEffect(this,fadeIn);},
   function() {applyFadeEffect(this,fadeOut); } );


$(".post-play").click(function() {
   var sid = $(this).attr("songid");
   playSong(sid);
});


playSong = function(sid){
  var songUrls = urlTable[sid];

  var coverUrl = songUrls.coverUrl;

  //bgTransition.
  var currentSlide = bgtransition.slide;
  var nextSlide = bgtransition.toggle();
  $(".bg"+nextSlide)[0].src = songUrls.coverUrl;
  $(".bg").toggleClass("transparent");

  var track1 = document.getElementById("sputnik");
  track1.src = songUrls.songUrl;;
  track1.play();
}

$(".post-add").click(function() {
  console.log("hello");
});

//
// var fade_In = function(){
//   this.
// $(this).animate(
//    {opacity: .1, height: "35px", width: "35px", color: "green"}
//  ) }
//
// var fade_Out = function(){
// $(this).animate(
//   {opacity: 1, height: "32px", width: "32px"} ) }
//
// function myFunc(){
//   //alert("Hello");
// }
//
// function fIn(){
//   $(this).show(fade_In);
//
// }
// function fOut(){
//   $(this).show(fade_Out);
//
// }
