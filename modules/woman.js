import Human from "./human.js";

export default class Woman extends Human {
  constructor(name, age, weight) {
    super(name, age, weight, "female");
  }

  greeting() {
    return `Hi, ${this.name}`;
  }
}
