import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({selectedSong}) => {
    
    if(!selectedSong) {
        return <div>Select a Song</div>;
    }

    return (
        <div className="ui card">
            <div className="content">
                <div className="header">{selectedSong.title}</div>
                <div className="meta">
                    <span>{selectedSong.duration}</span>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {

    return {
        selectedSong: state.selectedSong
    }
};

export default connect(mapStateToProps)(SongDetail);
