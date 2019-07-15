

const user = (state = {}, action) => {

    switch (action.type) {

        // get user
        case 'setUser':
            state = {
                ...action.item
            }
            return state;


        // update
        case 'updateUser':
            delete state.first_name;
            delete state.last_name;
            state = {
                ...state,
                first_name: action.objectUser.first_name,
                last_name: action.objectUser.last_name
            }
            return state;


        //setStat
        case 'setStatUser':
            state = {
                ...state,
                stat: action.stat
            }
            return state;

            
        case 'setMail':
            delete state.email;
            state = {
                ...state,
                email: action.mail
            }
            return state;


        default:
            return {
                ...state
            }
    }

}

export default user;