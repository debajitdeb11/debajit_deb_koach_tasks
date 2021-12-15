import React from "react";
import { isAuthenticated } from "./authentication"
const Welcome = () => {

    const {
        user: {
            email,
        } 
    } = isAuthenticated();

    return (
        <div>
            <h1>Welcome!!!</h1>
            <h2>{email}</h2>
        </div>
    )
}

export default Welcome;