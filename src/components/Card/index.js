import React from "react";
import "./style.css";
import CardBtn from "../CardBtn"

function Card(props) {
    return (

    <div
      className="card col-md-6"
    //   style="padding: 1em;"
    >
      <CardBtn
        onClick={props.handleBtnClick}
        data-value="pass"
      />
      <CardBtn
        onClick={props.handleBtnClick}
        data-value="pick"
      />
    </div>
    )
};

export default Card;