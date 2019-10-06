import streams from '../apis/streams';
import {
    SIGN_IN,
    SIGN_OUT,
    CREATE_STREAM,
    FETCH_STREAMS,
    FETCH_STREAM,
    EDIT_STREAM,
    DELETE_STREAM
} from '../actions/types';

export const signIn = (userId) => {

    return {
        type: SIGN_IN,
        payload: userId
    }
};

export const signOut = () => {

    return {
        type: SIGN_OUT
    }
};

export const createStream = (streamData) => async (dispatch) => {

    const response = await streams.post('/streams', streamData);

    dispatch({
        type: CREATE_STREAM,
        payload: response.data
    });
};

export const fetchStreams = () => async (dispatch) => {

    const response = await streams.get('/streams');

    dispatch({
        type: FETCH_STREAMS,
        payload: response.data
    });
};

export const fetchStream = (streamId) => async (dispatch) => {

    const response = await streams.get(`/streams/${streamId}`);

    dispatch({
        type: FETCH_STREAM,
        payload: response.data
    });
};

export const editStream = (streamId, streamData) => async (dispatch) => {

    const response = await streams.put(`/streams/${streamId}`, streamData);

    dispatch({
        type: EDIT_STREAM,
        payload: response.data
    });
};

export const deleteStream = (streamId) => async (dispatch) => {

    await streams.delete(`/streams/${streamId}`);

    dispatch({
        type: DELETE_STREAM,
        payload: streamId
    });
};