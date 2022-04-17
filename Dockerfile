ARG WORKDIR="/work"

FROM node:lts-alpine as builder
ARG WORKDIR
WORKDIR $WORKDIR
RUN apk add --no-cache git curl
RUN curl -fsSL https://unpkg.com/@pnpm/self-installer | node
COPY . ./
RUN git submodule update --init
RUN pnpm install
RUN pnpm ssr:build
RUN pnpm prune --prod

FROM gcr.io/distroless/nodejs:16 as runner
ARG WORKDIR
WORKDIR $WORKDIR
COPY --from=builder $WORKDIR/build ./build
COPY --from=builder $WORKDIR/node_modules ./node_modules
ENV API_BASE=""
ENV PLATFORM="container-ssr"
CMD ["build"]
