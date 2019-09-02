

const detailStory = (state = {} , action) => {
      switch (action.type) {
          case "setDetailStory":
              state = action.detail
              return state
          default:
              return state
      }
      
  }
  
  export default detailStory;