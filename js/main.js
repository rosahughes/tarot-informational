
// Data for accordion menu
let accordionData = [
  { 
    title: "What is Tarot?",
  
    content: "The tarot is a pack of playing cards, used from the mid-15th century in various parts of    Europe to play games such as Italian tarocchini and French tarot. In the late 18th century, it began    to be used for divination in the form of tarotology/cartomancy. Tarot cards are used throughout much    of Europe to play card games. In English-speaking countries, where these games are not played, tarot    cards are used primarily for divinatory purposes. The cards are traced by some occult writers to        ancient Egypt or the Kabbalah but there is no documented evidence of such origins or of the usage of    tarot for divination before the 18th century."
  },
  {
    title: "What does Tarot mean?",
    
    content: "The word tarot and German Tarock derive from the Italian tarocchi, the origin of which is     uncertain. The singular term is tarocco, which means a type of blood orange in modern Italian. One     theory relates to the Taro River in northern Italy; the game may have originated in Milan or           Bologna. Other writers believe it comes from the Arabic word turuq, which means 'ways'.                 Alternatively, it may be from the Arabic taraka, 'to leave, abandon, omit, leave behind'."
  },
  {
    title: "When did Tarot begin?",
    
    content: "Playing cards first entered Europe in the late 14th century, most likely from Mamluk,         Egypt, with suits of Batons or Polo sticks (commonly known as Wands by those practicing occult or       divinatory tarot), Coins (commonly known as disks, or pentacles in occult or divinatory tarot),         Swords, and Cups. These suits were very similar to modern tarot divination decks and are still used     in traditional Italian, Spanish and Portuguese playing card decks. The first documented tarot packs     were recorded between 1430 and 1450 in Milan, Ferrara and Bologna when additional trump cards with     allegorical illustrations were added to the common four-suit pack. These new decks were called         carte da trionfi, triumph cards, and the additional cards known simply as trionfi, which became         'trumps' in English. These cards are documented in a written statement in the court records in         Florence, in 1440. The oldest surviving tarot cards are from fifteen decks painted in the mid 15th     century for the Visconti-Sforza family, the rulers of Milan. During the 16th-century, a new game       played with a standard deck but sharing the same name (triomphe) was quickly becoming popular.         This coincided with the older game being renamed tarocchi."
  },
  {
    title: "How many cards are in a Tarot deck?",
    
    content: "Like common playing cards, the tarot has four suits (which vary by region: French suits       in Northern Europe, Latin suits in Southern Europe, and German suits in Central Europe). Each suit     has 14 cards, ten cards numbering from one (or Ace) to ten and four face cards (King, Queen,           Knight, and Jack/Knave). In addition, the tarot has a separate 21-card trump suit and a single card     known as the Fool, for a total of 78 cards. Depending on the game, the Fool may act as the top          trump or may be played to avoid following suit."
  },
  {
    title: "What are the different varieties of Tarot cards?",
    
    content: "A variety of tarot designs exist and a number of typical regional patterns have emerged.     Historically, one of the most important designs is the one usually known as the Tarot de Marseille.     This standard pattern was the one studied by Court de Gébelin, and cards based on this style           illustrate his Le Monde primitif. Some current editions of cards go back to a deck of a particular     Marseille design that was printed by Nicolas Conver in 1760. Other regional styles include the         'Swiss' Tarot. This one substitutes Juno and Jupiter for the Papess, or High Priestess and the         Pope, or Hierophant. In Florence an expanded deck called Minchiate was used. This deck of 97 cards     includes astrological symbols including the four elements, as well as traditional tarot motifs.         Some decks exist primarily as artwork; and such art decks sometimes contain only the 22 trump           cards."
  },
]

// DOMContentLoaded listener
document.addEventListener("DOMContentLoaded", function(){
    console.log("DOM loaded.");

  
  // Identify accordionContainer to run in the index.html div with a class 'container' 
  let accordionContainer = document.querySelector('.container'); 

  for (let item of accordionData){
    let button = document.createElement('button') // Create button element in accordion
    button.setAttribute('class', 'accordion');
    button.innerHTML = item.title;

  // Accordion click funtion on title button items 
    button.onclick = function(){
        console.log("Run accordion click function.");
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none"; // if un-clicked
        } else {
            panel.style.display = "block"; // if clicked
        }
    }

    let panelDiv = document.createElement('div'); // Create panel element in accordion
    panelDiv.setAttribute('class', 'panel');

    let content = document.createElement('p'); // Create a paragraph for each content item to display in the panelDiv
    content.innerHTML = item.content;

    panelDiv.appendChild(content); // When a panel element is called via the onclick function on the title/button element, it will display the associated content

    // Set the buttons and panels as elements of the accordionContainer
    accordionContainer.appendChild(button); 
    accordionContainer.appendChild(panelDiv);
  }
})


