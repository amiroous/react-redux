import React from 'react';

const Main = () => {
    return (
        <div className="container ui comments">
            <div className="comment">

                <a href="/" className="avatar">
                    <img src="" alt="avatar"/>
                </a>

                <div className="content">
                    <a href="/" className="author">
                        Amir
                    </a>
                    <div className="metadata">
                        <span className="date">Today at 7:00AM</span>
                    </div>
                    <div className="test">
                        Nice post content...
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Main;
