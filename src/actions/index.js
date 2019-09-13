import blog from '../api/blog';

// Action Creator
// export const selectSong = (song) => {
//
//     // Return an Action
//     return {
//         type: 'SONG_SELECTED',
//         payload: song
//     }
// };

export const fetchPostAndUsers = () => async (dispatch, getState) => {

    await dispatch(fetchPosts());
    const posts = getState().posts;
    const userIds = [...new Set(posts.map(({userId}) => userId))];
    const users = userIds.map( id => dispatch(fetchUser(id)) );
    await Promise.all(users); // Just for test
    console.log(getState().users); // Just for test
};

export const fetchPosts = () => async (dispatch, getState) => {

    const response = await blog.get('/posts');

    dispatch({
        type: 'FETCH_POSTS',
        payload: response.data
    });
};

export const fetchUser = (id) => async (dispatch, getState) => {

    const response = await blog.get(`/users/${id}`);

    dispatch({
        type: 'FETCH_USER',
        payload: response.data
    });
};