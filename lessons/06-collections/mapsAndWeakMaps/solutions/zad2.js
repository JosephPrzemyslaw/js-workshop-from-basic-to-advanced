//
// basic example
//
const headerBasicMap = new Map;
headerBasicMap.set("Accept", "Media type(s) that is/are acceptable for the response. See Content negotiation.");
headerBasicMap.set("Accept-Language", "List of acceptable human languages for response. See Content negotiation.");
headerBasicMap.set("Connection", "Control options for the current connection and list of hop-by-hop request fields.[13] Must not be used with HTTP/2.[14]");
headerBasicMap.set("Content-Encoding", "The type of encoding used on the data. See HTTP compression.");

const connectionDescription = headerBasicMap.get("Connection");

//
// more complicated example
//
const headerRichMap = new Map;
headerRichMap.set("Accept", {
    description: "Media type(s) that is/are acceptable for the response. See Content negotiation.",
    example: "Content-Encoding: gzip",
    permanent: "Permanent",
    standard: "RFC 9110",
});
// ...

const acceptData = headerRichMap.get("Accept");

console.log(acceptData.example);