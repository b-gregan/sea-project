// CSV of endangered/extinct animals:
const animalCSV = [
  "Golden Toad,amphibian,Extinct,1989,https://www.thoughtco.com/thmb/r1r8Z58cMEjAAXyPIZwg_DpMohw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GoldenToad-0a12a607fc20498598ec8e680d925841.jpg,Charles H. Smith - U.S. Fish and Wildlife Service / Wikimedia Commons / Public Domain",
    "Yunnan Lake Newt,amphibian,Extinct,1979,https://www.thoughtco.com/thmb/1k0A7vkLnIbjWq2T2ESKyFZP2kc=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/yunnanlakenewtWC-56a254675f9b58b7d0c91c7a.JPG,Wikimedia Commons",
  "Southern Gastric-Brooding Frog,amphibian,Extinct,1983,https://embryo.asu.edu/sites/default/files/OImageGBFrogAG.jpeg,Anna Guerrero: Southern Gastric Brooding Frog-Image. Embryo Project Encyclopedia ( 2017-02-06 ). ISSN: 1940-5030 https://keep.lib.asu.edu/items/175289", "Calilegua’s Marsupial Frog,amphibian,Endangered,1996,https://images.ctfassets.net/tftu3vbfu92u/dRxDnyc2qyIQTysjsT30g/bf9957d565a4c24b3f2c7a6ac3dc3884/marsfrog.png?q=75&&w=1024&fm=webp,(Photo by Dr. Marcos Vaira)",
"Scarlet Harlequin Toad,amphibian,Endangered,1990,https://cdn.mos.cms.futurecdn.net/V5JyoDnQWRf2ootiWDQmFc-1200-80.jpg.webp,Image credit: Enrique La Marca/Conservation International",
"La Visite Robber Frog,amphibian,Endangered,1985,https://media-cldnry.s-nbcnews.com/image/upload/t_fit-880w,f_auto,q_auto:best/MSNBC/Components/Slideshows/_production/ss-110112-frogs-haiti/ss-110112-frogs-haiti-09.jpg,globalwildlife.org"
];

class Node{
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

class LinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
  }

  /**
   * Checks if this list is empty
   * @returns true if list is empty
   */
  isEmpty()
  {
    if(this.head == null)
      return true;
    return false;
  }

  /**
   * Adds node with value of 'val' to front of list
   * @param {Species} val 
   */
  pushFront(val)
  {
    if(this.isEmpty())
      this.head = new Node(val);
    else
    {
      let tNode = new Node(val);
      tNode.next = this.head;
      this.head = tNode;
    }
  }

  /**
   * Adds node with value of 'val' to end of list
   * @param {Species} val 
   */
  pushBack(val)
  {
    if(this.isEmpty())
      this.head = new Node(val);
    else if(this.tail == null)
      this.tail = new Node(val);
    else
    {
      this.tail.next = new Node(val);
      this.tail = this.tail.next;
    }
  }

  /**
   * inserts val into sorted list in ascending order
   * @param {Species} val 
   */
  pushSort(val){
    if(this.isEmpty() || this.head.val.gt(val)) // if isEmpty is T or head value is greater than val
    {
      this.pushFront(val);
    }
    else if(this.tail == null || this.tail.val.lt(val)) // if list size = 1 or tail value is less than val
    {
      this.pushBack(val)
    }
    else 
    {
      let prev = this.head;
      let curr = prev.next;

      while(curr !== null && curr.val.lt(val)) // current node is less than val
      {
        prev = curr;
        curr = curr.next;
      }

      let newNode = new Node(val);
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

  
  let eSpecies = new LinkedList();
  extractData(eSpecies);

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
    let curr = eSpecies.head;
    
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

function extractData(list)
{
  for(let i = 0; i < animalCSV.length; i++)
  {
    const data = animalCSV[i].split(',');
    list.pushSort(new Species(data[0], data[1], data[2], data[3], data[4], data[5]));
  }
}