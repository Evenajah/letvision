

const initialState = {
    isbnCode: '',
    titleBookName: '',
    authorName: '',
    publishName: '',
    discription: '',
    image: 'https://cdn.pixabay.com/photo/2018/01/03/09/09/book-3057902_960_720.png'
};


const bookItems = (state = initialState, action) => {
    switch (action.type) {

        case 'setBookItems':
            state = {
                ...action.item
            }
            return state;

        default:
            return state
    }

}

export default bookItems;