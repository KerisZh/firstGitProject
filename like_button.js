import React, {Component} from "react";
import ReactDom, {render} from "react-dom";

function LikeButton(props){
    return <h1>Hello World</h1>
}

const domContainer = document.querySelector('#like_button_container');
ReactDom.render(<LikeButton/>, domContainer);