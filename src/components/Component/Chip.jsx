import React from "react"
import { Icon } from 'antd';
import {ChipLayout, ChipText} from "./style"

/* Чип как в material design.
   Ссылка на пример от material design:
   https://material.io/design/components/chips.html
*/
class Chip extends React.Component{
    render(){
        return(
            <ChipLayout background={this.props.background} border={this.props.border}>
                <Icon type={this.props.icon} theme="filled" style={{ fontSize: '16px', color: this.props.color }}/>
                <ChipText>{this.props.name}</ChipText>
            </ChipLayout>
        );
    }
}

export default Chip;