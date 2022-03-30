---
title: ラズパイでk0sクラスタ構築
date: 2022-03-08
dateUpd: 2022-03-10
author: 山D
---

# ラズパイでk0sクラスタ構築

やったのでメモ．

## ラズパイのセットアップ

自動化って何

まず，SDカードを用意し，[raspi.debian.net](https://raspi.debian.net/tested-images/)から適切なイメージのxzアーカイブをダウンロードする．
ここでは11(bullseye)を使用する．

### 1. イメージをSDカード(/dev/sd$x$)に焼く・$\dag\mathrm{rootfs}\dag$のマウント

```
# dd if=20220121_raspi_2_bullseye.img of=/dev/sdx status=progress
# mount /dev/sdx2 /mnt
```

### 2. ネットワークの設定

注意して適宜読み替えること．

まず，IPを固定する．

`/mnt/etc/network/interfadces.d/eth0`の`inet`を`auto`から`static`に変更する :

```
auto eth0
iface eth0 inet static
  address 192.168.hoge.fuga/24
  gateway 192.168.hoge.1
iface eth0 inet6 auto
```

無線接続を考えているのであれば`wpa_supplicant.conf`を用意すればよさげ．

次に，resolv.confを置く．
raspbianとかを使ってるなら必要無いかも．

`/mnt/etc/resolv.conf`を次のようにする :

```
nameserver 192.168.hoge.1
nameserver 1.1.1.1
```

最後に，hostnameを設定する．
これはシェルで操作する時にわかりやすくするため．

`/mnt/etc/hostname`を編集する．

### 3. sshの設定

今回はrootでもsshが使えるように設定していく．

まず，`/mnt/etc/ssh/sshd_config`を編集する :

```diff
--- /mnt/etc/ssh/sshd_config
+++ new
@@ -15 +15 @@
-#Port 22
+Port 22
@@ -34 +34 @@
-#PermitRootLogin prohibit-password
+PermitRootLogin prohibit-password
```

次に，公開鍵を登録する．
鍵の作成方法については各自ggること．

```
# mkdir -p /mnt/root/.ssh
# echo "ssh-xxxx xxxxxxxxxxxxxxxx" >> /mnt/root/.ssh/authorized_keys
```

### 4. sshdを有効化する

最初に$\dag\mathrm{rootfs}\dag$をアンマウントしている．

```
# umount /mnt
# mount /dev/sdx1 /mnt
# touch /mnt/ssh
# umount /mnt
```

これで，もうこのSDカードにしがらみは存在しない．
PCからぶっこ抜く．

### 5. 起動・接続

ラズパイのローカルIPを固定しsshdを有効化したので，(とくにトラブらない限り)完全にヘッドレス運用が可能．
ということでSDカードとLANケーブルを刺して電源を投入．

しばらく待ってpingが通るようであれば，sshで接続する．

```
% ssh -i /path/to/priv_key -p 22 root@192.168.hoge.fuga
```

## クラスタの構築(k0sctl)

これを使うと楽らしい．(実際楽だった)

まだ完全な理解に至っていないのでいろいろ不正確かも．

### 1. 作業用PCにk0sctlを入れる

実際にやるときはgithub([k0sproject/k0sctl](https://github.com/k0sproject/k0sctl#installation))を参照のこと．

現状，goが動く環境で

```
% go install github.com/k0sproject/k0sctl@latest
```

とするとよい(らしい)．

### 2. 設定する

ここからはラズパイ(マスターノードを含む)ではなく，作業用の環境で実行する．

実際にやるときは[docs.k0sproject.io](https://docs.k0sproject.io/v1.23.3+k0s.1/k0sctl-install/)を参照．

```
% k0sctl init > k0sctl.yaml
```

でk0sctlの設定の雛形が吐かれるので，これを編集する．
このファイルはk0sのノード毎の設定とは別物なので注意．

できたら実機にデプロイする．

```
% k0sctl apply --config k0sctl.yaml
```

しばらく(プロンプトが帰ってくるまで)待つ．

終わったらkubeconfigを吐かせる．
これによって`kubectl`が使えたりする．

```
% k0sctl kubeconfig > kubeconfig
```

## 蛇足

ノードを全てラズパイで構築した場合，k0sctl applyでそこそこ時間がかかった．
