---
name: ポスグレの設定
date: 1640677807960
dateUpd: 1640679029558
noRobots: true
---

# ポスグレの設定

メモ程度．
debian bullseye, pgdb v13を想定

## リポジトリ

debian公式リポジトリのパッケージは枯れすぎている．
プロジェクトのリポジトリを使う．

```bash
$ curl -L https://www.postgresql.org/media/keys/ACCC4CF8.asc | doas gpg --dearmor -o /usr/share/keyrings/postgr
esql.gpg
```

そしたら`/etc/apt/sources.list.d/postgresql.list`の内容を以下のようにする．

```
deb [signed-by=/usr/share/keyrings/postgresql.gpg] http://apt.postgresql.org/pub/repos/apt bullseye-pgdg main
```

以下を忘れないように実行．

```bash
$ sudo apt update
```

## インストール

```bash
$ sudo apt install postgresql postgresql-common
```

## 設定

[PGTune](https://pgtune.leopard.in.ua)を使う．
生成したものを設定ファイルの末尾に追加する．

## 権限とか

デフォルトではパスワードで接続できない．

```diff
- local all all peer
+ local all all md5

- local replication all peer
+ local replication all md5
```

## いざ接続

する前にロールを作成する．

```bash
$ sudo -u postgres psql
```

デフォルト設定だと`postgres`に関してはpeer認証なのでパスワードは聞かれない．

```sql
> CREATE ROLE hoge WITH LOGIN PASSWORD 'hogepass';
```

以上．

## はじめてのDB

`ADMIN`のあるロールで操作(さっきの`postgres`で大丈夫)

```sql
> CREATE DATABASE hogedb WITH OWNER hoge;
```

hogeはhogedbの中では好き勝手ができる．
