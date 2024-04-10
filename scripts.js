// CSV of endangered/extinct species:
const animalCSV = [
  "Golden Toad,amphibian,Extinct,1989,https://www.thoughtco.com/thmb/r1r8Z58cMEjAAXyPIZwg_DpMohw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GoldenToad-0a12a607fc20498598ec8e680d925841.jpg,Charles H. Smith - U.S. Fish and Wildlife Service / Wikimedia Commons / Public Domain",
    "Yunnan Lake Newt,amphibian,Extinct,1979,https://www.thoughtco.com/thmb/1k0A7vkLnIbjWq2T2ESKyFZP2kc=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/yunnanlakenewtWC-56a254675f9b58b7d0c91c7a.JPG,Wikimedia Commons",
  "Southern Gastric-Brooding Frog,amphibian,Extinct,1983,https://embryo.asu.edu/sites/default/files/OImageGBFrogAG.jpeg,Anna Guerrero: Southern Gastric Brooding Frog-Image. Embryo Project Encyclopedia ( 2017-02-06 ). ISSN: 1940-5030 https://keep.lib.asu.edu/items/175289", 
  "Calilegua's Marsupial Frog,amphibian,Endangered,1996,https://images.ctfassets.net/tftu3vbfu92u/dRxDnyc2qyIQTysjsT30g/bf9957d565a4c24b3f2c7a6ac3dc3884/marsfrog.png?q=75&&w=1024&fm=webp,(Photo by Dr. Marcos Vaira)",
"Scarlet Harlequin Toad,amphibian,Endangered,1990,https://cdn.mos.cms.futurecdn.net/V5JyoDnQWRf2ootiWDQmFc-1200-80.jpg.webp,Image credit: Enrique La Marca/Conservation International",
"La Selle Grassfrog,amphibian,Endangered,1985,https://th.bing.com/th/id/OIP.d7S5IRzzEMHNxjKUSbShrAHaGH?w=227&h=187&c=7&r=0&o=5&dpr=1.1&pid=1.7,Photo by S.Blair Hedges and Conservation International (CI)",
"Turkestanian Salamander,amphibian,Extinct,1909,https://images.ctfassets.net/tftu3vbfu92u/23bYY1c3E0YkJUEIcK1y8i/f4f45a28ce0ec77c009d8bff4e5601bd/Hynobiusturkestanicus_nocredit.png?q=75&&w=1024&fm=webp,(Image credit: N.V. Panteleev/Conservation International)",
"Rio Pescado Stubfoot Toad,amphibian,Endangered,1995,https://content.eol.org/data/media/b4/ad/a7/643.24116235.jpg, Arca de los Sapos; cc-by-nc-sa-3.0",
"Bali Tiger,mammal,Extinct,1937,https://upload.wikimedia.org/wikipedia/commons/b/b2/Bali_Tiger_Skin_Leiden.jpg,Wikimedia Commons Public Domain",
"Javan Tiger,mammal,Extinct,1976,https://www.naturalblaze.com/wp-content/uploads/2017/01/776px-Java_Tiger.jpg,F. W. Bond (d. 1942) Wikimedia Commons Public Domain",
"Japanese Sea Lion,mammal,Extinct,1974,https://upload.wikimedia.org/wikipedia/commons/8/84/Zalophus_japonicus.JPG?20070812001816,Nkensei; Wikepedia Commons",
"Eskimo Curlew,bird,Extinct,1963,https://www.thoughtco.com/thmb/k2Ch-eRDUOPKYI6Z2jXzWhE1N1o=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/eskimocurlew-56a2552d3df78cf772747fc0.jpg,John James Audubon",
"Bachman's Warbler,bird,Extinct,1988,https://upload.wikimedia.org/wikipedia/commons/2/2b/Bachman%27s_Warbler.jpg,Louis Agassiz Fuertes(Wikepedia Commons)",
"Carolina Parakeet,bird,Extinct,1918,https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Naturalis_Biodiversity_Center_-_ZMA.AVES.3159_-_Conuropsis_carolinensis_Linnaeus%2C_1758_-_Psittacidae_-_skin_specimen.jpeg/330px-Naturalis_Biodiversity_Center_-_ZMA.AVES.3159_-_Conuropsis_carolinensis_Linnaeus%2C_1758_-_Psittacidae_-_skin_specimen.jpeg,Naturalis Biodiversity Center/Wikimedia Commons",
"Passenger Pigeon,bird,Extinct,1914,https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Pigeon-of-passage.jpg/1176px-Pigeon-of-passage.jpg?20120528082020,Wikepedia Public Domain(Mark Catesby; George Edwards)",
"Guadalupe Storm Petrel,bird,Endangered,1912,https://upload.wikimedia.org/wikipedia/commons/2/2c/Oceanodroma.macrodactyla.jpg,Wikepedia Public Domain(John Gerrard Keulemans)",
"Glaucous Macaw,bird,Endangered,1936,https://upload.wikimedia.org/wikipedia/commons/8/88/Ejemplar_de_Anodorhynchus_glaucus_en_cautiveiro_en_el_Zool%C3%B3gico_de_Buenos_Aires.png,Wikepedia Public Domain (Ricardo Néstor Orfila)",
"Pink-headed Duck,bird,Endangered,1935,https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/RhodonessaGronvold.jpg/1200px-RhodonessaGronvold.jpg,Henrik Grönvold Wikepedia Commons",
"Crested Shelduck,bird,Endangered,1964,https://upload.wikimedia.org/wikipedia/commons/0/05/Shiryou_k.jpg,Kevin Deacon",
"Maui Nukupuʻu,bird,Endangered,1994,https://upload.wikimedia.org/wikipedia/commons/d/d1/Hemignathus_lucidus_affinis.jpg,John Gerrard Keulemans",
"Imperial Woodpecker,bird,Endangered,1956,https://upload.wikimedia.org/wikipedia/commons/9/95/Kaiserspecht_fg02.jpg?20060819203523,Fritz Geller-Grimm CC by-SA 2.5",
"Ivory-billed Woodpecker,bird,Endangered,1987,https://upload.wikimedia.org/wikipedia/commons/9/9f/Ivory-bill_pair.jpg?20170528121613,Arthur A. Allen from Wikepedia Commons",
"Tasmanian Tiger,marsupial,Extinct,1936,https://upload.wikimedia.org/wikipedia/commons/d/d5/Thylacinus.jpg?20120907173509,Wikepedia Commons",
"Kouprey,mammal,Endangered,1969,https://upload.wikimedia.org/wikipedia/en/thumb/2/27/Kouprey_at_Vincennes_Zoo_in_Paris_by_Georges_Broihanne_1937.jpg/330px-Kouprey_at_Vincennes_Zoo_in_Paris_by_Georges_Broihanne_1937.jpg,Georges Broihanne",
"Toolache Wallaby,marsupial,Extinct,1939,https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Macropus_greyi_Gould.jpg/255px-Macropus_greyi_Gould.jpg,John Gould ",
"Pig-Footed Bandicoot,marsupial,Extinct,1901,https://upload.wikimedia.org/wikipedia/commons/9/9a/Cambridge_Natural_History_Mammalia_Fig_087.jpg?20120527202235,Frank E. Beddard",
"Lesser Bilby,marsupial,Extinct,1950,https://upload.wikimedia.org/wikipedia/commons/5/5c/Lesserbilby.jpg?20070317082214,Oldfield Thomas",
"Desert Rat-Kangaroo,marsupial,Extinct,1935,https://upload.wikimedia.org/wikipedia/commons/9/98/Caloprymnus.jpg,John Gould",
"Crescent Nail-Tail Wallaby,marsupial,Extinct,1956,https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Macropus_lunata_Gould_Mamm_Aust_vol_2_plate_55.jpg/1200px-Macropus_lunata_Gould_Mamm_Aust_vol_2_plate_55.jpg?20190705080308,John Gould & Henry Richter"
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
    this.size = 0;
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
    this.size++;
    if(this.isEmpty())
    {
      this.head = new Node(val);
      this.tail = this.head;
    }
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
    this.size++;
    if(this.isEmpty())
    {
      this.head = new Node(val);
      this.tail = this.head;
    }
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
    else if(this.tail.val.lt(val)) // if tail value is less than val
    {
      this.pushBack(val)
    }
    else 
    {
      this.size++;
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
  pop()
  {
    if(this.size != 0) // ensures size isn't negative
      this.size--;
    if(this.head == this.tail) // if list is empty or there is only one element
    {
      this.head = null;
      this.tail = null;
    }
    else
    {
      let prev = this.head;

      while(prev.next.next != null && prev.next.val != this.tail.val)
        {
          prev = prev.next;
        }
      if(prev != null)
        prev.next = null;
      this.tail = prev;
    }
  }

  /**
   * removeComplement :
   * removes all elements whose specified property doesn't contain the given value
   * @param {string} property name of Specie property
   * @param {string} value value of given Specie property
   */
  removeComplement(property, value)
  {
    while(this.head != null && this.head.val[property] != value) // when leading node doesn't match criteria
    {
      this.head = this.head.next;
      this.size--;
    }

    let prev = this.head;
    let curr = null;
    if(!this.isEmpty()) // if prev is not null
      curr = prev.next;

    while(curr != null) // list is empty or first node meets criteria
    {
      if(curr.val[property] != value) // if curr node doesn't match criteria then remove node
      {
        prev.next = curr.next;
        curr = prev.next
        this.size--;
      }
      else
      {
        prev = curr;
        curr = curr.next;
      }
    }

  }

  clear()
  {
    while(this.head != null)  
    {
      this.head = this.head.next;
    }
    this.head = null;
    this.tail = null;
    this.size = 0;
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


  let eSpecies = new LinkedList();  // contains alphabetically ordered list of endangered/extinct species
  const groups = [];
  getGroups();
  extractData(eSpecies);
  let prevFilter = { value : "" };
  

// This function adds cards the page to display the data in the array
function showCards() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card");
    let curr = eSpecies.head;

    while(curr != null)
    {
      let title = curr.val.name;
      let imgUrl = curr.val.imgUrl;
      const liText = ["Group: "+curr.val.group, "Status: "+curr.val.status, "Last Seen: "+curr.val.lastSeen];

      const nextCard = templateCard.cloneNode(true);
      editCardContent(nextCard, title, imgUrl, liText);
      cardContainer.appendChild(nextCard);
      
      curr = curr.next;
    }
}

function showFilters() {
  const groupFilter = document.getElementById("filterGroups");
  
  for(let i = 0; i < groups.length; i++)
  {
    const newFilter = document.createElement("button");
    newFilter.innerHTML = groups[i] + 's';
    newFilter.onclick = function() {
      filter('group', groups[i]);
    };
    groupFilter.appendChild(newFilter);
  }
}

function editCardContent(card, newTitle, newImageURL, list) {
    card.style.display = "block";

    const cardHeader = card.querySelector("h2");
    cardHeader.textContent = newTitle;

    const cardImage = card.querySelector("img");
    cardImage.src = newImageURL;
    cardImage.alt = newTitle + " Poster";

    const uList = card.querySelector("ul");
    for(let i = 0; i < list.length; i++)
    {
      const newBullet = document.createElement("li");
      newBullet.innerHTML = list[i];
      uList.appendChild(newBullet);
    }
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);
document.addEventListener("DOMContentLoaded", showFilters);


// removes the last card from being shown on page
function removeLastCard() {
    eSpecies.pop(); // Remove last item in titles array
    showCards(); // Call showCards again to refresh
}

// changes page to only show selected value of given property
function filter(property, value)
{
  if(prevFilter.value != value) // if the previously applied filter is the same as filter just selected, page doesn't change
  {
    if(eSpecies.size != animalCSV.length)
      resetData();
    
    eSpecies.removeComplement(property, value);
    showCards();
  } 
  prevFilter.value = value;
}

// shows all data if all data isn't already shown
function showAll()
 {
  if(eSpecies.size != animalCSV.length)
    {
      resetData();
      showCards();
    }
    prevFilter.value = "";
}

// extracts data from csv array into linked list
function extractData(list)
{
  for(let i = 0; i < animalCSV.length; i++)
  {
    const data = animalCSV[i].split(',');
    list.pushSort(new Species(data[0], data[1], data[2], data[3], data[4], data[5]));
  }
}

// puts the different specie groups into groups array
function getGroups()
{
  for(let i = 0; i < animalCSV.length; i++)
  {
    const data = animalCSV[i].split(',');
    if(!groups.includes(data[1]))
      groups.push(data[1]);
  }
}

// eSpecies resets to contain all species
function resetData()
{
  eSpecies.clear();
  extractData(eSpecies);
}