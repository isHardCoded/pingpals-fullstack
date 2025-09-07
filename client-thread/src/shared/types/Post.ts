export type Post = {
	id: number
	authorId: number | undefined
	content: string
	createdAt: Date
	updatedAt: Date
}
