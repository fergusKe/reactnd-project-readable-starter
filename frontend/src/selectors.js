import { sortBy } from './utils/helps';

export const getPosts = (state, props) => {
  console.log('getPosts state = ', state);
  console.log('getPosts props = ', props);
  if (!state.posts.length) {
    return state.posts;
  }
  if (props.match.url === '/' || props.match.url === '/categories/all') {
    return state.posts;
  }

  const category = props.match.params.name;
  const posts = state.posts.filter(post => post.category === category);

  // console.log('posts = ', posts);
  // posts = sortBy(posts, 'newest');

  return posts;
};
