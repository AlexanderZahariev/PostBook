const express = require('express');
const { graphql, buildSchema } = require('graphql');
const graphqlHTTP = require('express-graphql');
const cors = require('cors');
const Post = require('./post');
const schema = buildSchema(`
    type Query {
        getPosts: [Post]
    }

    type Mutation {
        addPost(title: String!, content: String!, tag: String!, place: String!): Post
    }

    type Post {
        title: String
        content: String
        tag: String
        place: String
    }
`);

const posts = [
    new Post('My first post',
        'Hello world!',
        '#firstPost',
        'Plovdiv 2019')
];

const rootValue = {
    getPosts: () => posts,
    addPost: ({title, content, tag, place}) => {
        const post = new Post();
        post.title = title;
        post.content = content;
        post.tag = tag;
        post.place = place;
        return post;
    }
};

const app = express();
app.use(cors());
app.use('/graphql', graphqlHTTP({
    rootValue, schema, graphiql: true
}));

app.listen(4000, () => console.log("listening on port 4000"));