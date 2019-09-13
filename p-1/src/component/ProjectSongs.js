import React from 'react';
import SongList from "./song/SongList";
import SongDetail from "./song/SongDetail";

const ProjectSongs = () => {

    return (
        <div className="ui container grid padded">
            <div className="ui row">
                <div className="column eight wide">
                    <SongList/>
                </div>
                <div className="column eight wide">
                    <SongDetail/>
                </div>
            </div>
        </div>
    );
};

export default ProjectSongs;
