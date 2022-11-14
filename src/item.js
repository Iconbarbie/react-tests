import React from "react";

const Item = (props) => {
    return (
    <div>
        <h1>{props.itemData}</h1>
        <ul>
            {props.myNumbers.map((number, index) => {
                return <li key={index}>{number}</li>
            })}
        </ul>
    </div>
    );
};
    

export default Item;