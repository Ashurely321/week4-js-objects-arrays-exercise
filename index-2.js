// Factory Function: createPet
// This function returns a new pet object with properties and methods

function createPet(name, species) {
  //Initialize pet object with default happiness and energy
  let pet = {
    name: name,
    species: species,
    happiness: 50,
    energy: 100,

    //Method: play
    //Decrease energy by 20, increase happiness by 10
    play: function () {
      this.energy -= 20;
      this.happiness += 10;
      return `You played with ${this.name}! Happiness is now ${this.happiness}, Energy is now ${this.energy}.`;
    },

    // Method: feed
    // Increases both happiness and energy by 20
    feed: function () {
      this.happiness += 20;
      this.energy += 20;
      return `You fed ${this.name}! Happiness is now ${this.happiness}, Energy is now ${this.energy}.`;
    },

    // Method :status
    // Logs current pet status
    status: function () {
      console.log(
        `Pet Name: ${this.name}, Species: ${this.species}, Happiness: ${this.happiness}, Energy: ${this.energy}`
      );
    },

    // Bonus Method : rest
    // Fully restores energy to 100
    rest: function () {
      this.energy = 100;
      return `${this.name} has rested. Energy is now fully restored to 100!`;
    },
  };

  // Return the pet object
  return pet;
}

//---Testing Section---

//Create multiple pets
let pet1 = createPet("Goober", "Dog");
let pet2 = createPet("Fido", "Dog");
let pet3 = createPet("Slinky", "Cat");

//Test pet1 interactions
pet1.status(); // Initial status
console.log(pet1.play()); //Playing interaction
pet1.status(); // Status after playing
console.log(pet1.feed()); // Feeding interaction
pet1.status(); // Status after being fed
console.log(pet1.rest()); //Bonus: rest interaction
pet1.status(); //Final status

//Test other pets
pet2.status();
pet3.status();
