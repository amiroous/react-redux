import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchStreams} from "../../actions";

class StreamList extends Component{

    componentDidMount() {
        this.props.fetchStreams();
    }

    renderStreamList() {

        return this.props.streams.map(stream => (
            <div className="item" key={stream.id}>
                <i className="large middle aligned icon camera" />
                <div className="content">
                    {stream.title}
                    <div className="description">
                        {stream.description}
                    </div>
                </div>
            </div>
        ));
    }

    render() {
        
        if(!this.props.streams.length) {
            return <div>Loading List of All Streams...</div>;
        }

        return(
            <div>
                <h2>Streams</h2>
                <div className="ui celled list">
                    {this.renderStreamList()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {

    return {streams: Object.values(state.streams)};
};

export default connect(mapStateToProps, {fetchStreams})(StreamList);
