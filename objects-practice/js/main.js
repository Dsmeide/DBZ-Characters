// Come up with with a parent class
// Extend that parent class into two children
// Use Encapsulation, Abstraction, Inheritance, and Polymorphism 
class DBZCharacter {
    constructor(name,maxPowerLevel, role) {
        this._name = name;
        this.maxPowerLevel = maxPowerLevel;
        this._role = role;
    }
    get name() {
        return this._name;
    }
    get role() {
        return this._role;
    }
    powerUp() {
        console.log(`${this._name} is powering up to ${this.maxPowerLevel} `)
    }
}

let goku = new DBZCharacter('Goku', 9000);
//goku.powerUp();

class Hero extends DBZCharacter {
    constructor(name, maxPowerLevel, role, race) {
        super(name,maxPowerLevel,role);
        this._race = race;
    }
    get race() {
        return this._race;
    }
    powerUp() {
        console.log(`${this._name} is powering up to ${this.maxPowerLevel} to save the world because he's a ${this._role}`);
    }
}

let krillin = new Hero('Krillin', 4000, 'Hero', 'Human');
//krillin.powerUp();

class Villian extends DBZCharacter {
    constructor(name, maxPowerLevel, role, race) {
        super(name,maxPowerLevel,role);
        this._race = race;
    }
    get race() {
        return this._race;
    }
    powerUp() {
        console.log(`${this._name} is powering up to ${this.maxPowerLevel} to destroy the world because he's a ${this._role}`);
    }
}

let piccolo = new Villian('Piccolo', 8000, 'Villian', 'Namekian');
//piccolo.powerUp();

let characters = [goku,krillin,piccolo];
let iteration = 0
for(char of characters) {
    char.powerUp();
    iteration += 1;
    console.log(iteration);
}