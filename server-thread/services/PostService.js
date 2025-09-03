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

    updatePost = async ({ id, content }) => {
        return prisma.post.update({
            where: { id },
            data: {
                content,
                updatedAt: new Date(),
            }
        })
    }

    deletePost = async ({ id }) => {
        return prisma.post.delete({
            where: { id },
        })
    }
}

export default new PostService();