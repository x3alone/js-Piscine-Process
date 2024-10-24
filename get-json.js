async function getJSON(path, params = {}) {
    let url = path + "?";
    for (let [key, value] of Object.entries(params)) {
        url += key + "=";  

        if (typeof value === "string") {
            value.split(" ").forEach((element) => (url += element + "+"));
            url = url.slice(0, -1) + "&";
        } else {
            url += value + "&";
        }
    }

    try {
        let res = await fetch(url.slice(0, -1)); 
        let json = await res.json();
        if (!res.ok) {
            throw new Error(res.statusText);
        }
        if (json.error) {
            throw new Error(json.error);
        }
        return json.data;
    } catch (err) {
        throw err;  
    }
}
