var index = 0;
var audio = new Audio("Songs3/song1.mp3");
var allSongs = ["song1.mp3", "song2.mp3", "song3.mp3", "song4.mp3", "song5.mp3"]

var SongsName = {
  music: ["Lag Jaa Gale", "Pyar Deewana Hota Hai", "Ek Pyar ka Nagma Hai", "O Mere Dil ke Chain", "Mere Samne Wali Khidki Me"]
}

$(".song").click(function() {
  if (this.id === "song1") {
    index = 0;
  } else if (this.id === "song2") {
    index = 1;
  } else if (this.id === "song3") {
    index = 2;
  } else if (this.id === "song4") {
    index = 3;
  } else if (this.id === "song5") {
    index = 4;
  }

  animate = ("#" + this.id);
  $(animate).fadeIn(100).fadeOut(100).fadeIn(100);
  audio.src = ("Songs3/" + this.id + ".mp3");
  audio.play();
  $(".GIF").css("opacity", "1");
  document.getElementById("toggleMusic").innerText = SongsName.music[index];

});
document.getElementById("mainButt").addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    $("#mainButt").removeClass("icon fa-regular fa-2x fa-circle-play");
    $("#mainButt").addClass("icon fa-regular fa-2x fa-circle-pause");
    $(".GIF").css("opacity", "1");
    document.getElementById("toggleMusic").innerText = SongsName.music[index];
  } else {
    audio.pause();
    $("#mainButt").removeClass("icon fa-regular fa-2x fa-circle-pause");
    $("#mainButt").addClass("icon fa-regular fa-2x fa-circle-play");
    $(".GIF").css("opacity", "0");
  }
})
document.getElementById("forw").addEventListener('click', () => {
  index++;
  if (index > 5) {
    index = 0;
    audio.src = ("Songs3/" + allSongs[index]);
    audio.play();
  } else {
    audio.src = ("Songs3/" + allSongs[index]);
    audio.play();
  }
  document.getElementById("toggleMusic").innerText = SongsName.music[index];
})
document.getElementById("prev").addEventListener('click', () => {
  index--;
  if (index < 1) {
    index = 5;
    audio.src = ("Songs3/" + allSongs[index]);
    audio.play();
  } else {
    audio.src = ("Songs3/" + allSongs[index]);
    audio.play();
  }

  document.getElementById("toggleMusic").innerText = SongsName.music[index];

})

audio.addEventListener('timeupdate', () => {
  progress = parseInt((audio.currentTime / audio.duration) * 100);
  myRange.value = progress;

  if (progress === 100) {
    if (index >= 5) {
      index = 1;
    } else {
      index++;
    }

    audio.src = ("Songs3/" + allSongs[index]);
    audio.play();
    document.getElementById("toggleMusic").innerText = SongsName.music[index];
  }
})
myRange.addEventListener('change', () => {
  audio.currentTime = myRange.value * audio.duration / 100;
})
