import { React } from "react";

import { useParams } from "react-router-dom";

export default function Home(){
    const {username}=useParams(); // recuperer username a partir de l'url 
    return <h1>Welcome {username} to Home page </h1>
}