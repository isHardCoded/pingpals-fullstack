import PostService from '../services/PostService.js';

class PostController {
    getPosts = async (req, res) => {
        try {
            const posts = await PostService.getPosts();
            res.status(200).json(posts);
        } catch(error) {
            res.status(500).json({ error: `Failed to get posts: ${error}` });
        }
    }

    addPost = async (req, res) => {
        const { content } = req.body;
        const authorId = req.user?.id;

        if (!content) return res.status(400).json({ error: 'Content cannot be empty' });
        if (!authorId) return res.status(401).json({ error: 'Unauthorized' });

        try {
            const post = await PostService.addPost({ content, authorId })
            return res.status(201).json(post);
        } catch (error) {
            return res.status(500).json({ error: `Failed to addPost: ${error}` });
        }
    }

    updatePost = async (req, res) => {
        const { content } = req.body;
        const id = parseInt(req.params.id);

        if (!content) return res.status(400).json({ error: 'Content cannot be empty' });
        if (!id) return res.status(400).json({ error: 'Post ID is required' });

        try {
            const post = await PostService.updatePost({ content, id });
            return res.status(200).json(post);
        } catch (error) {
            return res.status(500).json({ error: `Failed to updatePost: ${error}` });
        }
    }

    deletePost = async (req, res) => {
        const id = parseInt(req.params.id);

        if (!id) return res.status(400).json({ error: 'Post ID is required' });

        try {
            await PostService.deletePost({ id });
            return res.status(200).json({ message: 'Post deleted successfully' });
        } catch (error) {
            return res.status(500).json({ error: `Failed to deletePost: ${error}` });
        }
    }
}

export default new PostController();