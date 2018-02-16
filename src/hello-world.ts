console.log("hello-world.js running ... this means typescript should be basically set up.");

interface Person {
    readonly firstName: string;
    readonly lastName: string;
    readonly middleInitial: string;
}

function greeter(person: Person): String {
    const fullName = getFullName(person);
    return `Hello, ${fullName}`;
}

function getFullName(person: Person): string {
    return `${person.firstName} ${person.middleInitial} ${person.lastName}`;
}

const user: Person = {firstName: "Jane", middleInitial: "M", lastName: "User"};
const message = greeter(user);
console.log(message);
