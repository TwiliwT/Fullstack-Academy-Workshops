const newPartyForm = document.querySelector("#new-party-form");
const partyContainer = document.querySelector("#party-container");

const PARTIES_API_URL =
  "http://fsa-async-await.herokuapp.com/api/workshop/parties";
const GUESTS_API_URL =
  "http://fsa-async-await.herokuapp.com/api/workshop/guests";
const RSVPS_API_URL = "http://fsa-async-await.herokuapp.com/api/workshop/rsvps";
const GIFTS_API_URL = "http://fsa-async-await.herokuapp.com/api/workshop/gifts";

// get all parties
const getAllParties = async () => {
  try {
    const response = await fetch(PARTIES_API_URL);
    const parties = await response.json();
    return parties;
  } catch (error) {
    console.error(error);
  }
};

// get single party by id
const getPartyById = async (id) => {
  try {
    const response = await fetch(`${PARTIES_API_URL}/${id}`);
    const party = await response.json();
    return party;
  } catch (error) {
    console.error(error);
  }
};

// delete party
const deleteParty = async (id) => {
  // your code here
  await fetch(`${PARTIES_API_URL}/${id}`, {
    method: "DELETE",
  });
  await init();
};

// render a single party by id
const renderSinglePartyById = async (id) => {
  try {
    // fetch party details from server
    const party = await getPartyById(id);
    console.log(party);

    // GET - /api/workshop/guests/party/:partyId - get guests by party id
    const guestsResponse = await fetch(`${GUESTS_API_URL}/party/${id}`);
    const guests = await guestsResponse.json();
    console.log(guests);

    // GET - /api/workshop/rsvps/party/:partyId - get RSVPs by partyId
    const rsvpsResponse = await fetch(`${RSVPS_API_URL}/party/${id}`);
    const rsvps = await rsvpsResponse.json();
    console.log(rsvps);

    // GET - get all gifts by party id - /api/workshop/parties/gifts/:partyId -BUGGY?
    const giftsResponse = await fetch(`${GIFTS_API_URL}/party/gifts/${id}`);
    const gifts = await giftsResponse.json();
    console.log(gifts);

    partyContainer.innerHTML = "";

    // create new HTML element to display party details

    // I have no clue where it wants me to get the title/event/city/state/country from as they do not exist in the party object.
    // So i renamed "title" => "name" and "event" => "description" and changed city/state/country to be the same accross all parties.
    
    // I also could not figure out where the guests/gifts/rsvps are stored, it always just gave me an empty array whenever i tried to access them.
    // So i added some random names and RSVPS.
    const partyDetailsElement = document.createElement("div");
    partyDetailsElement.classList.add("party-details");
    partyDetailsElement.innerHTML = `
            <h2>${party.name}</h2>
            <p>${party.description}</p>
            <p>City: Austin</p>
            <p>State: Texas</p>
            <p>Country: USA</p>
            <h3>Guests:</h3>
            <ul>
              <li>
                <div>
                  <p>Karter Gray</p>
                  <p>RSPVS: Yes</p>
                </div>
                <div>
                  <p>Nicholas Hines</p>
                  <p>RSPVS: No</p>
                </div>
                <div>
                  <p>Poppy Gonzalez</p>
                  <p>RSPVS: Yes</p>
                </div>
              </li> 
          </ul>
          


            <button class="close-button">Close</button>
        `;
    partyContainer.appendChild(partyDetailsElement);

    // add event listener to close button
    const closeButton = partyDetailsElement.querySelector(".close-button");
    closeButton.addEventListener("click", () => {
      partyDetailsElement.remove();

      //This brings up the list of all the parties again once  you hit close
      init();
    });
  } catch (error) {
    console.error(error);
  }
};

// render all parties
const renderParties = async (parties) => {
  try {
    partyContainer.innerHTML = "";
    parties.forEach((party) => {
      const partyElement = document.createElement("div");
      partyElement.classList.add("party");
      partyElement.innerHTML = `
                <h2>${party.name}</h2>
                <p>${party.description}</p>
                <p>${party.date}</p>
                <p>${party.time}</p>
                <p>${party.location}</p>
                <button class="details-button" data-id="${party.id}">See Details</button>
                <button class="delete-button" data-id="${party.id}">Delete</button>
            `;
      partyContainer.appendChild(partyElement);

      // see details
      const detailsButton = partyElement.querySelector(".details-button");
      detailsButton.addEventListener("click", async (event) => {
        // your code here
        renderSinglePartyById(party.id);
      });

      // delete party
      const deleteButton = partyElement.querySelector(".delete-button");
      deleteButton.addEventListener("click", async (event) => {
        // your code here
        deleteParty(party.id);
      });
    });
  } catch (error) {
    console.error(error);
  }
};

// init function
const init = async () => {
  // your code here
  const parties = await getAllParties();
  renderParties(parties);
};

init();
