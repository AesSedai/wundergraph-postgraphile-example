### Running

Simply run `docker compose up`

If you need to reset the database, then stop docker compose with ctrl+c (if running), then run `docker compose down` and the database will re-initialize.

Visit the postgraphile graphiql url at http://localhost:5000/graphiql
Visit the wundergraph graphiql url at http://localhost:9991/graphql
Expected error: `Schema is invalid: Interface field pg_Node.nodeId expected but Query does not provide it.`

Additionally, that error prevents wundergraph from compiling any operations.

See the `wundergraph/.wundergraph/generated/wundergraph.schema.graphql` to inspect the schema.

