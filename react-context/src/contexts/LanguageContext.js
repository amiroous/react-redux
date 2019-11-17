import React, {Component, createContext} from 'react';

const LanguageContext = createContext('EN');

export class LanguageStore extends Component {

    state = {
        language: 'EN'
    };

    onLanguageChange = (language) => {
        this.setState({
            language
        });
    };

    render() {

        return(
            <LanguageContext.Provider value={{...this.state, onLanguageChange: this.onLanguageChange}}>
                {this.props.children}
            </LanguageContext.Provider>
        )
    }
}

export default LanguageContext;