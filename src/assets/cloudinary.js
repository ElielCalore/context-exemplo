import { cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import { multer } from "multer";

cloudinary.config({
  cloud_name: "alexandreatlima",
  api_key: "535655727723928",
  api_secret: "u6hpJ08DCeSJUhD7VA5JMWY7g4o",
  secure: true,
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "context-and-upload",
    format: async (req, file) => "png",
    use_filename: true,
  },
});

const fileUpload = multer({ storage });

export { fileUpload };
