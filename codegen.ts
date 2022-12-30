
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      "https://possible-gnu-20.hasura.app/v1/graphql": {
        "headers": {
          "x-hasura-role": "admin",
          "x-hasura-admin-secret": "Kf5qtn2JMKQxjYl8v77PoS93mrf9JEM0azeZLfWYsbP9WwnKpngmwOEzU2jkXfqu"
        }
      }
    }
  ],
  documents: "src/**/*.graphql",
  generates: {
    "src/gql/graphql.tsx": {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
    },
    "./graphql.schema.json": {
      plugins: ["introspection"]
    }
  }
};

export default config;
