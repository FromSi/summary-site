import React from "react";
import {CardRepositoryLayout} from "./style";
import {RepositoryName, Language} from "../component/module";

/**
 * Карточка с информацией о репозитории.
 */
class CardRepository extends React.Component {

  /**
   * Получить цвет языка программирования.
   * @param {String} name - название языка программирования.
   */
  getColorLanguage(name) {
    const data = {
      Java: "#EF5350",
      Kotlin: "#7986CB",
      JavaScript: "#FFD54F",
      Processing: "#0288D1",
      QML: "#009688",
      Shell: "#BA68C8",
      Python: "#1E88E5",
      "C++": "#9575CD"
    };

    return data[name];
  }

  /**
   * Получение даты в отформатированном виде.
   * @param {String} date - дата форматируется в (19 янв 1998г.)
   */
  getDate(date){
    const months = ["янв","фев","мар","апр","май","июн","июл","авг","сен","окт","ноя","дек"]

    let d = new Date(date);
    return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}г.`;
  }

  render() {
    return (
      <CardRepositoryLayout>
        <div>
          <RepositoryName
            site={this.props.site}
            organization={this.props.organization}
            title={this.props.title}
          />
          <p className="description">{this.props.description}</p>
        </div>
        <div className="meta">
          <Language
            name={this.props.name}
            color={this.getColorLanguage(this.props.name)}
            fork={this.props.fork}
          />
          <p className="date">{this.getDate(this.props.date)}</p>
        </div>
      </CardRepositoryLayout>
    );
  }
}

export default CardRepository;
