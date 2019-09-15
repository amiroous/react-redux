import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

// import ProjectCommentApproval from './component/ProjectCommentApproval';
// import ProjectSeason from "./component/ProjectSeason";
// import ProjectPics from "./component/ProjectPics";
// import ProjectVideoPlayer from "./component/ProjectVideoPlayer";
// import ProjectSongs from "./component/ProjectSongs";
import reducers from './reducers';
import ProjectBlog from "./component/ProjectBlog";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunk)
));

ReactDOM.render(
    <Provider store={store}>
        <ProjectBlog/>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
