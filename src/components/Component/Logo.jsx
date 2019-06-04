
import React from "react"
import { Avatar } from 'antd';

/* Логотипы созданны для сторонних сервисов. Например: GitHub. */
class Logo extends React.Component {
  render(){
      return(
        <div>
          <Avatar size={32} src={`images/logos/${this.props.file}.png`}>Logo</Avatar>
        </div>
      );
  }
}

export default Logo;