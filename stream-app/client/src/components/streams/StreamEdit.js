import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchStream, editStream} from "../../actions";
import StreamForm from "./StreamForm";

class StreamEdit extends Component {

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    onFormSubmit = (formData) => {
        this.props.editStream(this.props.stream.id, formData);
    };

    render() {

        if(!this.props.stream) {
            return <div>Loading the Stream...</div>;
        }

        const {title, description} = this.props.stream;

        return (
            <div>
                <h3>Edit a Stream</h3>
                <StreamForm onFormSubmit={this.onFormSubmit} initialValues={{title, description}} />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {

    return {
        stream: state.streams[ownProps.match.params.id]
    };
};

export default connect(mapStateToProps, {fetchStream, editStream})(StreamEdit);