const isTouchScreen = "ontouchstart" in window || "onmsgesturechange" in window;
const isUseExtension =
    "functionsetInterval(){[nativecode]}" != setInterval.toString().replace(/( |\n)/g, "") ||
    "functionsetTimeout(){[nativecode]}" != setTimeout.toString().replace(/( |\n)/g, "") ||
    "functionopen(){[nativecode]}" != window.open.toString().replace(/( |\n)/g, "") ||
    "functionfetch(){[nativecode]}" != fetch.toString().replace(/( |\n)/g, "");
function getParameterByName(name = null, url = window.location.href) {
    if (!url || !name) return null;
    name = name.replace(/[\[\]]/g, "$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
    var results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
function loadScript(url = null) {
    return new Promise((resolve) => {
        if (!url) return resolve(false);
        var script = document.createElement("script");
        script.src = url;
        script.onload = () => {
            resolve(true);
        };
        script.onerror = () => {
            resolve(false);
        };
        return document.head.appendChild(script);
    });
}
function ping(name = null, params = {}) {
    if (!name) return;
    var url = "https://hello.idocdn.com:3016/" + name + ".jpg";
    url += "?" + new URLSearchParams(params).toString();
    var createElm = document.createElement("img");
    createElm.src = url;
    createElm.style.display = "none";
    document.body.appendChild(createElm);
    createElm.onerror = () => createElm.remove();
    createElm.onload = () => createElm.remove();
}
