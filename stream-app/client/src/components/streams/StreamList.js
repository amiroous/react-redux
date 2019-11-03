import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchStreams} from "../../actions";
import {Link} from "react-router-dom";

class StreamList extends Component{

    componentDidMount() {
        this.props.fetchStreams();
    }

    renderAdminButtons(stream) {

        if(stream.userId !== this.props.currentUserId) {
            return;
        }

        return(
            <div className="right floated content">
                <Link to={`/streams/edit/${stream.id}`}  className="ui button primary">Edit</Link>
                <Link to={`/streams/delete/${stream.id}`}  className="ui button negative">Delete</Link>
            </div>
        )
    }

    renderCreateButton() {

        if(!this.props.isSignedIn) {
            return;
        }

        return(
            <div style={{ textAlign: 'right' }}>
                <Link to="/streams/new" className="ui button green">Create Stream</Link>
            </div>
        )
    }

    renderStreamList() {

        return this.props.streams.map(stream => (
            <div className="item" key={stream.id}>
                <i className="large middle aligned icon camera" />
                <div className="content">
                    {this.renderAdminButtons(stream)}
                    <Link to={`/streams/${stream.id}`}>{stream.title}</Link>
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
                {this.renderCreateButton()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {

    return {
        streams: Object.values(state.streams),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    };
};

export default connect(mapStateToProps, {fetchStreams})(StreamList);
