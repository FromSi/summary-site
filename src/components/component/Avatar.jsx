import React from "react";
import {Avatar as AvatarAntD} from "antd";

/**
 * Аватар или фото человека данного резюме.
 */
class Avatar extends React.Component {
  render() {
    return (
      <AvatarAntD
        size={250}
        shape="square"
        src={`images/avatars/${this.props.file}.jpg`}
      >
        FromSi
      </AvatarAntD>
    );
  }
}

export default Avatar;
