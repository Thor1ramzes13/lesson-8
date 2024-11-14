import { validationResult } from 'express-validator'
import convictDBService from '../models/convict/ConvictsDBService.mjs'

class ConvictController {
	static async convictList(req, res) {
		try {

			const filters = Object.fromEntries(
				Object.entries(req.query).filter(([_, value]) => value)
			)
			const dataList = await convictDBService.getList(filters)
			res.render('convictsList', {
				convicts: dataList,
			})
		} catch (error) {
			res.status(500).json({ error: error.message })
		}
	}
	static async convictForm(req, res) {
		try {
			const id = req.params.id
			let convict = null
			if (id) {
				convict = await convictDBService.getById(id)
			}
			res.render('convictForm', {
				errors: [],
				data: convict,
			})
		} catch (error) {
			res.status(500).json({ error: error.message })
		}
	}
	static async createConvict(req, res) {
		const errors = validationResult(req)
		const data = req.body
		if (!errors.isEmpty()) {
			if (req.params.id) data.id = req.params.id
			return res.status(400).render('convictForm', {
				errors: errors.array(),
				data,
			})
		}

		try {
			const { name, age, years, description } = req.body
			if (req.params.id) {
				await convictDBService.update(req.params.id, {
					name,
					age,
					years,
					description,
				})
			} else {
				await convictDBService.create({ name, age, years, description })
			}
			res.redirect('/convicts')
		} catch (error) {
			res.status(500).render('convictForm', {
				errors: [{ msg: error.message }],
				data,
			})
		}
	}

	static async deleteConvict(req, res) {
		try {
			await convictDBService.deleteById(req.body.id)
			res.json({ success: true })
		} catch (error) {
			res.status(500).json({ success: false, message: 'Failed to delete' })
		}
	}
}

export default ConvictController
