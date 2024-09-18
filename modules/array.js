import Man from "./man.js";
import Woman from "./woman.js";

function create(length) {
  let people = new Array();

  for (let i = 0; i < length; i++) {
    Math.random() > 0.5
      ? people.push(
          new Man(
            generateName("male"),
            generateNum(20, 40),
            generateNum(50, 150),
          ),
        )
      : people.push(
          new Woman(
            generateName("female"),
            generateNum(20, 40),
            generateNum(50, 150),
          ),
        );
  }

  return people;
}

function generateName(gender) {
  const MALE_NAMES = [
    "Ethan",
    "Liam",
    "Noah",
    "Oliver",
    "Lucas",
    "Mason",
    "James",
    "Benjamin",
    "Alexander",
    "Henry",
  ];

  const FEMALE_NAMES = [
    "Emma",
    "Olivia",
    "Ava",
    "Sophia",
    "Isabella",
    "Mia",
    "Charlotte",
    "Amelia",
    "Harper",
    "Ella",
  ];

  let randomNum = Math.floor(Math.random() * 10);

  return gender === "male"
    ? MALE_NAMES[randomNum]
    : gender === "female"
      ? FEMALE_NAMES[randomNum]
      : "shrek";
}

function generateNum(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

function callFromArray(arr) {
  arr.forEach((x, i) => {
    console.log(`---\nResult ${++i}`);
    console.log(`%c ${JSON.stringify(x.getInfo(null))}`, "color: yellow");
    console.log(`%c ${JSON.stringify(x.greeting())}`, "color: yellow");
  });
}

export { create, callFromArray };
