import UserService from '../services/UserService.js'

class UserController {
	register = async (req, res) => {
		const { username, password } = req.body

		if (!username || !password) {
			return res
				.status(400)
				.send({ error: 'Username and password are required' })
		}

		try {
			const user = await UserService.register({ username, password })
			return res.status(201).send(user)
		} catch (error) {
			return res.status(409).send({ error: error.message })
		}
	}

	login = async (req, res) => {
		const { username, password } = req.body

		if (!username || !password) {
			return res
				.status(400)
				.send({ error: 'Username and password are required' })
		}

		try {
			const { user, token } = await UserService.login({ username, password })
			return res.status(200).send({ user, token })
		} catch (error) {
			return res.status(400).send({ error: error.message })
		}
	}
}

export default new UserController()
