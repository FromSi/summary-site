import React from "react";
import {
  LanguageColor,
  LanguageText,
  LanguageLayout,
  LanguageIcon
} from "./style";

/**
 * Показ языка программирования, как в GitHub.
 */
class Language extends React.Component {

  /**
   * Создание значка форка.
   * @param {Boolean} fork значение на истину форка репозитория.
   */
  createFork(fork) {

    /**
     * Рандомный цвет для значка форка.
     */
    function getRandomColor() {
      var letters = "0123456789ABCDE";
      var color = "#";
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }

    if (fork) {
      return <LanguageIcon type="fork" style={{color: getRandomColor()}} />;
    }
  }

  render() {
    return (
      <LanguageLayout>
        <LanguageText>{this.props.name}</LanguageText>
        <LanguageColor background={this.props.color} />
        {this.createFork(this.props.fork)}
      </LanguageLayout>
    );
  }
}

export default Language;
