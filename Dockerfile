ARG WORKDIR="/work"

from node:lts-alpine as base
ARG WORKDIR
WORKDIR $WORKDIR

FROM base as builder
ARG WORKDIR
RUN apk add --no-cache git curl
RUN curl -fsSL https://unpkg.com/@pnpm/self-installer | node
COPY . ./
RUN git submodule update --init
RUN pnpm install
RUN pnpm ssr:build
RUN pnpm prune --prod

FROM base as runner
ARG WORKDIR
COPY --from=builder $WORKDIR/build ./build
COPY --from=builder $WORKDIR/node_modules ./node_modules
COPY --from=builder $WORKDIR/package.json ./package.json
ENV API_BASE=""
ENV PLATFORM="container-ssr"
ENTRYPOINT []
CMD ["npm", "run", "ssr:start"]
