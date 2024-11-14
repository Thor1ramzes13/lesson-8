import dotenv from 'dotenv'

dotenv.config()

export default Object.freeze({
	port: process.env.PORT,
	databaseName: process.env.DATABASE_NAME,
  databaseUrl: process.env.MONGODB_URL,
  mongoURI: `${process.env.MONGODB_URL}${process.env.DATABASE_NAME}`,
})