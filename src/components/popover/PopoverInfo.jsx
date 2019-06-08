import React from "react";
import {Icon, Popover, List} from "antd";
import {TitleInfoLayout, ContentInfoLayout} from "./style";

/* Всплывающая карточка с подробными данными персональной информации */
class PopoverInfo extends React.Component {
  render() {

    // Данные для листа с информацией
    const data = [
      {
        first: "За",
        last: "open-surce",
        color: "#EF5350",
        icon: "branches"
      },
      {
        first: "Люблю",
        last: "творить",
        color: "#EC407A",
        icon: "radius-setting"
      },
      {
        first: "Занимаюсь",
        last: "программированием",
        color: "#AB47BC",
        icon: "cluster"
      },
      {
        first: "Английский",
        last: "слабоватый",
        color: "#9575CD",
        icon: "message"
      },
      {
        first: "Критичен к",
        last: "другим",
        color: "#7986CB",
        icon: "notification"
      },
      {first: "Не", last: "пью", color: "#0288D1", icon: "pushpin"},
      {first: "Не", last: "курю", color: "#0097A7", icon: "pushpin"},
      {
        first: "Еще",
        last: "экстраверт",
        color: "#00796B",
        icon: "smile"
      }
    ];

    // Заголовок карточки
    const title = (
      <TitleInfoLayout>
        <h1>Вебер-Пфляумер Владислав Витальевич</h1>
        <p>Дата рождения: 19.01.1998г.</p>
      </TitleInfoLayout>
    );

    // Скелет листа с данными
    const content = (
      <ContentInfoLayout
        size="small"
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <Icon type={item.icon} style={{color: `${item.color}`}} />
            <p>
              {item.first}{" "}
              <strong style={{color: `${item.color}`}}>{item.last}</strong>
            </p>
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
        <Icon type="idcard" theme="filled" style={{color: "#1E88E5"}} />
      </Popover>
    );
  }
}

export default PopoverInfo;
