import { GraphQLClient } from 'graphql-request'

export default function datoCMSAPI({ query, variables, preview = false }): Promise<any> {
  const graphqlUrl = 'https://graphql.datocms.com'
  const endpoint = preview ? `${graphqlUrl}/preview` : graphqlUrl

  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${process.env.DATOCMS_API_TOKEN}`
    }
  })

  return client.request(query, variables)
}
