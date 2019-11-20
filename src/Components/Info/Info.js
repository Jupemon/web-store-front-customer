import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

const Info = (props) => {
    return (    
    <div className={"cart-modal"}>
    <div className="cart-back">
        <div className="cart-title">
            <i className="fas fa-user fa-3x"></i>
            <h1 className="cart-title">Product Info</h1>
            <Button variant="danger" onClick={()=> props.toggleModal("")}>X</Button>
        </div>
        <div className="cart-items">
        Hello world
        </div>
       
                
    </div>
</div> );
}
 
export default Info;