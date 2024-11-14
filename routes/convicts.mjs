import express from 'express'
import { checkSchema } from 'express-validator'
import ConvictController from '../controllers/convictController.mjs'
import ConvictValidator from '../validators/convictValidator.mjs'
const router = express.Router()

router.get('/', ConvictController.convictList)

router.get('/convictForm/:id?', ConvictController.convictForm)

router.post(
	'/convictForm/:id?',
	checkSchema(ConvictValidator.convictSchema),
	ConvictController.createConvict
)
router.delete('/', ConvictController.deleteConvict)

export default router