const cohortName = "2308-ftb-et-web-pt";
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;


export async function fetchAllPlayers() {
    try {
        const response = await fetch(`${APIURL}/players`)
        const json = await response.json()
        console.log(json)
    } catch (error) {
        console.error(error)
    }
}