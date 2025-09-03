import { usePost } from "../../../hooks/usePost.ts";
import PostBlock from "../../elements/PostBlock/PostBlock.tsx";

import styles from "./PostList.module.scss";

const PostList = () => {
    const { posts } = usePost()

    return <ul className={styles.list}>
        {posts.map(post => (
            <li key={post.id}>
                <PostBlock {...post} />
            </li>
        ))}
    </ul>
}

export default PostList