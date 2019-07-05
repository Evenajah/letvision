import { combineReducers } from 'redux';
import user from './user';
import isVisible from './isVisible';

export default combineReducers({
    user: user,
    isVisible: isVisible
})
