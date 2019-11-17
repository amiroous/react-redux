import React, {Component} from 'react';
import Form from "./Form";
import {LanguageStore} from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";
import LanguageSelector from "./LanguageSelector";

class App extends Component{

    render() {

        return(
            <div className="ui container">
                <LanguageStore>
                    <LanguageSelector />
                    <hr/>
                    <ColorContext.Provider value={'green'}>
                        <Form />
                    </ColorContext.Provider>
                </LanguageStore>
            </div>
        )
    }
}

export default App;