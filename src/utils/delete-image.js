import fs from 'fs'

const deleteImage = path => {
  fs.unlinkSync(path)

  return true
}

export default deleteImage
