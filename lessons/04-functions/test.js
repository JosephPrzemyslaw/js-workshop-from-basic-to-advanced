
function sum(a, b, c) {
    return a + b + c;
}

const result = sum(10, 20, 30);

function sendMail(recipients, cc, bcc, title, text, html, attachments, priority, copy, smtp, imap, portSmtp, portImap) {
    //...
}

sendMail(["marek@onet.pl", "klauida@interia.pl", "zbyszek@google.com"], ["boss@company.pl"], null, "Jakis tytuł", "To jest wiadomosc", null, null, null, null, "imap...", null, 7889);

function sendMail({
    recipients, cc = [], bcc = [],
    title, text, html =  null,
    attachments = [], priority = "low", copy= false,
    smtp, imap,
    portSmtp = 1234, portImap = 1213}
) {
    //...
}

sendMail({
    cc: ["boss@company.pl"],
    recipients: ["marek@onet.pl", "klauida@interia.pl", "zbyszek@google.com"],
    title: "Jakis tytuł",
    text: "To jest wiadomość",
    imap: "imap...",
    portImap: 7889,
});

function sumEl(...numbers) {
    // numbers is an array
    let sum = 0;
    for(let i = 0; i < numbers.length; i ++) {
        const curEl = numbers[i];
        sum = sum + curEl; 
    }

    return sum;
}

const sumResult = sumEl(10, 20, 90, -90, -90, 3.14);
console.log(sumResult);