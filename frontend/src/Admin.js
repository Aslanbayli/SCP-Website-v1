import React from 'react';
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import AdminPractice from "./Adminpractice";

function Admin() {
    const logedIn = Cookies.get("LogedIn");
    const priviledge = Cookies.get("priviledge");
    const nav = useNavigate();
    console.log(logedIn);
    console.log(priviledge);


    if (logedIn !== 'success' || logedIn === null) {
        nav("/sign-in");
    } 
   
    if (priviledge === "admin") {
        return (
            <AdminPractice/>
        );
    } else {
        alert("You must be an admin");
    }
   

  
}


export default Admin;