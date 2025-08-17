import { usePost } from "../../../hooks/usePost.ts";

const PostList = () => {
    const { posts } = usePost()

    return <ul>
        {posts.map(post => (
            <li key={post.id}>
                <div>
                    <p>
                        {post.content}
                    </p>
                </div>
            </li>
        ))}
    </ul>
}

export default PostList