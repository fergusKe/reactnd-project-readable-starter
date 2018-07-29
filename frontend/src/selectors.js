import { sortBy } from './utils/helps';

export const getPosts = (state, props) => {
  const sortType = state.sortType;
  let posts = [...state.posts];

  if (props.match.url !== '/' && props.match.url !== '/posts/all') {
    if (posts.length > 0) {
      const category = props.match.params.category;
      posts = posts.filter(post => post.category === category);
    }
  }

  return sortBy(posts, sortType.toLowerCase());
};
