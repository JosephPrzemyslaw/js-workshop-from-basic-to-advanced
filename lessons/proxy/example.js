
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // present() {
    //     console.log(`My name is ${this.name} and I am ${this.age}`);
    // }
}

const handler = {
    get(obj, prop) {
        if (prop === "present") {
            console.log(`My name is ${obj.name} and I am ${obj.age}`);
        } else {
            return obj[prop];
        }
    }
}

const joseph = new Person("Joseph", 42);
const josephProxy = new Proxy(joseph, handler);

console.log(josephProxy.name);
console.log(josephProxy.age);
josephProxy.present;

debugger