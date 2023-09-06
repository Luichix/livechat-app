import 'dotenv/config'

export default {
  name: 'liveChat',
  version: '1.0.0',
  extra: {
    environment: 'dev',
    firebaseConfig: process.env.EXPO_PUBLIC_FIREBASE_CONFIG,
    graphqlHttpEndpoint: process.env.GRAPHQL_HTTP_ENDPOINT,
    graphqlWsEndpoint: process.env.GRAPHQL_WS_ENDPOINT,
  },
}
