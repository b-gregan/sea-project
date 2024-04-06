
class Node{
  constructor(val){
    this.val = val;
    next = null;
  }
}

class LinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
  }

  isEmpty()
  {
    if(head == null)
      return true;
    return false;
  }

  pushFront(val)
  {
    if(this.isEmpty())
      head = new Node(val);
    else
    {
      tNode = new Node(val);
      tNode.next = head;
      head = tNode;
    }
  }

  pushBack(val)
  {
    if(this.isEmpty())
      head = new Node(val);
    else if(tail == null)
      tail = new Node(val);
    else
    {
      this.tail.next = new Node(val);
      tail = tail.next;
    }
  }

  pushSort(val){
    if(this.isEmpty() || this.head.val.gt(val)) // if isEmpty is T or head value is greater than val
    {
      this.pushFront(val);
    }
    else if(tail == null || this.tail.val.lt(val)) // if list size = 1 or tail value is less than val
    {
      this.pushBack(val)
    }
    else 
    {
      let prev = head;
      let curr = prev.next;

      while(curr !== null && curr.val.lt(val)) // current node is less than val
      {
        prev = curr;
        curr = curr.next;
      }

      newNode = new Node(val);
      newNode.next = prev.next;
      prev.next = newNode;
    }
  }
}


class Species {
    /**
     * Initializes Species object
     * @param {string} name 
     * @param {string} group 
     * @param {string} status 
     * @param {string, int} lastSeen 
     * @param {string} imgUrl 
     * @param {string} imgCredit 
     */
    constructor(name, group, status, lastSeen, imgUrl, imgCredit)
    {
      this.name = name;
      this.group = group
      this.status = status
      this.lastSeen = lastSeen;
      this.imgUrl = imgUrl;
      this.imgCredit = imgCredit;
    }
  
    /**
     * Greater Than Operator : checks if this object is greater than passed Specie
     * @param {Species} speciesObj
     * @returns true if this.name is greater than speciesObj.name
     */
    gt(speciesObj)
    {
      if(this.name > speciesObj.name)
        return true;
      return false;
    }

    /**
     * Less Than Operator : checks if this object is less than passed Specie
     * @param {*} speciesObj 
     * @returns true if this.name is less than speciesObj.name
     */
    lt(speciesObj)
    {
      if(this.name < speciesObj.name)
        return true;
      return false;
    }
  }
  
  /*
   - Processes list of specie data in 'ESpecies.txt' 
  */
  function getSpecies() {
    let xhr = new XMLHttpRequest();
    url = "./ESpecies.txt"
    
    xhr.open('GET', url, true);
    xhr.responseType = 'text';
    
    xhr.onload = function () {
      if (xhr.status === 200){
        const animals = xhr.responseText.split('\n');
        console.log(animals[0]);
    
        for(let i = 0; i < animals.length; i++){
          // input animal data into species class
        }
        
      } else {
        // Handle errors
        console.error('Failed to load CSV file. Status:', xhr.status);
      }
      };
    xhr.send();
  }

const FRESH_PRINCE_URL = "https://cdn.mos.cms.futurecdn.net/V5JyoDnQWRf2ootiWDQmFc-1200-80.jpg.webp";
const CURB_POSTER_URL = "https://m.media-amazon.com/images/M/MV5BZDY1ZGM4OGItMWMyNS00MDAyLWE2Y2MtZTFhMTU0MGI5ZDFlXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_FMjpg_UX1000_.jpg";
const EAST_LOS_HIGH_POSTER_URL = "https://static.wikia.nocookie.net/hulu/images/6/64/East_Los_High.jpg";

// This is an array of strings (TV show titles)
let titles = [
    "Fresh Prince of Bel Air",
    "Curb Your Enthusiasm",
    "East Los High"
];
// Your final submission should have much more data than this, and 
// you should use more than just an array of strings to store it all.


// This function adds cards the page to display the data in the array
function showCards() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card");
    
    for (let i = 0; i < titles.length; i++) {
        let title = titles[i];

        // This part of the code doesn't scale very well! After you add your
        // own data, you'll need to do something totally different here.
        let imageURL = "";
        if (i == 0) {
            imageURL = FRESH_PRINCE_URL;
        } else if (i == 1) {
            imageURL = CURB_POSTER_URL;
        } else if (i == 2) {
            imageURL = EAST_LOS_HIGH_POSTER_URL;
        }

        const nextCard = templateCard.cloneNode(true); // Copy the template card
        editCardContent(nextCard, title, imageURL); // Edit title and image
        cardContainer.appendChild(nextCard); // Add new card to the container
    }
}

function editCardContent(card, newTitle, newImageURL) {
    card.style.display = "block";

    const cardHeader = card.querySelector("h2");
    cardHeader.textContent = newTitle;

    const cardImage = card.querySelector("img");
    cardImage.src = newImageURL;
    cardImage.alt = newTitle + " Poster";

    // You can use console.log to help you debug!
    // View the output by right clicking on your website,
    // select "Inspect", then click on the "Console" tab
    console.log("new card:", newTitle, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

function quoteAlert() {
    console.log("Button Clicked!")
    alert("I guess I can kiss heaven goodbye, because it got to be a sin to look this good!");
}

function removeLastCard() {
    titles.pop(); // Remove last item in titles array
    showCards(); // Call showCards again to refresh
}
