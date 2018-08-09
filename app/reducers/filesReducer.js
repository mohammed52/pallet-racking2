import { combineReducers } from "redux";
import * as types from "../types";

let initialState = {
  filesUploaded: false
};

const files = (state = initialState, action) => {
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

const filesReducer = combineReducers({
  files
});

export default filesReducer;
