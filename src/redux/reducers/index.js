import { combineReducers } from 'redux';

//reducer
import user from './user';
import isVisible from './isVisible';
import loading from './loading';
import overlayChangeEmail from './overlayChangeEmail';
import overlayCreateStory from './overlayCreateStory';
import overlayReadStory from './overlayReadStory';
import detailStory from './detailStory';
import overlayViewMyStory from './overlayViewMyStory';
import overlayScan from './overlayScan';
import bookItems from './bookItems';

export default combineReducers({
    user: user,
    isVisible: isVisible,
    loading: loading,
    overlayChangeEmail: overlayChangeEmail,
    overlayCreateStory: overlayCreateStory,
    overlayReadStory: overlayReadStory,
    overlayViewMyStory: overlayViewMyStory,
    detailStory: detailStory,
    overlayScan: overlayScan,
    bookItems: bookItems
})
