---
title: "Nodejs環境構築"
date: 2021-06-03
dateUpd: 2021-07-15
author: 山D, 山T
---

# Nodejs環境構築

どうしても動かなかったら山Tまで

まず，[WSLのセットアップ](/wsl2-setup)を完了させておいてください。

## 必須パッケージのインストール
```
sudo apt-get update
sudo apt-get install -y nodejs npm
```
ここで入るものはバージョンが古すぎるのでバージョンを上げる。

## 安定版のインストール
```
sudo npm install n -g
sudo n stable
```

## 古いnodeを消す
ややこしいし、使わないので消しましょう！
```
sudo apt purge -y nodejs npm
```

## シェルへの再ログインとバージョン確認
```
exec $SHELL -l
node -v
```
これでバージョンが14以降なら大丈夫です！

## 最新版にしたかったら
```
sudo n latest
```
で最新版にできます。

## バージョンの切り替え
```
sudo n
```
```
ο node/14.17.0
    node/16.2.0

Use up/down arrow keys to select a version, return key to install, d to delete, q to quit
```
と打って出てくる上の画面の左端のoを矢印キーで移動させて'enter'で決定、'q'キャンセルできる。ちなみに'd'で選択したバージョンを消せる。
