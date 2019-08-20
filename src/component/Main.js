import React from 'react';
import faker from 'faker';

const Main = () => {
    return (
        <div className="container ui comments">
            <div className="comment">

                <a href="/" className="avatar">
                    <img src={faker.image.avatar()} alt="avatar"/>
                </a>

                <div className="content">
                    <a href="/" className="author">
                        {faker.name.firstName()} {faker.name.lastName()}
                    </a>
                    <div className="metadata">
                        <span className="date">Today at 7:00AM</span>
                    </div>
                    <div className="test">
                        {faker.lorem.text()}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Main;
