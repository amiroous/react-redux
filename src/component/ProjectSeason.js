import React, {Component} from 'react';
import SeasonDetails from "./season/SeasonDetails";
import Spinner from "./spinner/Spinner";

class ProjectSeason extends Component {

    state = {
        latitude: null,
        errorMessage: ''
    };

    componentDidMount() {

        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ latitude: position.coords.latitude }),
            (error) => this.setState({ errorMessage: error.message })
        );
    }

    renderProject() {

        if(this.state.latitude && !this.state.errorMessage) {
            return (
                <div className="ui basic segment">
                    <SeasonDetails lat={this.state.latitude}/>
                </div>
            )
        }

        if(!this.state.latitude && this.state.errorMessage) {
            return (
                <div className="ui basic segment">
                    <div className="ui negative message">
                        <i className="close icon" />
                        <div className="header">
                            Sorry, System was unable to check your current position!
                        </div>
                        <p>{this.state.errorMessage}</p>
                    </div>
                </div>
            )
        }

        return <Spinner message="Fetching Your Current Position..." />
    }

    render() {

        return (
            this.renderProject()
        );
    }
}

export default ProjectSeason;
