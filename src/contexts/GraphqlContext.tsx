import { split, HttpLink } from '@apollo/client'
import { getMainDefinition } from '@apollo/client/utilities'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { GraphQLWsLink } from '@apollo/client/link/subscriptions'
import { createClient } from 'graphql-ws'
import Constants from 'expo-constants'
import { IProps } from '../models/context'

const BASE_HTTP_URL = Constants?.manifest?.extra?.graphqlHttpEndpoint
const BASE_WS_URL = Constants?.manifest?.extra?.graphqlWsEndpoint

const httpLink = new HttpLink({
  uri: BASE_HTTP_URL,
})

const wsLink = new GraphQLWsLink(
  createClient({
    url: BASE_WS_URL,
  })
)

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query)
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    )
  },
  wsLink,
  httpLink
)

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
})

const GraphqlProvider = ({ children }: IProps) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}

export default GraphqlProvider
