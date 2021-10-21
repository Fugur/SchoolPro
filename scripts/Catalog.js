function displayHoodie(){
    var HoodieCheckBox = document.getElementById("HoodieOnly")
    var hoodie = document.getElementById("Hoodie");
    if(HoodieCheckBox.checked){
        hoodie.style.display = "flex"
    }
    if(!HoodieCheckBox.checked){
        hoodie.style.display = "none"
    }
    
}

function displayWinterJacket(){
    var winterJacket = document.getElementById("WinterJacket");
    var WinterJacketCheckBox = document.getElementById("WinterJacketOnly");
    if(WinterJacketCheckBox.checked){
        winterJacket.style.display = "flex"
    }
    if(!WinterJacketCheckBox.checked){
        winterJacket.style.display = "none"
    }
}

function displayT_Shirts(){
    var t_Shirt = document.getElementById("T-Shirt");
    var T_ShirtCheckBox = document.getElementById("T-ShirtOnly");
    if(T_ShirtCheckBox.checked){
        t_Shirt.style.display = "flex"
    }
    if(!T_ShirtCheckBox.checked){
        t_Shirt.style.display = "none"
    }
}

function displayBombers(){
    var bombers = document.getElementById("Bombers");
    var bomberCheckBox = document.getElementById("BombersOnly")
    if(bomberCheckBox.checked){
        bombers.style.display = "flex"
    }
    if(!bomberCheckBox.checked){
        bombers.style.display = "none"
    }
}
function displayCaps(){
    var caps = document.getElementById("Caps")
    var capsChackBox = document.getElementById("CapsOnly")
    if(capsChackBox.checked){
        caps.style.display = "flex"
    }
    if(!capsChackBox.checked){
        caps.style.display = "none"
    }
}
function displayTowels(){
    var towels = document.getElementById("Towels")
    var towelsChackBox = document.getElementById("TowelsOnly")
    if(towelsChackBox.checked){
        towels.style.display = "flex"
    }
    if(!towelsChackBox.checked){
        towels.style.display = "none"
    }
}
function displayShorts(){
    var shorts = document.getElementById("Shorts")
    var shortsChackBox = document.getElementById("ShortsOnly")
    if(shortsChackBox.checked){
        shorts.style.display = "flex"
    }
    if (!shortsChackBox.checked) {
        shorts.style.display = "none"
    }
}