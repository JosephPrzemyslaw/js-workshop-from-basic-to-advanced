// Dokonaj przemapowania nazw kolorów na odpowiedniki RGB. Posłuż się 5-10 przykładami z https://www.w3.org/wiki/CSS/Properties/color/keywords

// Przykład
// const orange = colors.get('orange'); // #ffa500


// rozwiązanie bez mapy
function getHexColor(color) {
    const colors = [{
        id: "orange",
        hex: "#ffa500",
    }, {
        id: "cleopatra",
        hex: "#007590",
    }, {
        id: "petrol",
        hex: "#0056FA",
    }, {
        id: "green",
        hex: "#008000",
    }];
    for (let i = 0; i < colors.length; i++) {
        if (colors[i].id === color) {
            return colors[i].hex;
        }
    }
}

const hex1 = getHexColor("cleopatra");
const hex2 = getHexColor("czarny");
const hex3 = getHexColor("orange");
const hex4 = getHexColor("petrol");

// rozwiązanie z mapą

const colors = new Map;
colors.set("orange", "#ffa500");
colors.set("cleopatra", "#007590");
colors.set("petrol", "#0056FA");
colors.set("green", {
    main: "#008000",
    shades: ["#3A5311", "#03C04A"],
});

const hex5 = colors.get("cleopatra");
const hex6 = colors.get("czarny");
const hex7 = colors.get("orange");
const hex8 = colors.get("green");

debugger


//---------------------------------------------------------
const someMap = new Map;
const agnes = {
    age: 40,
    name: "Agnes",
    city: "Szamotuły",
}

{
    const joseph = {
        age: 42,
        name: "Joseph",
        city: "Poznan",
    };

    someMap.set("joseph", joseph);
    someMap.set("agnes", agnes);
}

// nie ma josepha !
someMap.get("joseph"); // ?

//---------------------------------------------------------





