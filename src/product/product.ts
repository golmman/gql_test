import { ApolloServer, gql } from 'apollo-server';
import { buildSubgraphSchema } from '@apollo/subgraph';
import { readFileSync } from 'node:fs';

const schema = readFileSync('./src/product/product.gql');
const typeDefs = gql`${schema}`;

const resolvers = {
    Query1: {
        me() {
            return { id: '1', username: '@ava' };
        },
    },
    Product: {
        __resolveReference(user: { id: string }, { fetchUserById }: any) {
            return fetchUserById(user.id);
        },
    },
};

const server = new ApolloServer({
    schema: buildSubgraphSchema({ typeDefs, resolvers }),
});

server.listen(4001).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});
