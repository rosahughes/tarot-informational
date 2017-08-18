// *DOMContentLoaded
document.addEventListener("DOMContentLoaded", function(event){
  console.log("DOM fully loaded.");
})

// *Accordion menu funtion
let accordion = document.querySelectorAll("#accordion");
let i;

for (i = 0; i < accordion.length; i++) {
    accordion[i].onclick = function(){
      console.log("Run accordion click function.");
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.display === "info-panel") {
            panel.style.display = "none"; // *if un-clicked
        } else {
            panel.style.display = "info-panel"; // *if clicked
        }
    }
}
