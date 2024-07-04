import path from 'path'
import express from 'express'
import multer from 'multer'
const router = express.Router()

// Configure storage options for multer
const storage = multer.diskStorage({
  // Destination where files will be stored
  destination(req, file, cb) {
    cb(null, 'uploads/')
  },
  // Filename to be used for the stored file
  filename(req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    )
  },
})

// Function to check file type
function checkFileType(file, cb) {
  // Allowed file extensions
  const filetypes = /jpg|jpeg|png/
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase())
  const mimetype = filetypes.test(file.mimetype)

  if (extname && mimetype) {
    return cb(null, true)
  } else {
    cb('Images only!')
  }
}

// Configure multer with storage and file filter
const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb)
  },
})

// POST route for uploading a single image
router.post('/', upload.single('image'), (req, res) => {
  // Respond with the path to the uploaded file
  res.send(`/${req.file.path}`)
})

export default router
