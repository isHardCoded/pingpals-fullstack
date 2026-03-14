import { useState, useEffect } from 'react';
import { Heart, MessageSquare, Share, Plus } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { CreatePostModal } from '../../features/create-post/ui';
import { PostService, type Post } from '../../services/post';
import {
  formatDate,
  getAuthorName,
  getAuthorAvatar,
} from '../../shared/utils/post';
import s from './styles.module.css';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchPosts = async () => {
    try {
      const data = await PostService.getPosts();
      setPosts(data);
    } catch (error) {
      console.error('Failed to fetch posts:', error);
      setPosts([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleCreatePost = async (title: string, content: string) => {
    setPosts((prev) => prev);
    setIsModalOpen(false);

    try {
      await PostService.create({ title, content });
      await fetchPosts();
    } catch (error) {
      console.error('Failed to create post:', error);
    }
  };

  return (
    <div className={s.home}>
      <div className={s.header}>
        <h1 className={s.title}>Feed</h1>
        <Button onClick={() => setIsModalOpen(true)} className={s.createButton}>
          <Plus size={20} />
          New post
        </Button>
      </div>

      <div className={s.posts}>
        {isLoading ? (
          <div className={s.loading}>Loading...</div>
        ) : posts.length === 0 ? (
          <div className={s.empty}>No posts yet</div>
        ) : (
          posts.map((post) => (
            <article key={post.id} className={s.post}>
              <div className={s.postHeader}>
                <div className={s.avatar}>{getAuthorAvatar(post)}</div>
                <div className={s.postInfo}>
                  <span className={s.author}>{getAuthorName(post)}</span>
                  <span className={s.time}>{formatDate(post.createdAt)}</span>
                </div>
              </div>

              <h3 className={s.postTitle}>{post.title}</h3>
              <p className={s.content}>{post.content}</p>

              <div className={s.postActions}>
                <button className={s.action}>
                  <Heart size={16} />
                  <span>{post.likesCount}</span>
                </button>
                <button className={s.action}>
                  <MessageSquare size={16} />
                  <span>{post.commentsCount}</span>
                </button>
                <button className={s.action}>
                  <Share size={16} />
                  <span>Share</span>
                </button>
              </div>
            </article>
          ))
        )}
      </div>

      <CreatePostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleCreatePost}
      />
    </div>
  );
};

export default Home;
