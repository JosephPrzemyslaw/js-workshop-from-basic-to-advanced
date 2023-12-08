
class Person {
    constructor(name, age, phone) {
        this.name = name;
        this.age = age;
        this.phone = phone;
    }
}

// const p1 = new Person("John", 40, "123123123");
// const p2 = new Person("Agnes", "30", "+48-321321321");
// const p3 = new Person("Agnes", "300", 021321321);

class ProxyPerson {
    constructor(name, age, phone) {
        this.person = new Person();
        this.setName(name);
        this.setAge(age);
        this.setPhone(phone);
    }
    setName(newName) {
        this.person.name = newName;
    }
    setAge(newAge) {
        const parsedNewAge = parseInt(newAge);
        if (parsedNewAge >= 1 && parsedNewAge <= 130) {
            this.person.age = parsedNewAge;
        } else {
            console.error("Wrong age, fix it");
        }
    }
    getAge() {
        return this.person.age;
    }
    setPhone(newPhone) {
        if (/^[0-9]{9}$/.test(newPhone)) {
            this.person.phone = newPhone;
        } else {
            console.error("Wrong phone, fix it");
        }
    }
    getPhone() {
        return this.person.phone;
    }
}

const p1 = new ProxyPerson("John", 40, "123456789");
const p2 = new ProxyPerson("John", "sdfds", 023456789);

