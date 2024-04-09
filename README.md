# d3bu.net

電子計算機部公式ウェブサイト

[![container](https://github.com/KCCTdensan/website/actions/workflows/container.yml/badge.svg)](https://github.com/KCCTdensan/website/actions/workflows/container.yml)

## Development

To setup the dev environment, install dependencies first:

```bash
$ bun i
```

Add `API_BASE` to `.env.local` file:

```bash
API_BASE=https://example.com
```

Run `dev` to start the dev environmnet:

```bash
$ bun dev
```

## Build

Set `API_BASE` and `PLATFORM` in `.env` or `.env.local`:
```bash
API_BASE=https://example.com
PLATFORM=production-ssr
```

To build the website, run:

```bash
$ bun run build
```
