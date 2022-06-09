import {API} from "../backend";
// API means : http://localhost:3006/

export const signup =  user => {
    try {
        const response =  fetch(`${API}register`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });
        return  response.json();
    } catch (err) {
        return console.log(err);
    }


};

export const signin =  user => {
    try {
        const response = fetch(`${API}login`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });
        return  response.json();
    } catch (err) {
        return console.log(err);
    }


};

export const authenticate = (data, next) => {
    if (typeof window !=="undefined"){
        localStorage.setItem("jwt", JSON.stringify(data))
        next();
    }
};


export const signout =  next => {
    if (typeof window !=="undefined")
        localStorage.removeItem("jwt")
        next();

        try {
        const response =  fetch(`${API}signout`, {
            method: "GET"
        });
        return console.log("signout sucess");
    } catch (err) {
        return console.log(err);
    }
    }


export const isAuthenticated = () => {
    if (typeof window == "undefined") {
       return false
    }
     if (localStorage.getItem("jwt"))  {
         return JSON.parse(localStorage.getItem("jwt"));
     }else {
         return false;
     }
    
    
};

