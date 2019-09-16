import React, {Component} from 'react';
import {connect} from 'react-redux';
import {signIn, signOut} from "../actions";

class GoogleAuth extends Component {

    componentDidMount() {

        const googleApi = window.gapi;

        googleApi.load('client:auth2', async () => {

            await googleApi.client.init({
                clientId: '1033884364272-68ngtlt9608c4a14m8142giafi3cci7g.apps.googleusercontent.com',
                scope: 'email'
            });
            
            this.auth = window.gapi.auth2.getAuthInstance();

            // Initial Update Auth State by Google Auth
            this.onAuthChange(this.auth.isSignedIn.get());

            // Listen to Auth Changes
            this.auth.isSignedIn.listen(() => this.onAuthChange(this.auth.isSignedIn.get()));
        });
    }

    onAuthChange(isSignedIn) {

        if(isSignedIn) {
            const userId = this.auth.currentUser.get().getId();
            this.props.signIn(userId);
        } else {
            this.props.signOut();
        }
    }

    onSignInClick() {
        this.auth.signIn();
    }

    onSignOutClick() {
        this.auth.signOut();
    }

    renderAuthButton() {

        const isSignedIn = this.props.isSignedIn;

        if(isSignedIn === null) {
            return null;
        } else if(isSignedIn) {
            return(
                <button onClick={() => this.onSignOutClick()} className="ui red google mini button">
                    <i className="google icon" />
                    Sign Out
                </button>
            )
        } else {
            return(
                <button onClick={() => this.onSignInClick()} className="ui green google mini button">
                    <i className="google icon" />
                    Sign In with Google
                </button>
            )
        }
    }

    render() {

        return (
            <div className="item">
                {this.renderAuthButton()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {

    return {
        isSignedIn: state.auth.isSignedIn
    }
};

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);