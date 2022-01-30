import React, { Component } from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
} from "reactstrap";

import "./IngredientDropdown.css";

class IngredientDropdown extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
    };
  }

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  };

  changeValue = (e) => {
    if (!this.props.selectedIngredient) {
      this.props.setIngredient(e.currentTarget.textContent);
    } else if (
      this.props.counter === 0 &&
      this.props.selectedIngredient === e.currentTarget.textContent
    ) {
      this.props.setIngredient("");
    }
  };

  render() {
    const { ingredients, selectedIngredient } = this.props;

    return (
      <div className="ingredient-dropdown">
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          {ingredients.some((e) => !e.main && e.name === selectedIngredient) ? (
            <DropdownToggle
              caret
              className="ingredient-dropdown-toggle selected"
            >
              {selectedIngredient}
            </DropdownToggle>
          ) : (
            <DropdownToggle caret className="ingredient-dropdown-toggle">
              Inne składniki
            </DropdownToggle>
          )}
          <DropdownMenu>
            {ingredients &&
              ingredients.map(
                (ingredient, key) =>
                  !ingredient.main && (
                    <DropdownItem onClick={this.changeValue} key={key}>
                      {ingredient.name}
                    </DropdownItem>
                  )
              )}
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
}

export default IngredientDropdown;
