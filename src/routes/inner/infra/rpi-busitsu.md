---
title: ラズパイ部室モニタについて
date: 2022-03-13
noRobots: true
---

# ラズパイ部室モニタについて

リポジトリ : https://github.com/KCCTdensan/busitsu

## 仕様

温度，湿度を測る．

Prometheusのexporterっぽいやつを実装してる．

現状，rpi 4B`192.168.100.150(hiroshi)`で動作中．

## (裏)仕様

誰か直してください．

- ファイル(シリアル)を読むスレッドが落ちても何もしない為，センサが抜き差しされるごとに(プロセスの)再起動が必要
- フルのvibe-dに依存してしまっている為ビルドが重い(4Bでも重い)

## インストール

```
# apt-get update
# apt-get install -y runit runit-run git ldc dub
# apt-get install -y build-essential zlib1g-dev libssl-dev # vibe-d
# git clone https://github.com/KCCTdensan/busitsu /opt/busitsu
# cd /opt/busitsu/rpi
# dub build -b release # クッソ時間がかかる
# mkdir -p /etc/sv/busitsu
# touch /etc/sv/busitsu/run
# chmod +x /etc/sv/busitsu/run
```

`/etc/sv/busitsu/run`を以下のようにする．

```
#!/usr/bin/env sh
exec /opt/busitsu/rpi/busitsu
```

また，`/opt/busitsu/rpi/source/busitsu/app.d`の`/dev/ttyUSB0`を適当なパスに修正する．
(当然，編集後にはビルドが必要)

最後にサービスを有効化・起動させる．

```
# ln -s /etc/sv/busitsu /etc/service/busitsu
```

## Prometheusの設定

`prometheus.yml`の`scrape_configs:`に以下を追記する．

```
  - job_name: 'busitsu'
    static_configs:
    - targets: ['hiroshi.d3bu.net:8080']
```

サービスをreloadすれば完成．

## (おまけ) Grafanaの設定

`busitsu_temp{}`と`busitsu_humid{}`を使う．
