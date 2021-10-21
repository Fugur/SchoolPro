var contact = document.getElementById("Contacts")
var i = 0
function openContacts(){
    if(!i){
        contact.style.display = "block"
        i++
    }
    else if(i){
        contact.style.display = "none"
        i--
    }
}