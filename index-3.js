//Day 3 assignment: Managing your pet kennel with JS arrays

//Factory function to create pet onject
function createPet(name, species, energy, happiness) {
  const maxEnergy = Math.floor(Math.random() * 50) + 50; //Each pet random max energy between 50 and 100

  return {
    name,
    species,
    energy,
    happiness,
    maxEnergy,

    //Method to display current status
    status() {
      console.log(
        `${this.name} the ${this.species} | Energy: ${this.energy} | Happiness: ${this.happiness}`
      );
    },

    //Method to feed the pet
    feed() {
      if (this.energy < this.maxEnergy) {
        this.energy += 10;
        if (this.energy > this.maxEnergy) this.energy = this.maxEnergy;
        console.log(`${this.name} has been fed. Energy is now ${this.energy}.`);
      } else {
        console.log(`${this.name} is already fully energized!`);
      }
    },

    //Method to play with the pet
    play() {
      if (this.energy >= 10) {
        this.energy -= 10;
        this.happiness += 5;
        console.log(
          `${this.name} played and is now happier! Happiness: ${this.happiness}, Energy: ${this.energy}`
        );
      } else {
        console.log(`${this.name} is too tired to play`);
      }
    },

    //Bonus method: rest to regain energy
    rest() {
      this.energy += 15;
      if (this.energy > this.maxEnergy) this.energy = this.maxEnergy;
      this.happiness -= 2; //Resting is no fun!
      if (this.happiness < 0) this.happiness = 0;
      console.log(
        `${this.name} has rested. Energy: ${this.energy}, Happiness: ${this.happiness}`
      );
    },
  };
}

//Lets make more pets!
const pet1 = createPet("Growlithe", "Dog", 60, 80);
const pet2 = createPet("Meowth", "Cat", 50, 70);
const pet3 = createPet("Goldeen", "Fish", 40, 50);
const pet4 = createPet("Sobble", "Lizard", 30, 60);
const pet5 = createPet("Lopunny", "Rabbit", 45, 75);
const pet6 = createPet("Furret", "Ferret", 55, 65);

//Initializr the kennel array
let kennel = [];

//Add the pets using push
kennel.push(pet1);
kennel.push(pet2);
kennel.push(pet3);
kennel.push(pet4);
kennel.push(pet5);

//Add remaining pet using bracket notation
kennel[kennel.length] = pet6;

//Display kennel contents using console.table for clarity
console.table(
  kennel.map((pet) => ({
    Name: pet.name,
    Species: pet.species,
    Energy: pet.energy,
    Happiness: pet.happiness,
    MaxEnergy: pet.maxEnergy,
  }))
);

//Bonus Task: Make each pet rest using forEach
kennel.forEach((pet) => pet.rest());

//Display the updated kennel status
// Display the updated kennel status
console.table(
  kennel.map((pet) => ({
    Name: pet.name,
    Species: pet.species,
    Energy: pet.energy,
    Happiness: pet.happiness,
    MaxEnergy: pet.maxEnergy,
  }))
);
