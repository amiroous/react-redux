import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchPostAndUsers} from "../../actions";
import UserHeader from "./userHeader";

class PostList extends Component {

    componentDidMount() {

        this.props.fetchPostAndUsers();
    }

    renderList() {

        const posts = this.props.posts;

        if(!posts.length) {
            return;
        }

        return posts.map( post => (
            <div className="item" key={post.id}>
                <i className="large middle aligned user icon" />
                <div className="content">
                    <a className="header">{post.title}</a>
                    <div className="description">
                        <p>{post.body}</p>
                    </div>
                </div>
                <UserHeader id={post.userId}/>
            </div>
        ));

    }

    render() {
        
        return (
            <div className="ui relaxed divided list">
                {this.renderList()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {

    return {
        posts: state.posts
    }
};

export default connect(mapStateToProps, {fetchPostAndUsers})(PostList);