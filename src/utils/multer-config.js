import path from 'path'
import multer from 'multer'
import { v4 as uuidv4 } from 'uuid'

const folder = path.resolve(__dirname, '../../public/banners')

const storage = multer.diskStorage({
  destination: folder,
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname)

    const filename = `${uuidv4()}${ext}`

    cb(null, filename)
  }
})

const fileFilter = (req, file, cb) => {
  const ext = path.extname(file.originalname)

  const allowExt = ['.jpg', '.png', '.jpeg']

  if (!allowExt.includes(ext)) {
    return cb(new Error('Extensión no permitida'))
  }

  cb(null, true)
}

const upload = multer({
  fileFilter,
  storage
})

export default upload
