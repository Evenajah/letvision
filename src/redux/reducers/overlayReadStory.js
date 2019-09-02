

const overlayReadStory = (state = false , action) => {
      switch (action.type) {
          case "setOverlayReadStory":
              state = action.status
              return state
          default:
              return state
      }
      
  }
  
  export default overlayReadStory ;