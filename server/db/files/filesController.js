var multer = require("multer");

/**
 * POST /login
 */
export function filesUpload(req, res) {
  var storage = multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, "./uploads");
    },
    filename: (req, file, callback) => {
      callback(null, file.fieldname + "-" + Date.now());
    }
  });

  var upload = multer({ storage }).array("userPhoto", 2);
  upload(req, res, err => {
    //console.log(req.body);
    //console.log(req.files);
    if (err) {
      return res.end("Error uploading file.");
    }
    res.end("File is uploaded");
  });
}
export default {
  filesUpload
};
