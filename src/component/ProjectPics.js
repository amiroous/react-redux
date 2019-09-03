import React, {Component} from 'react';
import unsplash from "../api/unsplash";
import SearchBar from './searchbar/SearchBar';
import ImageList from './imagelist/ImageList';

class ProjectPics extends Component {

    state = {
        images: []
    };

    async onSearchSubmit(term) {
        const response = await unsplash.get('/search/photos', { params: {query: term}} );
        this.setState({ images: response.data.results });
    }

    render() {

        return (
            <div className="ui container-fluid">
                <SearchBar handleSearchSubmit={(term) => this.onSearchSubmit(term)}/>
                <div className="ui basic segment statistic">
                    <div className="label">
                        Found
                    </div>
                    <div className="value">
                        {this.state.images.length}
                    </div>
                </div>
                <ImageList images={this.state.images} />
            </div>
        );
    }
}

export default ProjectPics;