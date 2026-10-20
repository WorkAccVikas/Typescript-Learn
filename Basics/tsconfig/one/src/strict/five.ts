// TOPIC: strictFunctionTypes
type StringOrNumberHandler = (value: string | number) => void;

function handleString(value: string): void {
  console.log(value.toUpperCase());
}

const handler: StringOrNumberHandler = handleString;

handler(100);

// ================================================

class Animal {
  constructor(public name: string) {}
}

class Dog extends Animal {
  bark() {
    console.log('Woof!');
  }
}

type AnimalHandler = (animal: Animal) => void;
type DogHandler = (dog: Dog) => void;

const handleAnimal: AnimalHandler = (animal) => {
  console.log(animal.name);
};

const handleDog: DogHandler = (dog) => {
  dog.bark();
};

const dogHandler: DogHandler = handleAnimal;
const animalHandler: AnimalHandler = handleDog;

// =====================================================
interface StrictComparer<T> {
  compare: (a: T, b: T) => number;
}

interface MethodComparer<T> {
  compare(a: T, b: T): number;
}

declare const animalComparer: StrictComparer<Animal>;
declare const dogComparer: StrictComparer<Dog>;

const a: StrictComparer<Animal> = dogComparer;
// ❌ Error: a Dog-only comparer cannot compare every Animal.

const b: StrictComparer<Dog> = animalComparer;
// ✅ Safe.

const animalComparer1: MethodComparer<Animal> = {
  compare(a, b) {
    return a.name.localeCompare(b.name);
  },
};

const dogComparer1: MethodComparer<Dog> = animalComparer;

const dogs = [new Dog('Rocky'), new Dog('Bruno'), new Dog('Charlie')];

const dogOnlyComparer: MethodComparer<Dog> = {
  compare(a, b) {
    return a.name.localeCompare(b.name);
  },
};

// Allowed by TypeScript because method parameters are bivariant
const animalComparer2: MethodComparer<Animal> = dogOnlyComparer;

const strictDogComparer: StrictComparer<Dog> = {
  compare: (a, b) => a.name.localeCompare(b.name),
};

// ❌ Error with strictFunctionTypes: true
const strictAnimalComparer: StrictComparer<Animal> = strictDogComparer;

const nonStrictDogComparer: MethodComparer<Dog> = {
  compare: (a, b) => a.name.localeCompare(b.name),
};

const nonStrictAnimalComparer: MethodComparer<Animal> = nonStrictDogComparer;

export {};
