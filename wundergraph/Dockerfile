FROM docker.io/node:18-alpine
# This is the public node url of the wundergraph node you want to include in the generated client
ARG wg_public_node_url=http://localhost:9991

WORKDIR /app

COPY package.json package-lock.json /app/
# We place the binary in /usr/bin/wunderctl so we can find it without a relative path
ENV CI=true WG_COPY_BIN_PATH=/usr/bin/wunderctl
# Ensure you lock file is up to date otherwise the build will fail
RUN npm ci --prefer-offline --no-audit
# Copy the .wundergraph folder to the image
COPY .wundergraph ./.wundergraph

# We set the public node url as an environment variable so the generated client points to the correct url
# See for node options a https://docs.wundergraph.com/docs/wundergraph-config-ts-reference/configure-wundernode-options and
# for server options https://docs.wundergraph.com/docs/wundergraph-server-ts-reference/configure-wundergraph-server-options
ENV WG_NODE_HOST=0.0.0.0 WG_PUBLIC_NODE_URL=${wg_public_node_url}
# RUN wunderctl generate --wundergraph-dir=.wundergraph
# Listen to all interfaces, 127.0.0.1 might produce errors with ipv6 dual stack
ENV WG_NODE_HOST=0.0.0.0
# Expose only the node, server is private
EXPOSE 9991
CMD wunderctl up --wundergraph-dir=.wundergraph