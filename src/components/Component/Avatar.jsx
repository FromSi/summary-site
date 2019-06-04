
import React from "react"
import { Avatar as AntDAvatar } from 'antd';

/* Аватар или фото человека данного резюме. */
class Avatar extends React.Component {
  render(){
      return <AntDAvatar size={250} shape="square" src={`images/avatars/${this.props.file}.jpg`}>FromSi</AntDAvatar>;
  }
}

export default Avatar;