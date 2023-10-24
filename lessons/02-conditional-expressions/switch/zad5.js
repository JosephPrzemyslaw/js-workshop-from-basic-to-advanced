// spring => Mar, Apr, May
// summer => Jun, Jul, Aug
// autumn -> Sep, Oct, Now
// winter => Dec, Jan, Feb

const month = 'March';
const cleanMonth = month.toLowerCase().replaceAll(' ','');//.slice(0,3);

let season;

switch (cleanMonth) {
    case 'mar':
    case 'apr':
    case 'may':
        season = 'Spring';
        break;
    case 'jun':
    case 'jul':
    case 'aug':
        season = 'Summer';
        break;
    case 'sep':
    case 'oct':
    case 'nov':
        season = 'Autumn';
        break;
    case 'dec':
    case 'jan':
    case 'feb':
        season = 'Winter';
        break;
    default: 
        console.error('Invalid month name');
    
}

if (season !== undefined) {
    console.log(`The season for ${cleanMonth} is ${season}` )
}