import mongoose from 'mongoose'
import config from '../config/default.mjs'

mongoose.Promise = global.Promise

export default async () => {
	try {
		await mongoose.connect(config.mongoURI)
		console.log('Connected to MongoDB');
	} catch (error) {
		console.error('Error connecting to MongoDB:', error);
		
	}
}