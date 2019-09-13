import React from 'react';
import VideoItem from "./VideoItem";

const VideoList = ({videos, onVideoSelect}) => {

    const renderVideoList = videos && videos.map( video => <VideoItem key={video.etag} video={video} onVideoSelect={onVideoSelect}/> );

    return (
        <div className="ui relaxed divided list">
            {renderVideoList}
        </div>
    );
};

export default VideoList;
