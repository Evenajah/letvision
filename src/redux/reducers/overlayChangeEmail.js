

const overlayChangeEmail = (state = false , action) => {
      switch (action.type) {
          case "setOverlayChangeEmail":
              state = action.status
              return state
          default:
              return state
      }
      
  }
  
  export default overlayChangeEmail;