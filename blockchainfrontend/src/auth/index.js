import {API} from "../backend";
// API means : http://localhost:3006/
import axios from "axios";

export async function signup()  {
    try {
        const response =  await axios.post('http://localhost:3006/register');
            
        
        return  response.data;
    } catch (err) {
        return console.log(err);
    }


};

export  async function signin()  {
    try {
        const response =  await axios.post(`http://localhost:3006/login`);
            
        
        return  response.data;
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

