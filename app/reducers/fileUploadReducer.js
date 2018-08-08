let initialState = {
  filesUploaded: false
};

const fileUpload = (state = initialState, action) => {
  switch (action.type) {
    case "UPLOAD_SUCCESSFUL": {
      let returnObj = {
        ...state,
        filesUploaded: action.payload
      };
      return returnObj;
    }

    default: {
      return state;
    }
  }
};

export default fileUpload;
