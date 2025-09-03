import React from 'react';
import Button from "../../ui/Button.tsx";
import styles from './PostAdd.module.scss'
import {usePost} from "../../../hooks/usePost.ts";
import {useAuth} from "../../../hooks/useAuth.ts";

const PostAdd = () => {
    const [content, setContent] = React.useState<string>('');

    const { addPost } = usePost();
    const { token } = useAuth();
    const { user } = useAuth();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const post = {
            content,
            authorId: user?.id,
            createdAt: new Date(),
            updatedAt: new Date(),
        }

        await addPost({ post, token });

        setContent('');
    }

    return <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.wrapper}>
            <input type="text" placeholder="Enter a content..." value={content} onChange={(e) => setContent(e.target.value)} />
            <Button type='submit' isLoader={true} value='Send' />
        </div>
    </form>
}

export default PostAdd