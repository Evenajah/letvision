import { combineReducers } from 'redux';

//reducer
import user from './user';
import isVisible from './isVisible';
import loading from './loading';
import overlayChangeEmail from './overlayChangeEmail';
import overlayCreateStory from './overlayCreateStory';


export default combineReducers({
    user: user,
    isVisible: isVisible,
    loading:loading,
    overlayChangeEmail:overlayChangeEmail,
    overlayCreateStory:overlayCreateStory
})
