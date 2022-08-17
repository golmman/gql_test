import { ApolloServer } from 'apollo-server';
import { ApolloGateway } from '@apollo/gateway';
import { readFileSync } from 'fs';

const supergraphSdl = readFileSync('./src/supergraph.gql').toString();

const gateway = new ApolloGateway({ supergraphSdl });

const server = new ApolloServer({
    gateway,
});

// https://www.apollographql.com/docs/federation/quickstart/setup#1-install-the-rover-cli
server
    .listen()
    .then(({ url }) => {
        console.log(`🚀 Gateway ready at ${url}`);
    })
    .catch((err) => {
        console.error(err);
    });
