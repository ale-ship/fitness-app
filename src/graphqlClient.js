import {GraphQLClient} from 'graphql-request';

const url = 'https://briziskes.us-east-a.ibm.stepzen.net/api/plucking-sponge/graphql';

const apiKey = process.env.EXPO_PUBLIC_GRAPHQL_API_KEY;


const client = new GraphQLClient(url, {
    headers: {
     Authorization: `apiKey ${apiKey}`, 
    }, 
});

export default client;