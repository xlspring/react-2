import Human from "./human.js";

export default class Man extends Human {
  constructor(name, age, weight) {
    super(name, age, weight, "male");
  }

  greeting() {
    return `Hi, ${this.name}, ${this.age}`;
  }
}
