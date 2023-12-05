//
// dla k = 5
//
// 1	1	1	1	1
// 2	4	8	16	32
// 3	9	27	81	243
// 4	16	64	256	1024
// 5	25	125	625	3125
//

const k = 10;
for (let i = 1; i <= k; i++) {
    let tempResult = "";
    for (let j = 1; j <= 5; j++) {
        tempResult = `${tempResult}${i ** j}\t`;
    }
    console.debug(tempResult);
}
