import React from "react";
import {Icon} from "antd";
import {ChipLayout} from "./style";

/* Чип как в material design.
   Ссылка на пример от material design:
   https://material.io/design/components/chips.html
*/
class Chip extends React.Component {
  render() {

    // Данные для чипов
    const data = [
      {
        background: "#E0F2F1",
        icon: "android",
        color: "#009688",
        name: "Android"
      },
      {background: "#EDE7F6", icon: "api", color: "#673AB7", name: "Back-end"}
    ];

    return (
      <ChipLayout
        background={data[this.props.index].background}
        color={data[this.props.index].color}
      >
        <Icon
          type={data[this.props.index].icon}
          theme="filled"
          style={{ fontSize: "12px", color: data[this.props.index].color}}
        />
        <p>{data[this.props.index].name}</p>
      </ChipLayout>
    );
  }
}

export default Chip;
