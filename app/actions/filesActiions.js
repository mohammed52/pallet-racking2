import { push } from "react-router-redux";
import { authService } from "../services";

import * as types from "../types";

function filesUploadedStatus(status) {
  return {
    type: types.FILES_UPLOAD_SUCCESSFUL,
    payload: status
  };
}

export function updateFileUpdateStatur(data) {
  return dispatch => {
    dispatch(filesUploadedStatus());
  };
}
