const cohortName = "2308-ftb-et-web-pt";
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;

async function fetchAllPlayers() {
  try {
    const response = await fetch(`${APIURL}/players`);
    const json = await response.json();
    return json.data.players;
  } catch (error) {
    console.error(error);
  }
}

async function fetchSinglePlayer(id) {
  try {
    const response = await fetch(`${APIURL}/players/${id}`);
    const json = await response.json();
    return json.data.player;
  } catch (error) {
    console.error(error);
  }
}

async function deletePlayer(id) {
  try {
    const response = await fetch(`${APIURL}/players/${id}`, {
      method: "DELETE",
    });
    const result = await response.json();
    console.log(result);
  } catch (error) {}
}

async function postPuppy(name, breed, status, teamId, imageUrl) {
  const payload = JSON.stringify({
    name: name,
    breed: breed,
    status: status,
    teamId: teamId,
    imageUrl: imageUrl,
  });

  try {
    const response = await fetch(`${APIURL}/players`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: payload,
    });
    const result = await response.json();
    console.log(result);
  } catch (err) {
    console.error(err);
  }
}

export { fetchAllPlayers, fetchSinglePlayer, deletePlayer, postPuppy };
