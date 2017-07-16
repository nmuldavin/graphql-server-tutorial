import { Author, View } from './connectors';

const resolvers = {
  Query: {
    author: (root, args) => Author.find({ where: args }),
  },
  Author: {
    posts: author => author.getPosts(),
  },
  Post: {
    author: post => post.getAuthor(),
    views: post => View.findOne({ postId: post.id }).then(view => view.views),
  },
};

export default resolvers;
