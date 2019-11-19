

// scroll function

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport() {
//   // special bonus for those using jQuery
//   if (typeof jQuery === "function" && el instanceof jQuery) {
//     el = el[0];
//   }
  const el = document.getElementById("section2");
  var rect = el.getBoundingClientRect()
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
};

setTimeout(function test() {console.log(isElementInViewport())}, 0)

var scroll = window.requestAnimationFrame ||
// IE Fallback
function(callback){ window.setTimeout(callback, 1000/60)};

setTimeout(function myFunction() {
    if (isElementInViewport()) {
            document.getElementById("section").className = "section1 show";
            document.getElementById("line").className = "lineshow";
            document.getElementById("section2").className = "section2 show";
    } else {
            document.getElementById("section").className = "section1 hide";
            document.getElementById("line").className = "hide";
            document.getElementById("section2").className = "section2 hide";
        };
    
    scroll(myFunction);
  }, 0);

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

function loadVideo() {
    const ifrm = document.createElement("iframe");
    ifrm.setAttribute("src", "https://player.vimeo.com/video/236773965");
    ifrm.style.width = "100%";
    ifrm.style.height = "400px";
    ifrm.frameBorder = "0";
    ifrm.allow = "autoplay; fullscreen"
    ifrm.allowFullscreen;
    ifrm.className = "video-1";
    document.getElementById("media").appendChild(ifrm);
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
    document.getElementById("media").appendChild(ifrm);
    hideSquirrel2();
}

function loadVideo3() {
    const ifrm = document.createElement("iframe");
    ifrm.setAttribute("src", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/687776971&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true");
    ifrm.style.width = "100%";
    ifrm.style.height = "100%";
    ifrm.frameBorder = "no";
    ifrm.allow = "autoplay"
    ifrm.className = "video-3";
    document.getElementById("media").appendChild(ifrm);
    hideSquirrel3();
}

function loadVideo4() {
    const ifrm = document.createElement("iframe");
    ifrm.setAttribute("src", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/687781399&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true");
    ifrm.style.width = "100%";
    ifrm.style.height = "100%";
    ifrm.frameBorder = "no";
    ifrm.allow = "autoplay"
    ifrm.className = "video-4";
    document.getElementById("media").appendChild(ifrm);
    hideSquirrel4();
}

function loadVideo5() {
    const ifrm = document.createElement("iframe");
    ifrm.setAttribute("src", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/687783634&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true");
    ifrm.style.width = "100%";
    ifrm.style.height = "100%";
    ifrm.frameBorder = "no";
    ifrm.allow = "autoplay"
    ifrm.className = "video-5";
    document.getElementById("media").appendChild(ifrm);
    hideSquirrel5();
}

function loadVideo6() {
    const ifrm = document.createElement("iframe");
    ifrm.setAttribute("src", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/687785005&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true");
    ifrm.style.width = "100%";
    ifrm.style.height = "100%";
    ifrm.frameBorder = "no";
    ifrm.allow = "autoplay"
    ifrm.className = "video-6";
    document.getElementById("media").appendChild(ifrm);
    hideSquirrel6();
}

//Mobile Navigation Menu

function showMenu() {
    document.getElementById("menu").style.display = "block";
}

function hideMenu() {
    document.getElementById("menu").style.display = "none";
}

//On load functions

function transition() {
    document.getElementById("nav").className  += " nav1";
    document.getElementById("nav1").className += " nav1";
    document.getElementById("link").className += " nav1";
    document.getElementById("link1").className += " nav1";
    document.getElementById("link2").className += " nav1";
    document.getElementById("last").className += " nav1";
}

function transition1() {
    document.getElementById("wipe-on-1").className = "wipe-on-1";
}

function transition2() {
    document.getElementById("wipe-on-2").className = "wipe-on-2";
}

function transition3() {
    setTimeout(transition2, 1200);
}

function showHead() {
    document.getElementById("animate").className += " name";
}

function showHead2() {
    document.getElementById("animate2").className += " name";
}

function showWwd() {
    document.getElementById("wwd").className += " name";
}

function showName() {
    setTimeout(showHead, 1500);
}

function showName2() {
    setTimeout(showHead2, 1750);
}

function showTitle() {
    setTimeout(showWwd, 2000);
}


/* ============== SUPPORTS TOUCH OR NOT ========= */
/*! Detects touch support and adds appropriate classes to html and returns a JS object */
var supports = (function() {
    var d = document.documentElement,
        c = "ontouchstart" in window || navigator.msMaxTouchPoints;
    if (c) {
        d.className += " touch";
        return {
            touch: true
        }
    } else {
        d.className += " no-touch";
        return {
            touch: false
        }
    }
})();
