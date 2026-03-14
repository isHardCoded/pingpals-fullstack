import type { Post } from '../../services/post';

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 1) return 'Just now';
  if (diffMins < 60) return `${diffMins} minute${diffMins > 1 ? 's' : ''} ago`;
  if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
  if (diffDays < 7) return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
  return date.toLocaleDateString();
};

export const getAuthorName = (post: Post) => {
  const { author } = post;
  if (author.firstName || author.lastName) {
    return `${author.firstName || ''} ${author.lastName || ''}`.trim();
  }
  return author.username;
};

export const getAuthorAvatar = (post: Post) => {
  const name = getAuthorName(post);
  return name.charAt(0).toUpperCase();
};
