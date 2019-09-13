import React from 'react';

const VideoItem = ({video, onVideoSelect}) => {

    return (
        <div className="item" onClick={() => onVideoSelect(video)}>
            <div className="content">
                <img className="ui image item-image" src={video.snippet.thumbnails.medium.url} alt={video.snippet.title}/>
                <div className="header item-title">{video.snippet.title}</div>
            </div>
        </div>
    );
};

export default VideoItem;
