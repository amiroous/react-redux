import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import Modal from "../Modal";
import browserHistory from "../../browserHistory";
import {fetchStream, deleteStream} from "../../actions";

class StreamDelete extends Component {

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    onDelete() {
        this.props.deleteStream(this.props.match.params.id);
    }

    renderActions() {
        return(
            <Fragment>
                <button
                    onClick={() => this.onDelete()}
                    className="ui button red">Delete</button>
                <Link to="/" className="ui button">Cancel</Link>
            </Fragment>
        )
    }

    renderContent() {

        if(!this.props.stream) {
            return 'Are you sure you want to delete this stream?';
        }
         return `Are you sure you want to delete "${this.props.stream.title}"?`;
    }

    render() {
        return (
            <Modal
                title="Delete Stream"
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={() => browserHistory.push('/')}
            />
        )
    }
}

const mapStateToProps = (state, ownProps) => {

    return {
        stream: state.streams[ownProps.match.params.id]
    }
};

export default connect(mapStateToProps, {fetchStream, deleteStream})(StreamDelete);
