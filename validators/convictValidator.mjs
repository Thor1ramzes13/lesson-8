
class ConvictValidator { 
	static convictSchema = {
		name: {
			isLength: {
				options: { min: 2, max: 20 },
				notEmpty: { errorMessage: 'Name is required' },
				errorMessage: 'Name must be between 2 and 20 characters',
			},
			trim: true,
			escape: true,
		},
		age: {
			isNumeric: {
				errorMessage: 'Age must be a number',
			},
			notEmpty: { errorMessage: 'Age is required' },
			trim: true,
			escape: true,
		},
		years: {
			isNumeric: {
				errorMessage: 'Years must be a number',
			},
			notEmpty: { errorMessage: 'Years is required' },
			trim: true,
			escape: true,
		},
		description: {
			isLength: {
				options: { min: 20, max: 500 },
				notEmpty: { errorMessage: 'Description is required' },
				errorMessage: 'Description must be between 20 and 500 characters',
			},
			trim: true,
			escape: true,
		}
	}

}

export default ConvictValidator