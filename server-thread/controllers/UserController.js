import UserService from '../services/UserService.js'

class UserController {
	register = async (req, res) => {
		const { firstname, lastname, username, email, password } = req.body

		if (!firstname || !lastname || !email || !username || !password) {
			return res.status(400).send({ error: 'All fields are required' })
		}

		try {
			const user = await UserService.register({
				firstname,
				lastname,
				username,
				email,
				password,
			})
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
