// *DOMContentLoaded
document.addEventListener("DOMContentLoaded", function(event){
  console.log("DOM fully loaded.");
})

// *Accordion menu funtion
var accordion = document.querySelectorAll("#accordion");
var i;

for (i = 0; i < accordion.length; i++) {
    accordion[i].onclick = function(){
      console.log("Run accordion click function.");
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.display === "panel") {
            panel.style.display = "none"; // *if un-clicked
        } else {
            panel.style.display = "panel"; // *if clicked
        }
    }
}
