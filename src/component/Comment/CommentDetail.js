import React from 'react';

const CommentDetail = (props) => {

    const {author, avatar, comment, timeDate} = {...props};

    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img src={avatar} alt="avatar"/>
            </a>
            <div className="content">
                <a href="/" className="author">
                    {author}
                </a>
                <div className="metadata">
                    <span className="date">{timeDate}</span>
                </div>
                <div className="test">
                    {comment}
                </div>
            </div>
        </div>
    );
};

export default CommentDetail;
