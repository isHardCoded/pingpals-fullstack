import React from 'react';
import styles from './PostBlock.module.scss';

interface PostBlockProps {
    content: string;
}

const PostBlock: React.FC<PostBlockProps> = ({ content }) => {
    return  <div className={styles.block}>
        <img className={styles.avatar} src="https://ui-avatars.com/api/?name=John+Doe" alt=""/>
        <div className={styles.wrapper}>
            <header className={styles.header}>
                <h4>CNN</h4>
                <span>7m</span>
            </header>
            <div className={styles.content}>
                <p>{content}</p>
                <img src="https://avatars.mds.yandex.net/i?id=c2499bdc675af576173c35f9de467fd1_l-6498965-images-thumbs&n=13" alt=""/>
            </div>
        </div>
    </div>
}

export default PostBlock;