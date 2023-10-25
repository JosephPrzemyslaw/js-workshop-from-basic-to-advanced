// random => <0, 1)
// <0; 0.5) => head
// <0.5; 1.0) => tail

/**
 * Symuluje losowy rzut monetą. Funkcja losuje równomiernie, z jednakowym rozkładem prawdopodobieństwa
 * 
 * @return {string} 'head' lub 'tail'
 */
function getHeadOrTail() {
    const random = Math.random();
    if (random < 0.5) {
        return "head";
    } else {
        return "tail";
    }
}

function getHeadOrTail() {
    const random = Math.random();
    if (random < 0.5) {
        return "head";
    }
    return "tail";
}

function getHeadOrTail() {
    const random = Math.random();
    const result = random < 0.5 ? "head" : "tail";

    return result;
}

function getHeadOrTail() {
    const result = Math.random() < 0.5 ? "head" : "tail";

    return result;
}

function getHeadOrTail() {
    return Math.random() < 0.5 ? "head" : "tail";
}

function displayHeadOrTailStatistics(size) {
    function getHeadOrTail() {
        return Math.random() < 0.5 ? "head" : "tail";
    }

    let headNo = 0;
    for (let i = 0; i < size; i++) { // i = i + 1
        const headOrTail = getHeadOrTail();
        if (headOrTail === "head") {
            headNo = headNo + 1;
        }
    }
    console.log(`Orzeł/reszka: ${headNo}/${size - headNo}`);
}

function generateWholeStatistics() {
    const expNo = 10;
    for (let i = 0; i < expNo; i++) {
        displayHeadOrTailStatistics(10 ** i);
    }
}

generateWholeStatistics();
