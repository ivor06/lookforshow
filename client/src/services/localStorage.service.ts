export {
    getToken,
    setToken
}

const localStorage = window.localStorage;

function getToken(): string {
    return localStorage ? localStorage.getItem("localToken") : null;
}

function setToken(token: string) {
    if (token !== null)
        localStorage.setItem("localToken", token);
    else
        localStorage.removeItem("localToken");
}
