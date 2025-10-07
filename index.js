// Day 1: Creating a pet object with properties and methods

const pet = {
    // Initial properties
    name: "Sparky",         // Pet's name
    species: "Dog",         // Pet's species
    happiness: 50,          // Starting happiness level

    // Method to play with the pet
    play: function() {
        this.happiness = Math.min(this.happiness + 10, 100);
        return `You played with ${this.name}! Happiness is now ${this.happiness}.`;
    },

    // Method to feed the pet
    feed: function() {
        this.happiness = Math.min(this.happiness + 20, 100);
        return `You fed ${this.name}! Happiness is now ${this.happiness}.`;
    },

    // Method to check the pet's current status
    status: function() {
        return `Pet Name: ${this.name}, Species: ${this.species}, Happiness: ${this.happiness}`;
    },

    // Bonus: Method to rename the pet
    rename: function(newName) {
        this.name = newName;
        return `Your pet's new name is ${this.name}!`;
    }
};

// --- Testing the pet object ---

// 1. Initial status
console.log(pet.status()); // Output: Pet Name: Sparky, Species: Dog, Happiness: 50

// 2. Play with the pet
console.log(pet.play());   // Output: You played with Sparky! Happiness is now 60

// 3. Updated status after feeding
console.log(pet.feed());   // Output: You fed Sparky! Happiness is now 80
console.log(pet.status()); // Output: Pet Name: Sparky, Species: Dog, Happiness: 80

// 4. Bonus: Rename the pet
console.log(pet.rename("Holly")); // Output: Your pet's new name is Holly!
console.log(pet.status());         // Output: Pet Name: Sparky, Species: Dog, Happiness: 80