import React, {Component} from 'react';
import LanguageContext from "../contexts/LanguageContext";

class Field extends Component {

    renderText({language}) {
        return language  === 'EN' ? 'Name' : 'Nom';
    }

    render() {

        return (
            <div className="ui field">
                <label>
                    <LanguageContext.Consumer>
                        {(value) => this.renderText(value)}
                    </LanguageContext.Consumer>
                </label>
                <input />
            </div>
        );
    }
}

export default Field;