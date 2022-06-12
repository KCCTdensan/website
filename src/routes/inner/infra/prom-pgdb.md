---
title: Prometheusとポスグレの連携
date: 1640675707270
dateUpd: 1640688562233
noRobots: true
---

# Prometheusとポスグレの連携

## promscale

https://github.com/timescale/promscale

prometheusとgrafanaの間に入ってくれる(grafana側からは普通のprometheusとして使える)．
debをgithubのリリースページから落とす．

`promscale.conf`をこうする．

```
PROMSCALE_DB_HOST="localhost"
PROMSCALE_DB_NAME="prometheus"
PROMSCALE_DB_PASSWORD="hogehoge"
PROMSCALE_DB_PORT="5432"
PROMSCALE_DB_SSL_MODE="allow"
PROMSCALE_DB_USER="prometheus"
```

また，`prometheus.yml`に以下を追記する．

```yaml
# Promscale
remote_write:
  - url: "http://localhost:9201/write"
    remote_timeout: 30s
    queue_config:
      capacity: 10000
      max_samples_per_send: 3000
      batch_send_deadline: 10s
      min_shards: 4
      max_shards: 200
      min_backoff: 100ms
      max_backoff: 10s
remote_read:
  - url: "http://localhost:9201/read"
    read_recent: true
```

## pgdb(v13を想定)に拡張を入れる

以下を`/etc/apt/sources.list.d/timescale.list`に書く．

```
deb [signed-by=/usr/share/keyrings/timescale.gpg] https://packagecloud.io/timescale/timescaledb/debian/ bullseye main
```

以下を実行 :

```bash
$ curl -L https://packagecloud.io/timescale/timescaledb/gpgkey | sudo gpg --dearmor -o /usr/share/keyrings/timescale.gpg
$ sudo apt update
$ sudo apt install timescaledb-2-postgresql-13
```

postgresql.confの

```
#shared_preload_libraries = ''  # (change requires restart)
```

の行を

```
shared_preload_libraries = 'timescaledb'        # (change requires restart)
```

とする．
ポスグレをrestartしてから対象のDBを作り，

```sql
> CREATE EXTENSION IF NOT EXISTS timescaledb;
```

する．
それっぽいのが出る．

## もう一度ポスグレをいじる

promscaleも開始前に一応migrate用のSQL走らせてくれるのだが，create roleしようとしやがる．<!-- ふざけんな -->

まあ動かなけりゃ話にならないのでしゃーなしの権限付与．

```sql
> ALTER ROLE prometheus WITH CREATEROLE;
```

## いけた

いけた

## Extensionの更新

たまに怒られる．

```
% doas -u postgres psql -x -d prometheus
> ALTER EXTENSION timescaledb UPDATE;
```

これでヨシ!

## サービスが何故か起動しない

引数も環境変数もユーザーも問題無いのに何故かsystemdのサービスでは起動できない場合がある(かもしれない)．

```
% PROMSCALE_DB_HOST="localhost" PROM... promscale & 
```

とすると起動できる．

<!--
### いけなかった: promscaleのmigrate

明らかに引数がまずい．
対症療法でやったけどまあ動けばいいでしょ(しかし動かない)．
バイナリはgithubのリリースページから落としてきた．

```bash
$ ./prom-migrator --start=0 --reader-url=http://localhost:9201/read --writer-url=http://localhost:9201/write --progress-enabled=false
```

それでも動かん．

やった後に気付いたが，これ現状動いてるやつをmigradteするやつなのでは．
-->

## 使ったファイル

- promscale
    - https://github.com/timescale/promscale/releases/download/0.7.1/promscale_0.7.1_Linux_x86_64.deb
- prom-migrator(使ってない)
    - https://github.com/timescale/promscale/releases/download/0.7.1/prom-migrator_0.0.3_Linux_x86_64

その他はdebian標準のやつ(postgresql-13はpg公式リポジトリのやつ)

## 参考

- https://docs.timescale.com/install/latest/self-hosted/installation-debian/#setting-up-the-timescaledb-extension
- https://docs.timescale.com/timescaledb/latest/how-to-guides/migrate-data/same-db/
