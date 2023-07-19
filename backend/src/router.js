const express = require("express");
const multer = require("multer");

const router = express.Router();

// const itemControllers = require("./controllers/itemControllers");

// router.get("/items", itemControllers.browse);
// router.get("/items/:id", itemControllers.read);
// router.put("/items/:id", itemControllers.edit);
// router.post("/items", itemControllers.add);
// router.delete("/items/:id", itemControllers.destroy);

const artistControllers = require("./controllers/artistControllers");

router.get("/artists", artistControllers.browse);
router.get("/artists/:id", artistControllers.read);
router.put("/artists/:id", artistControllers.edit);
router.post("/artists", artistControllers.add);
router.delete("/artists/:id", artistControllers.destroy);

const photoControllers = require("./controllers/photoControllers");

router.get("/photos", photoControllers.browse);
router.get("/photos/:id", photoControllers.read);

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

router.put("/photos/:id", upload.single("image"), photoControllers.edit);
router.post("/works", upload.single("image"), photoControllers.add);
router.delete("/works/:id", upload.single("image"));
router.post("/photos", photoControllers.add);
router.delete("/photos/:id", photoControllers.destroy);

const photoreportControllers = require("./controllers/photoreportControllers");

router.get("/photoreports", photoreportControllers.browse);
router.get("/photoreports/:id", photoreportControllers.read);
router.put("/photoreports/:id", photoreportControllers.edit);
router.post("/photoreports", photoreportControllers.add);
router.delete("/photoreports/:id", photoreportControllers.destroy);

module.exports = router;
