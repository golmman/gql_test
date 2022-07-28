import { ApolloServer, gql } from 'apollo-server';
import { buildSubgraphSchema } from '@apollo/subgraph';

const typeDefs = gql`
    extend schema
        @link(
            url: "https://specs.apollo.dev/federation/v2.0"
            import: ["@key", "@shareable"]
        )

    type Query {
        me: User
    }

    type User @key(fields: "id") {
        id: ID!
        username: String
    }
`;

const resolvers = {
    Query: {
        me() {
            return { id: '1', username: '@ava' };
        },
    },
    User: {
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
