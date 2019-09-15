import React, {Component} from 'react';

class GoogleAuth extends Component {

    state = {
        isSignedIn: null
    };

    componentDidMount() {

        const googleApi = window.gapi;

        googleApi.load('client:auth2', async () => {

            await googleApi.client.init({
                clientId: '1033884364272-68ngtlt9608c4a14m8142giafi3cci7g.apps.googleusercontent.com',
                scope: 'email'
            });
            
            this.auth = window.gapi.auth2.getAuthInstance();
            
            this.setState({
                isSignedIn: this.auth.isSignedIn.get()
            });

            this.auth.isSignedIn.listen(() => this.onAuthChange());
        });
    }

    onAuthChange() {

        this.setState({
            isSignedIn: this.auth.isSignedIn.get()
        });
    }

    onSignInClick() {
        this.auth.signIn();
    }

    onSignOutClick() {
        this.auth.signOut();
    }

    renderAuthButton() {

        const isSignedIn = this.state.isSignedIn;

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

export default GoogleAuth;