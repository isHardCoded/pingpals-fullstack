import { Heart, MessageSquare, Share } from 'lucide-react';
import s from './styles.module.css';

const mockPosts = [
  {
    id: 1,
    author: 'John Doe',
    avatar: '👤',
    content: 'Just started playing ping pong! Anyone want to play?',
    time: '2 hours ago',
    likes: 5,
    comments: 3,
  },
  {
    id: 2,
    author: 'Jane Smith',
    avatar: '👤',
    content:
      'Had an amazing match today! 🏓 The weather was perfect for outdoor ping pong.',
    time: '5 hours ago',
    likes: 12,
    comments: 7,
  },
  {
    id: 3,
    author: 'Mike Johnson',
    avatar: '👤',
    content:
      'Looking for recommendations on a good ping pong table. Any suggestions?',
    time: '1 day ago',
    likes: 8,
    comments: 15,
  },
];

const Home = () => {
  return (
    <div className={s.home}>
      <h1 className={s.title}>Feed</h1>

      <div className={s.posts}>
        {mockPosts.map((post) => (
          <article key={post.id} className={s.post}>
            <div className={s.postHeader}>
              <div className={s.avatar}>{post.avatar}</div>
              <div className={s.postInfo}>
                <span className={s.author}>{post.author}</span>
                <span className={s.time}>{post.time}</span>
              </div>
            </div>

            <p className={s.content}>{post.content}</p>

            <div className={s.postActions}>
              <button className={s.action}>
                <Heart size={16} />
                <span>{post.likes}</span>
              </button>
              <button className={s.action}>
                <MessageSquare size={16} />
                <span>{post.comments}</span>
              </button>
              <button className={s.action}>
                <Share size={16} />
                <span>Share</span>
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Home;
