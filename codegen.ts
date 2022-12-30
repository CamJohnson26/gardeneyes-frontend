
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      "https://possible-gnu-20.hasura.app/v1/graphql": {
        "headers": {
          "x-hasura-role": "admin",
          "x-hasura-admin-secret": ""
        }
      }
    }
  ],
  // documents: "src/**/*.tsx",
  generates: {
    "src/gql/": {
      preset: "client",
      plugins: []
    },
    "./graphql.schema.json": {
      plugins: ["introspection"]
    }
  }
};

export default config;
