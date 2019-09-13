import React from 'react';
import CommentDetail from "./CommentDetail";
import faker from "faker";
import ApprovalCard from "../card/ApprovalCard";


const getComments = () => ([
    {
        author: faker.name.firstName() + " " +  faker.name.lastName(),
        avatar: faker.image.avatar(),
        comment: faker.lorem.text(),
        timeDate: faker.date.past().toDateString()
    },{
        author: faker.name.firstName() + " " +  faker.name.lastName(),
        avatar: faker.image.avatar(),
        comment: faker.lorem.text(),
        timeDate: faker.date.past().toDateString()
    },{
        author: faker.name.firstName() + " " +  faker.name.lastName(),
        avatar: faker.image.avatar(),
        comment: faker.lorem.text(),
        timeDate: faker.date.past().toDateString()
    }
]);

const showComments = () => {

    const comments = getComments();

    return comments.map((comment, i) => (
        <ApprovalCard key={i}>

            <CommentDetail
                author={comment.author}
                avatar={comment.avatar}
                timeDate={comment.timeDate}
                comment={comment.comment}
            />

        </ApprovalCard>
    ))
};

const Comments = () => {
    return (
        <div className="ui comments">
            {showComments()}
        </div>
    );
};

export default Comments;
