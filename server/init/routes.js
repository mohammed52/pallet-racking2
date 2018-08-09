/**
 * Routes for express app
 */
// import passport from "passport"; // used in this file if google login required
import unsupportedMessage from "../db/unsupportedMessage";

import { controllers, passport as passportConfig } from "../db";
import { filesController } from "../files/filesController";

var multer = require("multer");

const usersController = controllers && controllers.users;

export default app => {
  // user routes

  if (usersController) {
    app.post("/sessions", usersController.login);
    app.post("/users", usersController.signUp);
    app.delete("/sessions", usersController.logout);
  } else {
    console.warn(unsupportedMessage("users routes"));
  }

  if (filesController) {
    app.post("/api/fileupload", filesController);
  }
};
