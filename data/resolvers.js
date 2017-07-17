import { Author, View, FortuneCookie } from './connectors';

const resolvers = {
  Query: {
    author: (root, args) => Author.find({ where: args }),
    getFortuneCookie: FortuneCookie.getOne,
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
