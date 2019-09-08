import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore } from "redux";

// import ProjectCommentApproval from './component/ProjectCommentApproval';
// import ProjectSeason from "./component/ProjectSeason";
// import ProjectPics from "./component/ProjectPics";
// import ProjectVideoPlayer from "./component/ProjectVideoPlayer";
import ProjectSongs from "./component/ProjectSongs";
import reducers from './reducers';

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <ProjectSongs/>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
