import React from 'react';
import Comments from "./Comments";

const Main = () => {
    return (
        <div className="ui basic segment">
            <Comments count={3} />
        </div>
    );
};

export default Main;
