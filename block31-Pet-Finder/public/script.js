const root = document.getElementById("root");

async function fetchPets() {
  try {
    const response = await fetch("/api/v1/pets");
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
}

async function listPets(arr) {
  arr.map((pet) => {
    const divHTML = document.createElement("div");
    const ownerHTML = document.createElement("h2");
    const nameHTML = document.createElement("p");
    const breedHTML = document.createElement("p");
    const ageHTML = document.createElement("p");
    const phoneHTML = document.createElement("p");

    divHTML.className = "pet-container";

    ownerHTML.innerText = `Owner: ${pet.owner}`;
    nameHTML.innerText = `Name: ${pet.name}`;
    breedHTML.innerText = `Breed: ${pet.breed}`;
    ageHTML.innerText = `Age: ${pet.age}`;
    phoneHTML.innerText = `Contact Number: ${pet.telephone}`;

    divHTML.appendChild(ownerHTML);
    divHTML.appendChild(nameHTML);
    divHTML.appendChild(breedHTML);
    divHTML.appendChild(ageHTML);
    divHTML.appendChild(phoneHTML);

    root.appendChild(divHTML);
  });
}

async function init() {
  const allPets = await fetchPets();
  await listPets(allPets);
}

init();
