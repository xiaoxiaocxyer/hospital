const TOKEN_KEY="token"
const ACTIVE_PATH="active_key"
export function getToken(){
    return sessionStorage.getItem(TOKEN_KEY);
}

export function setToken(token){
    sessionStorage.setItem(TOKEN_KEY,token);
}

export function clearToken(){
    sessionStorage.clear();
}
export function getActivePath(){
    return sessionStorage.getItem(ACTIVE_PATH);
}

export function setActivePath(path){
    sessionStorage.setItem(ACTIVE_PATH, path);
}