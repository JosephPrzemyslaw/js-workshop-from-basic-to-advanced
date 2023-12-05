function sendMail({to, from, cc = null, bcc = null, topic, attachments, priority, format, imapPort = 993, smtpPort = 465}) {
    console.log(to, from, cc, bcc, topic, attachments, priority, format, imapPort, smtpPort)
    //...
}

sendMail({
    attachments: "./image.jpg",
    to: "john@test.pl",
    topic: "cake",
    format: "html",
    priority: 1,
    from: "alice@test.pl"
});