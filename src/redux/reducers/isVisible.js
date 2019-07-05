

const isVisible = (state = false , action) => {
    switch (action.type) {
        case "setVisible":
            state = action.status
        default:
            return state
    }
    
}

export default isVisible;