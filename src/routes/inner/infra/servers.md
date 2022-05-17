---
title: 部室のサーバーについて
noRobots: true
---

# 部室のサーバーについて

部室のインフラ(笑)

mDNSは未設定．

## メインサーバー

- `192.168.100.100(SHOZABURO)`
- CPU : i5-4460 (4C4T)
- メモリ : DDR4 8GB
- `/`，`/boot/efi` : 2.5インチSATA SSD(256GB)x1，xfs
- `/data` : 3.5インチSATA HDD(1TB)x2，btrfs(Data/Metadata/System全部ミラーリング)

## k0sクラスタ

- `192.168.100.150(hiroshi)` : rpi 4B (arm64/4C4T/4GB)，32GB microSDカード
- `192.168.100.128(tako0)` : rpi 2B (armhf/4C4T/1GB)，32GB microSDカード
- `192.168.100.129(tako1)` : rpi 2B (armhf/4C4T/1GB)，32GB microSDカード
- `192.168.100.130(tako2)` : rpi 2B (armhf/4C4T/1GB)，32GB microSDカード
- `192.168.100.131(tako3)` : rpi 2B (armhf/4C4T/1GB)，32GB microSDカード
- `192.168.100.132(tako4)` : rpi 2B (armhf/4C4T/1GB)，32GB microSDカード(死亡)
- `192.168.100.133(tako5)` : rpi 2B (armhf/4C4T/1GB)，32GB microSDカード(死にかけ)
- `192.168.100.134(tako6)` : rpi 2B (armhf/4C4T/1GB)，16GB microSDカード(スロット破損)
