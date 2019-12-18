import React from 'react';
import SeasonDetails from './SeasonDetails';
import Spinner from './Spinner';
import useCurrentLocation from "./useCurrentLocation";

const App = () => {

    const [latitude, errorMessage] = useCurrentLocation();

    const renderProject = () => {

        if(latitude && !errorMessage) {
            return (
                <div className="ui basic segment">
                    <SeasonDetails lat={latitude}/>
                </div>
            )
        }

        if(!latitude && errorMessage) {
            return (
                <div className="ui basic segment">
                    <div className="ui negative message">
                        <i className="close icon" />
                        <div className="header">
                            Sorry, System was unable to check your current position!
                        </div>
                        <p>{errorMessage}</p>
                    </div>
                </div>
            )
        }

        return <Spinner message="Fetching Your Current Position..." />
    };

    const style = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh"
    };

    return (
        <div style={style}>
            {renderProject()}
        </div>
    );
};

export default App;
