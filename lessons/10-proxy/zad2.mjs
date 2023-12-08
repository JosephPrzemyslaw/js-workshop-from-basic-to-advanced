//
// Napisz "proxy", które wykorzystasz do cachownia wyników zwróconych przez serwer
//

// const resultA = fetchProxy("http://server.com/a");
// const resultB = fetchProxy("http://server.com/a/b");
// const resultC = fetchProxy("http://server.com/movies");
// const resultD = fetchProxy("http://server.com/a");

//
// Solution, method A
//
class FetchProxy {
    constructor() {
        this.cache = new Map;
    }
    async get(url) {
        if (this.cache.has(url)) {
            return this.cache.get(url);
        }
        const response = await fetch(url);
        const data = await response.json();
        this.cache.set(url, data);

        return data;
    }
}

const fetchClassProxy = new FetchProxy();
const resp1 = await fetchClassProxy.get("https://jsystems.free.beeceptor.com/movies");
const resp2 = await fetchClassProxy.get("https://jsystems.free.beeceptor.com/movies");

//
// Solution, method B
//
function getFetchProxy() {
    const cache = new Map;

    return async function (url) {
        if (cache.has(url)) {
            return cache.get(url);
        }
        const response = await fetch(url);
        const data = await response.json();
        cache.set(url, data);

        return data;
    }
}
const fetchFunProxy = getFetchProxy();
const resp3 = await fetchFunProxy("https://jsystems.free.beeceptor.com/movies");
const resp4 = await fetchFunProxy("https://jsystems.free.beeceptor.com/users");
const resp5 = await fetchFunProxy("https://jsystems.free.beeceptor.com/movies");
