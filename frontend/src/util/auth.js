import { redirect } from "react-router-dom";

// this will extract the token which is stored in the browser  
export function getAuthToken() {
    const token = localStorage.getItem('token');
    return token;
}

export function tokenLoader() {
    return getAuthToken();
}


export function checkAuthLoader() {
    const token = getAuthToken();

    if(!token) {
        return redirect('/auth')
    }

    return null;
}