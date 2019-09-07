import React from 'react';

const VideoDetail = ({selectedVideo}) => {

    if(!selectedVideo) {
        return '';
    }

    const videoSrc = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`;
    const videoSnippet = selectedVideo.snippet;

    return (
        <div className="video-detail">
            <div className="ui embed">
                <iframe src={videoSrc} title={videoSnippet.title} />
            </div>
            <div className="ui segment">
                <h4 className="ui header">{videoSnippet.title}</h4>
                <p>{videoSnippet.description}</p>
            </div>
        </div>
    );
};

export default VideoDetail;
