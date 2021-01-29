/*
import {createStore} from 'redux';
import {combineReducers} from 'redux';



function testReducers(state = ["hello"],action)
{
    return state;
}

const reducers = combineReducers({
    test : testReducers
});

export default createStore(reducers); */

import {createStore} from 'redux';
import {combineReducers} from 'redux';
import  vidInfoReducer from './reducers/vidInfoReducer';
import youtubeDataApiKey from './reducers/youtubeDataApiKey';
import videoThumbnailReducer from './reducers/videoThumbnailReducer';


const reducers = combineReducers({
    videoInfo : vidInfoReducer,
    youtubeDataApiKey : youtubeDataApiKey,
    videoThumbnailUrl : videoThumbnailReducer
});

export default createStore(reducers);

