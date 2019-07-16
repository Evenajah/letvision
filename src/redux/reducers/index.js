import { combineReducers } from 'redux';

//reducer
import user from './user';
import isVisible from './isVisible';
import loading from './loading';
import overlayChangeEmail from './overlayChangeEmail';


export default combineReducers({
    user: user,
    isVisible: isVisible,
    loading:loading,
    overlayChangeEmail:overlayChangeEmail
})
