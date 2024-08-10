setInterval(function () {
    var vid = document.getElementById("welcome-video");
    vid.style.height = parseInt(window.getComputedStyle(vid).width) / 16 * 9 + "px";
},1000)
