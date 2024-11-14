import Hierarchy from './Hierarchy.mjs'

class HierarchiesDBService {
	static async getList() {
		try {
			return await Hierarchy.find({})
		} catch (error) {
			return []
		}
	}
}

export default HierarchiesDBService