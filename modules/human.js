export default class Human {
  constructor(name, age, weight, gender) {
    this.name = name;
    this.age = age;
    this.weight = weight;
    this.gender = gender;
  }

  getInfo(prop) {
    return !prop
      ? {
          name: this.name,
          age: this.age,
          weight: this.weight,
          gender: this.gender,
        }
      : this[prop];
  }

  greeting() {
    return "Hi";
  }
}
