async function queryServers(serverName, q) {
    const url = `/${serverName}?q=${q}`;
    const savedUrl = `/${serverName}_backup?q=${q}`;
    const first = getJSON(url);
    const second = getJSON(savedUrl);
    const res = await Promise.race([first, second]);
    return res;
}
async function gougleSearch(q) {
    const timeout = new Promise((_, reject) =>
        setTimeout(() => reject(new Error('timeout')), 80)
    );
    const web = queryServers('web', q);
    const image = queryServers('image', q);
    const video = queryServers('video', q);
    try {
        const res = await Promise.race([timeout, Promise.all([web, image, video])]);
        return {
            web: res[0],
            image: res[1],
            video: res[2],
        };
    } catch (error) {
        throw error;
    }
}
// let getJSON = async (url) => {
//     return new Promise(resolve => setTimeout(() => resolve(url), Math.random() * 100));
// };

// gougleSearch('hello+world').then(console.log).catch(console.error);
