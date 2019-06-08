
import React from "react"
import { Avatar } from 'antd';
import { LogoOrg, LogoLayout } from './style';

/* Логотипы созданны для сторонних сервисов. Например: GitHub. */
class Logo extends React.Component {

  /* Создание HTML тегов для логотипа.
  Данная функция имеет проверку не ссылку организации.
  Если будет найдена организация, будет использоваться двойной логотип.
  */
  createRootForLogo() {
    if (this.props.organization === undefined) {
      return (
        <Avatar size={32} src={this.props.site}>
          Logo
        </Avatar>
      );
    } else {
      return (
        <LogoLayout>
          <Avatar size={32} src={this.props.site}>
            Logo
          </Avatar>
          <LogoOrg size={32} src={this.props.organization}>
            LogoOrg
          </LogoOrg>
        </LogoLayout>
      );
    }
  }

  render() {
    return this.createRootForLogo();
  }
}

export default Logo;