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

// scroll function

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport() {
    //   // special bonus for those using jQuery
    //   if (typeof jQuery === "function" && el instanceof jQuery) {
    //     el = el[0];
    //   }
      const el = document.getElementById("words");
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
            document.getElementById("words").className = "words show";
        } else {
            document.getElementById("words").className = "words hide";
            };
        
        scroll(myFunction);
      }, 0);
