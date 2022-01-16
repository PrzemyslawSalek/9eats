import React, { Component } from "react";

import "./IngredientButton.css";

class IngredientButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      selectValue: "",
    };
  }

  onButtonClick = (e) => {
    if (!this.props.selectedIngredient) {
      this.setState({
        clicked: !this.state.clicked,
        selectValue: e.currentTarget.textContent,
      });
      this.props.setIngredient(e.currentTarget.textContent);
    } else if (this.props.selectedIngredient === e.currentTarget.textContent) {
      this.setState({
        clicked: !this.state.clicked,
        selectValue: "",
      });
      this.props.setIngredient("");
    }
  };

  selectClass = () => {
    return this.state.clicked
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
