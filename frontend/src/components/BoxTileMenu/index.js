import React, { Component } from "react";
import SquareElement from "./elements/SquareElement";

import FoodPhoto from "../../images/food.jpeg";
import TodoListPhoto from "../../images/todo-list.png";

import "./BoxTileMenu.css";

class BoxTileMenu extends Component {
  render() {
    return (
      <div className="box-tile-menu">
        <SquareElement
          title="Jedzonko"
          path="/food-order"
          imageSrc={FoodPhoto}
        />
        <SquareElement title="To-do" path="/todo" imageSrc={TodoListPhoto} />
      </div>
    );
  }
}

export default BoxTileMenu;
