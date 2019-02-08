/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["Sunny" , "Do It All The Time" , "Lone Digger" , "Old Yellow Bricks"];
// BELOW Add 4 More arrays to store images_links, artists, song lengths, and links for each song
var songImage = ["sunny.jpg" , "IDKHow.jpg" , "loneDigger.jpg" , "ArticMonkeys.jpg"];
var artists = ["Papa Ya", "IDKHow", "Caravan Palace" , "Artic Monkeys"]
var songLengths = ["3:23", "2:47" , "3:50" , "3:11"];
var songLink = ["Sunny", "Do It All The Time" , "Lone Digger", "Old Yellow Bricks"];
// Make sure they match the same order as your array above
var playMusic = false;
var audio = $(".Music")[0];
var audio1 = $("#Music1")[0];
var audio2 = $("#Music2")[0];
var audio3 = $("#Music3")[0];

function displaySongInfo(){
    // BELOW Use forEach Loop to display the data from each of your arrays in the correct div
    songs.forEach(function(Song){
       $("#songs").append("<p>" + Song + "</p>"); 
    });
    
    songImage.forEach(function(images){
        $("#images").append('<img src = "' + images + '">');
    });
    
    artists.forEach(function(artists){
        $("#artists").append("<p>" + artists + "</p>");
    });
    
    songLengths.forEach(function(time){
       $("#lengths").append("<p>" + time + "</p>"); 
    });
    
    $("#sunnyPM").click(function(){
        sunnyPM();
    });
    $("#IDKHowPM").click(function() {
        IDKHowPM();
    });
    $("#loneDiggerPM").click(function() {
        loneDiggerPM();
    });
    $("#articMonkeysPM").click(function() {
        articMonkeysPM();
    });
}

function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs


}

function sunnyPM()
{
    if(playMusic)
    {
        audio.pause();
    }
    else{
        audio.play();
    }
}
function IDKHowPM()
{
    if(playMusic)
    {
        audio1.pause();
    }
    else
    {
        audio1.play();
    }
}
function loneDiggerPM()
{
    if(playMusic)
    {
        audio2.pause();
    }
    else
    {
        audio2.play();
    }
}
function articMonkeysPM()
{
    if(playMusic)
    {
        audio3.pause();
    }
    else
    {
        audio3.play();
    }
}
audio.onplaying = function() {
  playMusic = true;
};
audio.onpause = function() {
  playMusic = false;
};

audio1.onplaying = function() {
  playMusic = true;
};
audio1.onpause = function() {
  playMusic = false;
};

audio2.onplaying = function() {
  playMusic = true;
};
audio2.onpause = function() {
  playMusic = false;
};

audio3.onplaying = function() {
  playMusic = true;
};
audio3.onpause = function() {
  playMusic = false;
};

function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.
$("#add").click(function() {
    var songName = $("#song").val();
    songs.push(songName);
});

}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
