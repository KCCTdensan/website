FROM node:lts-alpine as builder

RUN corepack enable

WORKDIR /work

COPY --link ["pnpm-lock.yaml", "package.json", "./"]

RUN pnpm i --frozen-lockfile --aggregate-output

COPY --link . ./

RUN pnpm build

RUN git submodule update --init && \
    pnpm build

# distroless is not supported in ARMv7
#FROM gcr.io/distroless/nodejs:16 as runner
FROM node:lts-alpine as runner
WORKDIR /app

COPY --from=builder /work/server ./server
COPY --from=builder /work/node_modules ./node_modules
COPY --from=builder /work/package.json ./package.json

ENV PLATFORM="container-ssr"

CMD ["pnpm", "serve"]
