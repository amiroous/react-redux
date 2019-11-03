import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link} from "react-router-dom";

class StreamForm extends Component {

    renderError({error, touched}) {

        if(touched && error) {
            return(
                <div className="ui error message">
                    <div>{error}</div>
                </div>
            )
        }
    }

    renderInput = ({input, label, meta}) => {

        return(

            <div className={`field ${meta.error && meta.touched ? 'error' : ''}`}>
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        )
    };

    onFormSubmit = (formData) => {
        this.props.onFormSubmit(formData);
    };

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onFormSubmit)} className="ui form error" >
                <Field name="title" component={this.renderInput} label="Enter Title" />
                <Field name="description" component={this.renderInput} label="Enter Description" />
                <button className="ui button primary">Submit</button>
                <Link to="/" className="ui button">Cancel</Link>
            </form>
        );
    }
}

const validate = (formData) => {

    const errors = {};

    if(!formData.title) {
        errors.title = 'Please enter a valid title!'
    }

    if(!formData.description) {
        errors.description = 'Please enter a valid description!'
    }

    return errors;
};

const streamForm = reduxForm({
    form: 'streamForm',
    validate
})(StreamForm);

export default streamForm;