import { combineReducers } from "redux";

const songsReducer = () => {

    return [
        {
            title: 'Hey Jude',
            duration: '3:05'
        },
        {
            title: 'Imagine',
            duration: '2:37'
        },
        {
            title: 'Let It Be',
            duration: '4:35'
        },
        {
            title: 'Yesterday',
            duration: '5:15'
        }
    ]
};

const selectedSongReducer = (selectedSong = null, action) => {

    if(action.type === 'SONG_SELECTED') {
        return action.payload
    }

    return selectedSong
};

export default combineReducers({
   songs: songsReducer,
   selectedSong: selectedSongReducer
});