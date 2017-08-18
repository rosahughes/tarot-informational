// *DOMContentLoaded
document.addEventListener("DOMContentLoaded", function(){
  console.log("DOM fully loaded.");
})

// *Accordion menu funtion
let accordion = document.querySelectorAll("#accordion");
let i;

for (i = 0; i < accordion.length; i++) {
    accordion[i].onclick = function(){
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.display === "panel") {
            panel.style.display = "none"; // *if un-clicked
        } else {
            panel.style.display = "panel"; // *if clicked
        }
    }
}
