//firebase
import * as firebase from 'firebase';

import ApiKeys from '../../api/ApiKeys';

firebase.initializeApp(ApiKeys.FirebaseConfig);

const userData = firebase.auth();

export default userData;


