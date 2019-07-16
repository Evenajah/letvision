

const loading = (state = false , action) => {
      switch (action.type) {
          case "startLoading":
              state = action.status
              return state
          default:
              return state
      }
      
  }
  
  export default loading;