import React from 'react';

const Spinner = (props) => {
    return (
        <div className="ui">
            <div className="ui active dimmer">
                <div className="ui text massive loader">{props.message}</div>
            </div>
        </div>
    );
};

Spinner.defaultProps = {
    message: 'Loading...'
};

export default Spinner;
