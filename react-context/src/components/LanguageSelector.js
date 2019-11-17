import React, {Component} from 'react';
import LanguageContext from "../contexts/LanguageContext";

class LanguageSelector extends Component {
    static contextType = LanguageContext;

    render() {
        return (
            <div>
                Select a Language: &nbsp;&nbsp;
                <i className="flag us" onClick={() => this.context.onLanguageChange('EN')} />
                <i className="flag fr" onClick={() => this.context.onLanguageChange('FR')} />
            </div>
        );
    }
}

export default LanguageSelector;