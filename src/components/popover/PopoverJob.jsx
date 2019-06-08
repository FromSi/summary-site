import React from "react";
import {Icon, Popover, List} from "antd";
import {TitleJobLayout, ContentJobLayout, IconJob} from "./style";
import {Chip} from "../component/module";

/* Всплывающая карточка с подробными данными о работе */
class PopoverJob extends React.Component {
  render() {

    // Данные для листа с информацией
    const data = [
      {icon: "security-scan", text: "Ищу работу", color: "#9575CD"},
      {icon: "control", text: "Полная занятость", color: "#7986CB"},
      {icon: "clock-circle", text: "Полный день", color: "#1E88E5"},
      {icon: "home", text: "Офис", color: "#0288D1"}
    ];

    // Заголовок карточки
    const title = (
      <TitleJobLayout>
        <h1>Работа</h1>
        <Chip index={0} />
        <Chip index={1} />
      </TitleJobLayout>
    );

    // Скелет для листа
    const content = (
      <ContentJobLayout
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <Icon theme="filled" type={item.icon} style={{color: item.color}} />
            <p>{item.text}</p>
          </List.Item>
        )}
      />
    );

    return (
      <Popover
        placement="rightTop"
        content={content}
        title={title}
        trigger="hover"
      >
        <IconJob
          type="wallet"
          theme="filled"
          style={{color: "#9575CD"}}
        />
      </Popover>
    );
  }
}

export default PopoverJob;
