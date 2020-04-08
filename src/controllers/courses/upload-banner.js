import path from 'path'
import { models } from '../../models'
import { deleteImage } from '../../utils'

const uploadBanner = async (req, res) => {
  const { id } = req.params

  const course = await models.Course.findByPk(id)

  const folder = path.resolve(__dirname, '../../../public/banners')

  if (!course) {
    deleteImage(`${folder}/${req.file.filename}`)

    return res.status(404).json({ message: 'Curso no encontrado' })
  }

  const { filename } = req.file

  if (course.banner) {
    deleteImage(course.banner)
  }

  const payload = {
    banner: `${folder}/${filename}`
  }

  await course.update(payload)

  return res.json({ course })
}

export default uploadBanner
