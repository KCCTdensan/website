FROM oven/bun:1 as base

WORKDIR /usr/src/app

# Install dependencies into temp directory
FROM base as deps

RUN mkdir -p /temp/dev
COPY package.json bun.lockb /temp/dev/
RUN cd /temp/dev && bun install --frozen-lockfile

RUN mkdir -p /temp/prod
COPY package.json bun.lockb /temp/prod/
RUN cd /temp/prod && bun install --frozen-lockfile --production

# Build the app
FROM base as build

COPY --from=deps /temp/dev/node_modules node_modules
COPY . .

ENV NODE_ENV=production
RUN bun run build

# Finally, build the production image with minimal footprint
FROM base AS release

WORKDIR /app

# You only need these for production
COPY --from=deps /temp/prod/node_modules node_modules
COPY --from=build /usr/src/app/build/ build/
COPY --from=build /usr/src/app/package.json .

USER bun
EXPOSE 8080/tcp
ENV NODE_ENV=production
ENV PORT=8080

ENTRYPOINT ["bun", "start"]

