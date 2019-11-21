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

