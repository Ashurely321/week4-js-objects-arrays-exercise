// Pet factory function (with randomness and mood logic) that returns a pet object with methods
function createPet(name, species) {
  //Each species has a different tiredness rate
  const tirednessRate = {
    Dog: 5,
    Cat: 3,
    Fish: 1
  };

  return {
    name,
    species,
    happiness: 50,
    energy: 50,

    // Feed method with randomized happiness boost and energy drain
    feed() {
      const happinessBoost = Math.floor(Math.random() * 11) + 5; // 5–15
      const energyDrain = tirednessRate[this.species]; // species-based tiredness
      this.happiness += happinessBoost;
      this.energy -= energyDrain;
      console.log(
        `Feeding ${this.name}! Happiness +${happinessBoost}, Energy -${energyDrain}`
      );
    },

    //Mood swing method that decreases happiness
    bored() {
      const moodDrop = Math.floor(Math.random() * 6) + 5; //5-10
      this.happiness -= moodDrop;
      console.log(`${this.name} is bored... Happiness -${moodDrop}`);
    },

    //Method to log the pet's current status
    status() {
      console.log(
        `${this.name} the ${this.species} - Happiness: ${this.happiness}, Energy: ${this.energy}`
      );
    },
  };
}

//Create three separate kennels (arrays) for each species
const dogKennel = [
  createPet("Luna", "Dog"),
  createPet("Max", "Dog"),
  createPet("Bella", "Dog"),
  createPet("Charlie", "Dog"),
  createPet("Cooper", "Dog"),
];

const catKennel = [
  createPet("Whiskers", "Cat"),
  createPet("Ginger", "Cat"),
  createPet("Tommy", "Cat"),
  createPet("Simba", "Cat"),
  createPet("Oliver", "Cat"),
];

const fishTank = [
  createPet("Goldie", "Fish"),
  createPet("Bubbles", "Fish"),
  createPet("Finley", "Fish"),
  createPet("Splash", "Fish"),
  createPet("Magikarp", "Fish"),
];

//Feed all the pets using .forEach
dogKennel.forEach((pet) => pet.feed());
catKennel.forEach((pet) => pet.feed());
fishTank.forEach((pet) => pet.feed());

//Randomly bore one pet from each group
dogKennel[2].bored(); //Bella
catKennel[1].bored(); //Ginger
fishTank[4].bored(); //Magikarp

//Output final status of all the pets using .forEach()
console.log("\nDog Kennel Status:");
dogKennel.forEach((pet) => pet.status());

console.log("\nCat Kennel Status:");
catKennel.forEach((pet) => pet.status());

console.log("\nFish Tank Status:");
fishTank.forEach((pet) => pet.status());
