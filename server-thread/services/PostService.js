import prisma from '../config/db.js'

class PostService {
    getPosts = async () => {
        return prisma.post.findMany({
            include: {
                author: {
                    select: {
                        id: true,
                        username: true,
                    },
                },
            },
            orderBy: {
                createdAt: "desc",
            },
        })
    }

    addPost = async ({ content, authorId }) => {
        return prisma.post.create({
            data: {
                content,
                authorId,
            }
        })
    }
}

export default new PostService();