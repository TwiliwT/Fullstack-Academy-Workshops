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
  const response = await fetch(`${APIURL}/players/${id}`);
  const json = await response.json();
  return json.data.player;
}

export { fetchAllPlayers, fetchSinglePlayer };
