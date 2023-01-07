import { Router } from 'express'
import * as skillsCtrl from '../controllers/skills.js'

const router = Router()

/* GET users listing. */
router.get('/', skillsCtrl.index)
router.get('/new', skillsCtrl.new)
router.get('/:id', skillsCtrl.show)
router.get('/:id/update', skillsCtrl.update)
router.post('/', skillsCtrl.create)
router.delete('/:id', skillsCtrl.delete)
router.patch('/:id', skillsCtrl.modify)

export {
  router
}
