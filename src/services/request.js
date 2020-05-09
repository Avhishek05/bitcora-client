import fetch from "node-fetch"
import _ from "lodash";

const request = async (url, method, apiHeader, body, contentType = "application/json;charset=UTF-8") => {
    // Default headers
    const headers = {
        "Content-Type": contentType
    };

    let options = {method: "", headers: {}};

    options.method = method;
    // options.timeout = 10000;

    // Combining headers
    options.headers = {
        ...headers,
        ...apiHeader
    };

    if (_.includes(["POST", "PUT", "DELETE"], method)) {
        options.body = JSON.stringify(body);
    }

    // Returns after adding request and kernel filteration
    if (navigator.onLine) {
        return fetch(url, options)
            .then(res => {
                console.log("response", res);
            })
            .catch((e) => {
                alert(e);
            });
    } else {
        alert("no internet connection");
        return;
    }
};

export default request;
