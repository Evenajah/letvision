

const overlayViewMyStory = (state = false , action) => {
      switch (action.type) {
          case "setOverlayViewMyStory":
              state = action.status
              return state
          default:
              return state
      }
      
  }
  
  export default overlayViewMyStory ;