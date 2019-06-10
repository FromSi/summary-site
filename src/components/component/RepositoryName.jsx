import React from "react";
import {Avatar} from "antd";
import {
  RepositoryNameOrg,
  RepositoryNameLayout,
  RepositoryNameTitle
} from "./style";

/**
 * Логотипы созданны для сторонних сервисов. Например: GitHub.
 */
class RepositoryName extends React.Component {
  /**
   * Создание HTML тегов для логотипа.
   * Данная функция имеет проверку не ссылку организации.
   * Если будет найдена организация, будет использоваться двойной логотип.
   */
  createRepositoryName() {
    if (this.props.organization === undefined) {
      return (
        <RepositoryNameLayout>
          <Avatar size={24} src={this.props.site}>
            Logo
          </Avatar>
          <RepositoryNameTitle left="0">{this.props.title}</RepositoryNameTitle>
        </RepositoryNameLayout>
      );
    } else {
      return (
        <RepositoryNameLayout>
          <Avatar size={24} src={this.props.site}>
            Logo
          </Avatar>
          <RepositoryNameOrg size={24} src={this.props.organization}>
            LogoOrg
          </RepositoryNameOrg>
          <RepositoryNameTitle left="14">
            {this.props.title}
          </RepositoryNameTitle>
        </RepositoryNameLayout>
      );
    }
  }

  render() {
    return this.createRepositoryName();
  }
}

export default RepositoryName;
