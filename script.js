
let Hcount = 0
let Gcount = 0

homeC = document.getElementById("home-count")
guestC = document.getElementById("guest-count")

function addoneH(){
    Hcount = Hcount + 1
    homeC.textContent = Hcount
}

function addtwoH(){
    Hcount = Hcount + 2
    homeC.textContent = Hcount
}

function addthreeH() {
    Hcount = Hcount + 3
    homeC.textContent = Hcount
}

function addoneG(){
    Gcount = Gcount + 1
    guestC.textContent = Gcount
}

function addtwoG(){
    Gcount = Gcount + 2
    guestC.textContent = Gcount
}

function addthreeG() {
    Gcount = Gcount + 3
    guestC.textContent = Gcount
}