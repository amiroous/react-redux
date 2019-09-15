import React, {Component} from 'react';
import SearchBar from "./searchbar/SearchBar";
import youtube, {baseParams} from "../api/youtube";
import VideoDetail from "./video/VideoDetail";
import VideoList from "./video/VideoList";
import './video/ProjectVideoPlayer.css';

class ProjectVideoPlayer extends Component {

    state = {
        selectedVideo: null,
        videos: []
    };

    componentDidMount() {

        this.onSearchSubmit('german shepherd').then();
    }

    async onSearchSubmit(searchTerm) {

        const response = await youtube.get('/search', {
            params: {
                ...baseParams,
                q: searchTerm
            }
        });
        
        this.setState({
            selectedVideo: response.data.items[0],
            videos: response.data.items
        });
    }

    onVideoSelect(selectedVideo) {

        this.setState({selectedVideo});
    }

    render() {
        
        return (
            <div className="ui padded grid video-player">
                <div className="ui row">
                    <div className="column">
                        <SearchBar handleSearchSubmit={(searchTerm) => this.onSearchSubmit(searchTerm)}/>
                    </div>
                </div>
                <div className="ui row">
                    <div className="column eleven wide">
                        <VideoDetail selectedVideo={this.state.selectedVideo}/>
                    </div>
                    <div className="column five wide">
                        <VideoList videos={this.state.videos} onVideoSelect={(video) => this.onVideoSelect(video)} />
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectVideoPlayer;