import React, {Component} from 'react';
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Button extends Component {

    renderText({language}) {
        return language  === 'EN' ? 'Submit' : 'Envoyer';
    }

    renderButton(color) {
        return(
            <button className={`ui button ${color}`}>
                <LanguageContext.Consumer>
                    {(text) => this.renderText(text)}
                </LanguageContext.Consumer>
            </button>
        )
    }

    render() {

        return (
            <ColorContext.Consumer>
                {(color) => this.renderButton(color)}
            </ColorContext.Consumer>
        );
    }
}

export default Button;