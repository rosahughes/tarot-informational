
// Accordion menu funtion
var accordion = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < accordion.length; i++) {
    accordion[i].onclick = function(){
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none"; // if un-clicked
        } else {
            panel.style.display = "block"; // if clicked
        }
    }
}
