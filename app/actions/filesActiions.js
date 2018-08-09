import { push } from "react-router-redux";
import { fileService } from "../services";

import * as types from "../types";

function beginFilesUpload(status) {
  return {
    type: types.FILES_UPLOADING,
    payload: status
  };
}

function filesUploadSuccess(status) {
  return {
    type: types.FILES_UPLOAD_SUCCESS
  };
}

function filesUploadFail(status) {
  return {
    type: types.FILES_UPLOAD_FAIL
  };
}

export function filesUpload(data) {
  return dispatch => {
    dispatch(beginFilesUpload);

    return fileService
      .uploadFiles()
      .then(response => {
        dispatch(filesUploadSuccess());
      })
      .catch(err => {
        dispatch(filesUploadFail());
      });
  };
}
