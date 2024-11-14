import mongoose from 'mongoose'

const { Schema } = mongoose

const hierarchySchema = new Schema({
	type: {
		type: String,
		required: [true, 'Type is required'],
		trim: true
	},
})	



const Hierarchy = mongoose.model('Hierarchy', hierarchySchema)

export default Hierarchy