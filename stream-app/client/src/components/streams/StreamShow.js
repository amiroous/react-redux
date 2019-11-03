import React, {Component, createRef} from 'react';
import {connect} from "react-redux";
import {fetchStream} from "../../actions";
import flvjs from "flv.js";

class StreamShow extends Component {

    constructor(props) {
        super(props);

        this.videoRef = createRef();
    }

    componentDidMount() {
        const {id} = this.props.match.params;

        this.props.fetchStream(id);
        this.createVideoPlayer();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.createVideoPlayer();
    }

    componentWillUnmount() {
        this.videoPlayer.destroy();
    }

    async createVideoPlayer() {

        if(this.videoPlayer || !this.props.stream) {
            return;
        }

        const {id} = this.props.match.params;

        this.videoPlayer = flvjs.createPlayer({
            type: 'flv',
            url: `http://localhost:8000/live/${id}.flv`
        });

        // this.videoPlayer.attachMediaElement(this.videoRef.current);
        // this.videoPlayer.load();
        // this.videoPlayer.play()
        //     .then(() => {})
        //     .catch((error) => {
        //         if (error && error.toString().toLowerCase().includes('the play() request was interrupted by a call to pause()')) {
        //             // Do Nothing
        //         } else {
        //             this.videoPlayer.destroy();
        //             throw error;
        //         }
        //     });


        this.videoPlayer.attachMediaElement(this.videoRef.current);
        this.videoPlayer.load();

        try {
            await this.videoPlayer.play();
        } catch (error) {
            if (error && error.toString().toLowerCase().includes('the play() request was interrupted by a call to pause()')) {
                // Do Nothing
            } else {
                this.videoPlayer.destroy();
                // throw error;
            }
        }
    }

    render() {

        if(!this.props.stream) {
            return <div>Stream Loading ...</div>;
        }

        const {title, description} = this.props.stream;

        return (
            <div>
                <video
                    ref={this.videoRef}
                    style={{
                        width: '100%'
                    }}
                    controls
                />
                <h1>{title}</h1>
                <h5>{description}</h5>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
};

export default connect(mapStateToProps, {fetchStream})(StreamShow);