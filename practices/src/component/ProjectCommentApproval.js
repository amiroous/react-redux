import React from 'react';
import Comments from "./comment/Comments";

const ProjectCommentApproval = () => {
    return (
        <div className="ui basic segment">
            <Comments count={3} />
        </div>
    );
};

export default ProjectCommentApproval;
