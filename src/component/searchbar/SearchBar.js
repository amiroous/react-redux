import React, {Component} from 'react';

class SearchBar extends Component {

    state = {
        term: ''
    };

    onInputChange(e) {
        this.setState({term: e.target.value})
    }

    onFormSubmit(e) {
        e.preventDefault();
        this.props.handleSearchSubmit(this.state.term);
    }

    render() {

        return (
            <div className="ui basic segment">
                <form className="ui form" onSubmit={(e) => this.onFormSubmit(e)}>
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" placeholder="Search..."
                               onChange={(e) => this.onInputChange(e)}
                               value={this.state.term}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;