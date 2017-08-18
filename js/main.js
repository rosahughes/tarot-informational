
// Accordion menu funtion
var accordion = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < accordion.length; i++) {
    accordion[i].onclick = function(){
      console.log("Run accordion click function");
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "panel") {
            panel.style.display = "none"; // if un-clicked
        } else {
            panel.style.display = "panel"; // if clicked
        }
    }
}
