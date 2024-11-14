class RequestManager {
	static async deleteRequest(route, id) {
    try {
      const response = await fetch(route, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
				body: JSON.stringify({ id }),
      })
      if (!response.ok) {
        throw new Error(`Failed to delete request ${response.status}`)
      }
      const data = await response.json()
      const elToDel = document.querySelector(`[data-id="${id}"]`)
      if (elToDel) {
        elToDel.remove()
      }
      return data
    }
     catch (error) {
      console.error('Error:', error)
    }
  }


}