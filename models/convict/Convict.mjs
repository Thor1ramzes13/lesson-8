import mongoose from 'mongoose'

const { Schema } = mongoose

const convictSchema = new Schema({
	name: {
		type: String,
		required: [true, 'Name is required'],
		minlength: [2, 'Name must be at least 2 characters long'],
		maxlength: [20, 'Name must be at most 20 characters long'],
		trim: true
	},
	age: {
		type: Number,
		required: [true, 'Age is required'],
		min: [14, 'Age must be at least 14 year old'],
		max: [150, 'Age must be at most 150 years old'],
		trim: true,
		toInt: true
	},
	years: {
		type: Number,
		required: [true, 'Years is required'],
		min: [1, 'Years must be at least 1 year'],
		max: [300, 'Years must be at most 300 years'],
		trim: true,
		toInt: true
	},
	description: {
		type: String,
		required: [true, 'Description is required'],
		minlength: [20, 'Name must be at least 2 characters long'],
		maxlength: [500, 'Name must be at most 500 characters long'],
		trim: true
	},
	hierarchy: {
		type: Schema.Types.ObjectId,
		ref: 'Hierarchy',
		required: [true, 'Hierarchy is required'],
		trim: true
	}
})	

convictSchema.static.checkDatabaseExists = async () => { 
	const databases = await mongoose.connection.listDatabases() 
	return databases.databases.some(db => db.name === config.databaseName) 
}

convictSchema.static.checkCollectionExists = async function () { 
	if (await this.checkDatabaseExists()) { 
		const collections = await mongoose.connection.db 
			.listCollections({ 
				name: 'convicts' 
			}) 
			.toArray() 
		return collections.length > 0 
	} 
	return false 
}


const Convict = mongoose.model('Convict', convictSchema)

export default Convict