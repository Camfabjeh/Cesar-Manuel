const express = require("express");
const multer = require("multer");

const router = express.Router();

const artistControllers = require("./controllers/artistControllers");
const photoControllers = require("./controllers/photoControllers");
const photoreportControllers = require("./controllers/photoreportControllers");

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "public/assets/images");
  },
  filename(req, file, cb) {
    const fileArray = file.originalname.split(".");
    const extension = fileArray.pop();
    const fileName = fileArray.join("-").split(" ").join("-");
    cb(null, `${fileName}_${Date.now()}.${extension}`);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: "2MB" },
});

router.get("/artists", artistControllers.browse);
router.get("/artists/:id", artistControllers.read);
router.put("/artists/:id", artistControllers.edit);
router.post("/artists", artistControllers.add);
router.delete("/artists/:id", artistControllers.destroy);

router.get("/photos", photoControllers.browse);
router.get("/photos/:id", photoControllers.read);

router.get("/photoreports/:id/photos", photoControllers.browseByPhotoReport);
router.put("/photos/:id", upload.single("image"), photoControllers.edit);
router.post("/photos", upload.single("image"), photoControllers.add);
router.delete("/photos/:id", upload.single("image"));
router.post("/photos", photoControllers.add);
router.delete("/photos/:id", photoControllers.destroy);

router.get("/photoreports", photoreportControllers.browse);
router.get(
  "/photoreports/:id",
  upload.single("image"),
  photoreportControllers.read
);
router.put(
  "/photoreports/:id",
  upload.single("image"),
  photoreportControllers.edit
);
router.post("/photoreports", photoreportControllers.add);
router.delete("/photoreports/:id", photoreportControllers.destroy);

module.exports = router;
