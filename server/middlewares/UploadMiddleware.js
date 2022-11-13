import multer from "multer";

// const imageFilter = (req, file, cb) => {
//   if (file.mimetype.startsWith("image")) {
//     cb(null, true);
//   } else {
//     cb("Please upload only images.", false);

//   }
// };

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, `${req.storage}`);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

// const uploadFile = multer({ storage: storage, fileFilter: imageFilter });
const uploadFile = multer({ storage: storage });

export default uploadFile;
