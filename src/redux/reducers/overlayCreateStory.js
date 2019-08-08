

const overlayCreateStory = (state = false , action) => {
      switch (action.type) {
          case "setOverlayCreateStory":
              state = action.status
              return state
          default:
              return state
      }
      
  }
  
  
  export default overlayCreateStory ;