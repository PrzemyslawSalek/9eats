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
      selectValue: "",
    };
  }

  handleDropdownChange = (e) => {
    this.setState({ selectValue: e.target.value });
  };

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  };

  changeValue = (e) => {
    if (!this.props.selectedIngredient && !this.state.selectValue) {
      this.setState({ selectValue: e.currentTarget.textContent });
      this.props.setIngredient(e.currentTarget.textContent);
    } else if (this.props.selectedIngredient === e.currentTarget.textContent) {
      this.setState({ selectValue: "" });
      this.props.setIngredient("");
    }
  };

  render() {
    const { selectValue } = this.state;
    const { ingredients } = this.props;

    return (
      <div className="ingredient-dropdown">
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          {selectValue ? (
            <DropdownToggle
              caret
              className="ingredient-dropdown-toggle selected"
            >
              {selectValue}
            </DropdownToggle>
          ) : (
            <DropdownToggle caret className="ingredient-dropdown-toggle">
              Inne składniki
            </DropdownToggle>
          )}
          <DropdownMenu>
            {ingredients &&
              ingredients.map((ingredient, key) => (
                <DropdownItem onClick={this.changeValue} key={key}>
                  {ingredient.name}
                </DropdownItem>
              ))}
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
}

export default IngredientDropdown;
