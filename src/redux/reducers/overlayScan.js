

const overlayScan = (state = false , action) => {
    switch (action.type) {
        case "setOverlayScan":
            state = action.status
            return state
        default:
            return state
    }
    
}

export default overlayScan ;