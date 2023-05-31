FROM node:alpine
LABEL description="Instant high-performance GraphQL API for your PostgreSQL database https://github.com/graphile/postgraphile"

# Install PostGraphile and PostGraphile connection filter plugin
RUN npm install -g \ 
    postgraphile \
    postgraphile-plugin-connection-filter \
    @graphile-contrib/pg-simplify-inflector \
    @graphile/subscriptions-lds

EXPOSE 5000
ENTRYPOINT ["postgraphile", "-n", "0.0.0.0"]
# CMD ["postgraphile", "-n", "0.0.0.0", "--connection", ${PG_URL}, "--owner-connection", ${PG_OWNER_URL}, "--schema", "public","--watch","--enhance-graphiql","--live", " --append-plugins", "@graphile/subscriptions-lds,@graphile-contrib/pg-simplify-inflector", "--allow-explain", "--dynamic-json", "--no-setof-functions-contain-nulls","--enable-query-batching"]
