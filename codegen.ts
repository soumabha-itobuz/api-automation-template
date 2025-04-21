import type { CodegenConfig } from '@graphql-codegen/cli'
 
const config: CodegenConfig = {
   schema: 'https://graphqlzero.almansi.me/api',
   documents: ['./e2e/graphql/*.ts'],
   generates: {
      './e2e/gql/': {
        preset: 'client',
      }
   }
}
export default config