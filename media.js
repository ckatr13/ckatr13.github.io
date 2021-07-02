//load functions

function transition() {
    document.getElementById("nav").className  += " nav1";
    document.getElementById("nav1").className += " nav1";
    document.getElementById("link").className += " nav1";
    document.getElementById("link1").className += " nav1";
    document.getElementById("link2").className += " nav1";
    document.getElementById("last").className += " nav1";
}

function transition1() {
    document.getElementById("bg-1").className += " bg-1-1";
}

function transition2() {
    document.getElementById("bg-2").className += " bg-2-2";
}

function transition3() {
    setTimeout(transition2, 1000);
}

function showHead() {
    document.getElementById("head").className += " head1";
}

function showAbout() {
    setTimeout(showHead, 1500);
}

//Mobile Navigation Menu

function showMenu() {
    document.getElementById("menu").style.visibility = "visible";
    document.getElementById("nav1").style.visibility = "hidden";
    document.getElementById("x-menu").style.visibility = "visible";
}

function hideMenu() {
    document.getElementById("menu").style.visibility = "hidden";
    document.getElementById("x-menu").style.visibility = "hidden";
    document.getElementById("nav1").style.visibility= "visible";
}

// functions to show videos
function hideSquirrel() {
    document.getElementById("mask-1").style.visibility = "hidden"; 
}

function hideSquirrel2() {
    document.getElementById("mask-2").style.visibility = "hidden"; 
}

function hideSquirrel3() {
    document.getElementById("mask-4").style.visibility = "hidden"; 
}

function hideSquirrel4() {
    document.getElementById("mask-5").style.visibility = "hidden"; 
}

function hideSquirrel5() {
    document.getElementById("mask-6").style.visibility = "hidden"; 
}

function hideSquirrel6() {
    document.getElementById("mask-7").style.visibility = "hidden"; 
}

function hideSquirrel7() {
    document.getElementById("mask-8").style.visibility = "hidden"; 
}

function hideSquirrel8() {
    document.getElementById("mask-9").style.visibility = "hidden"; 
}

function hideSquirrel9() {
    document.getElementById("mask-10").style.visibility = "hidden"; 
}

function hideSquirrel10() {
    document.getElementById("mask-11").style.visibility = "hidden"; 
}

function hideSquirrel11() {
    document.getElementById("mask-12").style.visibility = "hidden"; 
}

function hideSquirrel12() {
    document.getElementById("mask-13").style.visibility = "hidden"; 
}

function hideSquirrel13() {
    document.getElementById("mask-14").style.visibility = "hidden"; 
}

function hideSquirrel14() {
    document.getElementById("mask-15").style.visibility = "hidden"; 
}

function hideSquirrel15() {
    document.getElementById("mask-16").style.visibility = "hidden"; 
}

function hideSquirrel16() {
    document.getElementById("mask-17").style.visibility = "hidden"; 
}

function hideSquirrel17() {
    document.getElementById("mask-18").style.visibility = "hidden"; 
}

function hideSquirrel18() {
    document.getElementById("mask-19").style.visibility = "hidden"; 
}

function hideSquirrel19() {
    document.getElementById("mask-20").style.visibility = "hidden"; 
}

function hideSquirrel20() {
    document.getElementById("mask-21").style.visibility = "hidden"; 
}

function loadVideo() {
    const ifrm = document.createElement("iframe");
    ifrm.setAttribute("src", "https://player.vimeo.com/video/236773965");
    ifrm.style.width = "100%";
    ifrm.style.height = "400px";
    ifrm.frameBorder = "0";
    ifrm.allow = "autoplay; fullscreen"
    ifrm.allowFullscreen;
    ifrm.className = "video-1";
    document.getElementById("videos").appendChild(ifrm);
    hideSquirrel();
}

function loadVideo2() {
    const ifrm = document.createElement("iframe");
    ifrm.setAttribute("src", "https://player.vimeo.com/video/202595392");
    ifrm.style.width = "100%";
    ifrm.style.height = "400px";
    ifrm.frameBorder = "0";
    ifrm.allow = "autoplay; fullscreen"
    ifrm.allowFullscreen;
    ifrm.className = "video-2";
    document.getElementById("videos").appendChild(ifrm);
    hideSquirrel();
}

function loadVideo3() {
    const ifrm = document.createElement("iframe");
    ifrm.setAttribute("src", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/687776971&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true");
    ifrm.style.width = "100%";
    ifrm.style.height = "200px";
    ifrm.frameBorder = "no";
    ifrm.allow = "autoplay"
    ifrm.className = "video-3";
    document.getElementById("audio").appendChild(ifrm);
    hideSquirrel3();
}

function loadVideo4() {
    const ifrm = document.createElement("iframe");
    ifrm.setAttribute("src", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/687781399&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true");
    ifrm.style.width = "100%";
    ifrm.style.height = "200px";
    ifrm.frameBorder = "no";
    ifrm.allow = "autoplay"
    ifrm.className = "video-4";
    document.getElementById("videos").appendChild(ifrm);
    hideSquirrel4();
}

function loadVideo5() {
    const ifrm = document.createElement("iframe");
    ifrm.setAttribute("src", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/687783634&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true");
    ifrm.style.width = "100%";
    ifrm.style.height = "200px";
    ifrm.frameBorder = "no";
    ifrm.allow = "autoplay"
    ifrm.className = "video-5";
    document.getElementById("audio").appendChild(ifrm);
    hideSquirrel5();
}

function loadVideo6() {
    const ifrm = document.createElement("iframe");
    ifrm.setAttribute("src", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/687785005&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true");
    ifrm.style.width = "100%";
    ifrm.style.height = "200px";
    ifrm.frameBorder = "no";
    ifrm.allow = "autoplay"
    ifrm.className = "video-6";
    document.getElementById("audio").appendChild(ifrm);
    hideSquirrel6();
}

function loadVideo7() {
    const ifrm = document.createElement("iframe");
    ifrm.setAttribute("src", "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fchristopher.butler.167%2Fvideos%2F3069333303082053%2F&show_text=0");
    ifrm.style.width = "100%";
    ifrm.style.height = "100%";
    ifrm.style.border = "none";
    ifrm.style.overflow = "hidden";
    ifrm.scrolling = "no";
    ifrm.frameBorder = "0";
    ifrm.allowTransparency = "true";
    ifrm.allowFullscreen = "true";
    ifrm.className = "video-7";
    document.getElementById("videos").appendChild(ifrm);
    hideSquirrel7();
}

function loadVideo8() {
    const ifrm = document.createElement("iframe");
    ifrm.setAttribute("src", "https://www.youtube.com/embed/iRPjcl6wVfA");
    ifrm.style.width = "100%";
    ifrm.style.height = "400px";
    ifrm.frameBorder = "0";
    ifrm.allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture";
    ifrm.allowFullscreen = "true";
    ifrm.className = "video-8";
    document.getElementById("videos").appendChild(ifrm);
    hideSquirrel8();
}

function loadVideo9() {
    const ifrm = document.createElement("iframe");
    ifrm.setAttribute("src", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/711810400&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true");
    ifrm.style.width = "100%";
    ifrm.style.height = "200px";
    ifrm.scrolling = "no";
    ifrm.frameBorder = "no";
    ifrm.allow = "autoplay"
    ifrm.className = "video-9";
    document.getElementById("audio").appendChild(ifrm);
    hideSquirrel9();
}

function loadVideo10() {
    const ifrm = document.createElement("iframe");
    ifrm.setAttribute("src", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/711820201&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true");
    ifrm.style.width = "100%";
    ifrm.style.height = "200px";
    ifrm.scrolling = "no";
    ifrm.frameBorder = "no";
    ifrm.allow = "autoplay"
    ifrm.className = "video-10";
    document.getElementById("videos").appendChild(ifrm);
    hideSquirrel10();
}

function loadVideo11() {
    const ifrm = document.createElement("iframe");
    ifrm.setAttribute("src", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/711826741&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true");
    ifrm.style.width = "100%";
    ifrm.style.height = "200px";
    ifrm.scrolling = "no";
    ifrm.frameBorder = "no";
    ifrm.allow = "autoplay"
    ifrm.className = "video-11";
    document.getElementById("audio").appendChild(ifrm);
    hideSquirrel11();
}

function loadVideo12() {
    const ifrm = document.createElement("iframe");
    ifrm.setAttribute("src", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/711830536&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true");
    ifrm.style.width = "100%";
    ifrm.style.height = "200px";
    ifrm.scrolling = "no";
    ifrm.frameBorder = "no";
    ifrm.allow = "autoplay"
    ifrm.className = "video-12";
    document.getElementById("audio").appendChild(ifrm);
    hideSquirrel12();
}

function loadVideo13() {
    const ifrm = document.createElement("iframe");
    ifrm.setAttribute("src", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/711835042&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true");
    ifrm.style.width = "100%";
    ifrm.style.height = "200px";
    ifrm.scrolling = "no";
    ifrm.frameBorder = "no";
    ifrm.allow = "autoplay"
    ifrm.className = "video-13";
    document.getElementById("audio").appendChild(ifrm);
    hideSquirrel13();
}

function loadVideo14() {
    const ifrm = document.createElement("iframe");
    ifrm.setAttribute("src", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/711839164&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true");
    ifrm.style.width = "100%";
    ifrm.style.height = "200px";
    ifrm.scrolling = "no";
    ifrm.frameBorder = "no";
    ifrm.allow = "autoplay"
    ifrm.className = "video-14";
    document.getElementById("audio").appendChild(ifrm);
    hideSquirrel14();
}

function loadVideo15() {
    const ifrm = document.createElement("iframe");
    ifrm.setAttribute("src", "https://player.vimeo.com/video/202588421");
    ifrm.style.width = "100%";
    ifrm.style.height = "400px";
    ifrm.frameBorder = "0";
    ifrm.allow = "autoplay; fullscreen"
    ifrm.allowFullscreen;
    ifrm.className = "video-15";
    document.getElementById("videos").appendChild(ifrm);
    hideSquirrel15();
}

function loadVideo16() {
    const ifrm = document.createElement("iframe");
    ifrm.setAttribute("src", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/711868747&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true");
    ifrm.style.width = "100%";
    ifrm.style.height = "200px";
    ifrm.scrolling = "no";
    ifrm.frameBorder = "no";
    ifrm.allow = "autoplay"
    ifrm.className = "video-16";
    document.getElementById("audio").appendChild(ifrm);
    hideSquirrel16();
}

function loadVideo17() {
    const ifrm = document.createElement("iframe");
    ifrm.setAttribute("src", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/711872536&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true");
    ifrm.style.width = "100%";
    ifrm.style.height = "200px";
    ifrm.scrolling = "no";
    ifrm.frameBorder = "no";
    ifrm.allow = "autoplay"
    ifrm.className = "video-17";
    document.getElementById("audio").appendChild(ifrm);
    hideSquirrel17();
}

function loadVideo18() {
    const ifrm = document.createElement("iframe");
    ifrm.setAttribute("src", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/711876421&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true");
    ifrm.style.width = "100%";
    ifrm.style.height = "200px";
    ifrm.scrolling = "no";
    ifrm.frameBorder = "no";
    ifrm.allow = "autoplay"
    ifrm.className = "video-18";
    document.getElementById("audio").appendChild(ifrm);
    hideSquirrel18();
}

function loadVideo19() {
    const ifrm = document.createElement("iframe");
    ifrm.setAttribute("src", "https://player.vimeo.com/video/202589915");
    ifrm.style.width = "100%";
    ifrm.style.height = "400px";
    ifrm.frameBorder = "0";
    ifrm.allow = "autoplay; fullscreen"
    ifrm.allowFullscreen;
    ifrm.className = "video-19";
    document.getElementById("videos").appendChild(ifrm);
    hideSquirrel19();
}

function loadVideo20() {
    const ifrm = document.createElement("iframe");
    ifrm.setAttribute("src", "https://player.vimeo.com/video/202587343");
    ifrm.style.width = "100%";
    ifrm.style.height = "400px";
    ifrm.frameBorder = "0";
    ifrm.allow = "autoplay; fullscreen"
    ifrm.allowFullscreen;
    ifrm.className = "video-20";
    document.getElementById("videos").appendChild(ifrm);
    hideSquirrel20();
}

