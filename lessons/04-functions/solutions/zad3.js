/**
 * Symuluje losowy rzut monetą. Funkcja losuje równomiernie, z jednakowym rozkładem prawdopodobieństwa
 * 
 * @return {string} 'head' lub 'tail'
 */
function getHeadOrTail() {
    return Math.random() > 0.5 ? "Head" : "Tail";
}

function showGeneratorStatistics(throwNo) {
    let head = 0;
    for (let i = 0; i < throwNo; i ++) {
        const result = getHeadOrTail();
	    if (result === "Head") {
            head++;
        }
    }
    console.log(`Orzeł ${head} Reszka ${throwNo - head}`);
}

function showWholeStatistics() {
    const count = 8;
    for(let i = 1; i <= count; i++) {
        showGeneratorStatistics(10 ** i);
    }
}

showWholeStatistics();