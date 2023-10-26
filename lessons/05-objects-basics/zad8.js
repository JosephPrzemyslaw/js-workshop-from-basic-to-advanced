// Treść zadania zmieniona

// Stwórz pojedynczy prostopadloscian
const cuboid1 = {
    a: 10,
    b: 20,
    c: 30,
    getVolume() {
        return this.a * this.b * this.c;
    },
    getPerimeter() {
        return 4 * (this.a + this.b + this.c);
    },
    getDescription() {
        return {
            a: this.a,
            b: this.b,
            c: this.c,
            vol: this.getVolume(),
            per: this.getPerimeter(),
        };
    }
};

// IIFE Immediately Invoked Function Expression
// funkcja od razu sama siebie wywołuje
// (function startApp() {
//     //...
// })();

// startApp();

debugger;
const figureVolume1 = cuboid1.getVolume();
const figurePerimeter1 = cuboid1.getPerimeter();

// stworz fabryke tworzaca prostopadlosciany
function createCuboid(sideA, sideB, sideC) {
    return {
        a: sideA,
        b: sideB,
        c: sideC,
        volume() {
            return this.a * this.b * this.c;
        },
        perimeter() {
            return 4 * (this.a + this.b + this.c);
        }
    }
}

const cuboid2 = createCuboid(10, 123, 890);
const cuboid3 = createCuboid(100, 1, 890);

// wyprodukuj 1_000_000 prostopadloscianow
const cuboidNo = 1_000_000;
const cuboidArr = [];
for(let i = 1; i <= cuboidNo; i = i + 1) {
    const cuboid = createCuboid(i, 2 * i, 3 * i);
    cuboidArr[i] = cuboid;
}

debugger;