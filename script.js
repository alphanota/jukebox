var musicLibrary = ["music/chrous.mp3",
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

var pictureLibrary = ["building.jpg",
    "moon.jpg",
    "perseid.jpg",
    "sky.jpg",
    "suit.jpg"
];



var Song = function(a, t) {
    this.artist = a;
    this.title = t;
    this.toString = function() {
        return this.artist + "-" + this.title;
    }

}

var SongUrl = function(u,c){
  this.songUrl = u;
  this.coverUrl = c;
}

var SongInfo = function(s, u, c) {
    this.songInfo = s;
    this.songUrl = u;
    this.coverUrl = c;
    //
    // this.checkAvailability = function(){
    //   return this.songInfo = this.songUrl;
    // }
}


var song0 = new Song("Kepler", "Chorus");
var sw0 = new SongInfo(song0,  musicLibrary[0], pictureLibrary[0]);

var song1 = new Song("NASA", "Emfisi");
var sw1 = new SongInfo(song1, musicLibrary[1], pictureLibrary[1]);

var song2 = new Song("NASA", "Enceladus");
var sw2 = new SongInfo(song2, musicLibrary[2], pictureLibrary[2]);

var song3 = new Song("Quindar", "Haw");
var sw3 = new SongInfo(song3, musicLibrary[3], pictureLibrary[3]);


var mp = [sw0, sw1, sw2, sw3];

for (var i = 0; i < mp.length; i++) {

    post = document.createElement('DIV');
    pic = document.createElement('DIV');
    text = document.createElement('DIV');

    post.className = "post";
    pic.className = "pic";
    text.className = "text";


    post.id = "post_" + mp[i].songInfo.toString();
    pic.id = "post_" + mp[i].songInfo.toString();
    text.id = "post_" + mp[i].songInfo.toString();

    pic.style.backgroundImage = 'url(pics/' + mp[i].coverUrl+ ')';
    post.setAttribute("songurl",mp[i].songUrl);
    pic.setAttribute("songurl",mp[i].songUrl);
    text.setAttribute("songurl",mp[i].songUrl);
    var song = mp[i].songInfo;

    artist = document.createElement("H5");
    title = document.createElement("H6");
    artist.innerText = song.artist;
    title.innerText = song.title;


    text.appendChild(artist);
    text.appendChild(title);

    post.appendChild(pic);
    post.appendChild(text);
    document.body.appendChild(post);


}


var Post =  function(){
  this.post = document.createElement('DIV');
  this.pic = document.createElement('DIV');
  this.text = document.createElement('DIV');
  this.post_play = document.createElement('DIV');
  this.post_add = document.createElement('DIV');
  this.arrangeLayout = function(){
    //set classnames for divs
    this.post.className = "post";
    this.pic.className = "pic";
    this.text.className = "text";
    this.post_play.className = "post-btn post-play";
    this.post_add = "post-btn post-add";
  }

  this.fill()

}





$(".post").click(function() {

    var surl = $(this).attr("songurl");
    var track1 = document.getElementById("sputnik");
    track1.src = surl;
    track1.play();
});






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
