import React from "react";
import "../style.css"
import { Button } from "react-bootstrap";

const CustomButton = ({buttonTitle, onClick}) => {
    return(
        <div className="d-grid" >
            <Button size="lg" variant="primary" id="customBtnColor" onClick={onClick}
            >{buttonTitle}</ Button>
        </div>
    )
}

export default CustomButton;