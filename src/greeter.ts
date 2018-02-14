console.log('greete.js running ...');

class Student {
    fullName: string;
    constructor(
        public firstName: string,
        public middleInitial: string,
        public lastName: string
    ) {
        this.fullName = `${firstName} ${middleInitial} ${lastName}`
    }
}

interface Person {
    firstName: string;
    lastName: string;
    fullName: string;
}

function greeter(person: Person) {
    return `Hello, ${person.fullName}`
}
console.log('greeter func defined');


let user = new Student("Jane", "M","User");
let message = greeter(user)
console.log(message)
