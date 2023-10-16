const users = [
  { name: "John", age: 25, occupation: "gardener" },
  { name: "Lenny", age: 51, occupation: "programmer" },
  { name: "Andrew", age: 43, occupation: "teacher" },
  { name: "Peter", age: 81, occupation: "teacher" },
  { name: "Anna", age: 43, occupation: "teacher" },
  { name: "Albert", age: 76, occupation: "programmer" },
  { name: "Adam", age: 47, occupation: "teacher" },
  { name: "Robert", age: 72, occupation: "driver" },
];

function main() {
  const root = document.getElementById("root");
  const mainHeader = document.createElement("h1");

  root.appendChild(mainHeader);

  mainHeader.innerText = "FREELANCERS";

  users.forEach((element) => {
    const listItems = document.createElement("li");
    //I'm not to sure whether it wants me to display all the properties or just the name. I did all just to be safe.
    listItems.innerText = `Name: ${element.name}, Age: ${element.age}, Occupation: ${element.occupation}`;
    root.appendChild(listItems);
  });
}

//call the main function
main();

//Was not sure if it wanted me to add the css through a css file or by using DOM.
//I figured because this workshop is about DOM, i should probably add through DOM.
document.querySelector("body").style.backgroundColor = "bisque";
document.querySelector("h1").style.color = "red";
document.querySelector("h1").style.textAlign = "center";
document.getElementById("root").style.textAlign = "center";
