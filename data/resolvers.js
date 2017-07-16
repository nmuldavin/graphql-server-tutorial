const resolvers = {
  Query: {
    author: () => ({ id: 1, firstName: 'Hello', lastName: 'world' }),
  },
  Author: {
    posts: () => [
      { id: 1, title: 'A post', text: 'Some text', views: 2 },
      { id: 2, title: 'Another post', text: 'Some other text', views: 200 },
    ],
  },
  Post: {
    author: () => ({ id: 1, firstName: 'Hello', lastName: 'World' }),
  },
};

export default resolvers;
