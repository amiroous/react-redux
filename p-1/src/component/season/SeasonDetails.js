import React from 'react';

const seasonConfig = {
    summer: {
        text: 'Summer is Warm, Lets Get into the Beach!',
        iconName: 'sun',
        color: 'orange'
    },
    winter: {
        text: 'Winter is Cold, Lets Wear Warm Clothes.',
        iconName: 'snowflake',
        color: 'blue'
    }
};

const getSeason = (lat, month) => {

    if(3 <= month <= 8) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
};

const SeasonDetails = (props) => {

    const seasonName = getSeason(props.lat, new Date().getMonth());
    const {text, iconName, color} = seasonConfig[seasonName];

    return (
        <h2 className={`ui header ${color}`}>
            <i className={`outline icon ${iconName}`} />
            <div className="content">
                {seasonName.toUpperCase()}
                <div className="sub header">{text}</div>
            </div>
        </h2>
    );
};

export default SeasonDetails;