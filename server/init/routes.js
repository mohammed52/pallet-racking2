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

  // var storage = multer.diskStorage({
  //   destination: (req, file, callback) => {
  //     callback(null, "./uploads");
  //   },
  //   filename: (req, file, callback) => {
  //     callback(null, file.fieldname + "-" + Date.now());
  //   }
  // });

  // var upload = multer({ storage }).array("userPhoto", 2);

  if (filesController) {
    app.post("/api/fileupload", filesController);
  }
  // app.post("/api/photo", (req, res) => {
  //   upload(req, res, err => {
  //     //console.log(req.body);
  //     //console.log(req.files);
  //     if (err) {
  //       return res.end("Error uploading file.");
  //     }
  //     res.end("File is uploaded");
  //   });
  // });
};
