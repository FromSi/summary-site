import React from "react"
import {LanguageColor, LanguageText, LanguageLayout} from "./style"

/* Показ языка программирования, как в GitHub. */
class Language extends React.Component {
    render(){
        return(
            <LanguageLayout>
                <LanguageText>{this.props.name}</LanguageText>
                <LanguageColor background={this.props.background}/>
            </LanguageLayout>
        );
    }
}

export default Language;