import prisma from '../config/db.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';

class UserService {
    register = async ({ username, password }) => {
        const passwordHash = await bcrypt.hash(password, 10)

        const existingUser = await prisma.user.findUnique({
            where: { username }
        })

        if (existingUser) {
            throw new Error('User already exists')
        }

        return prisma.user.create({
            data: {
                username,
                password: passwordHash,
            }
        });
    }

    login = async ({ username, password }) => {
        const user = await prisma.user.findUnique({
            where: { username }
        })

        if (!user) {
            throw new Error('User does not exist')
        }

        const passwordValid = await bcrypt.compare(password, user.password)

        if (!passwordValid) {
            throw new Error('Incorrect password')
        }

        const token = jwt.sign({
            id: user.id,
            username: user.username
        }, process.env.SECRET_KEY, { expiresIn: '7d' })

        return { user, token }
    }
}

export default new UserService()