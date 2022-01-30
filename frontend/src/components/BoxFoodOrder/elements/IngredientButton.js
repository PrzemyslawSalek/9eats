import React, { Component } from "react";

import "./IngredientButton.css";

class IngredientButton extends Component {
  onButtonClick = (e) => {
    if (!this.props.selectedIngredient) {
      this.props.setIngredient(e.currentTarget.textContent);
    } else if (
      this.props.counter === 0 &&
      this.props.selectedIngredient === e.currentTarget.textContent
    ) {
      this.props.setIngredient("");
    }
  };

  selectClass = () => {
    const { name, selectedIngredient } = this.props;

    return selectedIngredient === name
      ? "ingredient-button clicked"
      : "ingredient-button";
  };

  render() {
    const { name } = this.props;

    return (
      <div className={this.selectClass()} onClick={this.onButtonClick}>
        {name}
      </div>
    );
  }
}

export default IngredientButton;
