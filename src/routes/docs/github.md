---
title: githubセットアップガイド
date: 2021-06-15
author: 山T
---

# githubセットアップガイド

2021年7月10日時点の情報です。
どうしても動かなかったら山Tまで。

## 用語解説

リポジトリ：gitではコードを保存する場所を指す。
ローカル：主に自分や他の開発者のコンピュータ。
リモート：ローカルからのの情報を管理するコンピュータ。
ローカルリポジトリ：ローカルにあるリポジトリ。開発者の端末の分だけある。
リモートリポジトリ：リモートにあるリポジトリ。一つしかない。

### git

gitとはよく使われている分散型バージョン管理ツールです。
また、リモートサーバーを使う事で複数人での開発も可能です。

### github

githubは先ほど紹介したgitのリモートサーバーで無料で使うことができるツールです。
自分でリモートサーバを建てるのはめんどくさいですがgithubを利用することで簡単にリモートリポジトリが作れ、
他の人との共同開発も簡単にできるようになります。

この記事ではgithubを使った方法について書きます。


## 実行環境

OS: debian 11.0
シェル: bash

## gitのインストール

gitをインストールします。

```bash
sudo apt-get update
sudo apt-get install -y git
```

gitに管理させるディレクトリを作ります。

```bash
mkdir ~/dhirekutori
```

これでとりあえずパソコン側の準備が終わったのでgithubに移動します。

## githubのセットアップと使い方

まずgithubのアカウントを作ります。
"sign up"のボタンから作ります。
その後、画面にある"Repositories"のところにある"New"を押してリポジトリを作ります。
リポジトリを作る画面では"Repository name"というところにはリポジトリの名前を、"Description"のところには説明を入れますが説明はなくても大丈夫です。
その下の"Public"か"Private"を選ぶところでリポジトリを公開するか(Public)、非公開(Private)にするかを選びます。
その他は何もさわらなくても大丈夫です。

入力ができたら"Create repository"を押してリポジトリを作ってください。

今回は"ripojitori"というリポジトリを作って進めることにします。

リポジトリができたらQuick setupの画面になると思います。そこのHTTPSのボタンを押してその右側のリンクをコピーしておいてください。

## ローカルリポジトリのセットアップ(clone, init)

"git clone"コマンドでリモートリポジトリをローカルに落とせます。
試しにやってみると君がクローンしようとしたリポジトリは空だよと怒られます。
その通りですね（笑）
ただ、共同開発などをする際は元々リモートリポジトリに何か入っていることが多いのでこのコマンドも覚えておいてください。

```bash
git clone "さっきコピーしたリンク"
> warning: You appear to have cloned an empty repository.
```

まず何かファイルを作ってみましょう。
とりあえず"# リポジトリ名"という文字が入ったテキストファイルを作ってみます。
これでREADME.mdには"# リポジトリ名"という文字が入っている状態です。(※ちなみにリポジトリ名やディレクトリ名は自分のでつけて良いですが、"README.md"の名前は変えないでください)

このままではgithubに追加できないのでまず現在のディレクトリ(この解説どうりならさっき作った~/ripojitori)を"git init"コマンドで初期化します。

下の文では/home/densan/.gitに空のgitリポジトリを初期化したよ〜と言っています。

```bash
echo "# リポジトリ名" > README.md
git init
> Initialized empty Git repository in /home/densan/dhirekutori/.git/
```


## ローカルリポジトリのセットアップ(add, commit ,push)

まず"git add"コマンドでにさっき書いたREADME.mdをgitに管理してもらいます。

```bash
git add README.md
```

次にgitではコミットということをしなければいけません。
コミットとはでバックアップをつくるようなものでコミットするとその時点でのファイルの内容が記録されます。
また、何度かコミットしている場合過去のコミットに戻ることもできます。
これによりバージョン管理ができるのです。

ターミナルでは"git commit"コマンドとオプションの"-m"を基本的につけます。
"-m"はコメントをつけるという意味で実際にコミットするときは下のようにしてください。

```bash
git commit -m "コミット名"
```

すると長い文章がでてくると思いますがおそらくこのように書かれているはずです。
おまえはだれやねんと...

```bash
> Author identity unknown

*** Please tell me who you are.
```

なので教えてあげましょう

```bash
git config --global user.name "最初に作ったユーザー名"
git config --global user.email "最初に作ったアカウントのメールアドレス"
```

するとこのような文章が返ってきます。
コミット成功です！

```bash
> 1 file changed, 1 insertion(+)
```

では最後にこのコミットをプッシュしましょう。
プッシュとはリモートリポジトリにコミットを送ることです。
まずリモートリポジトリを登録しなければなりません。
"git remote add origin"コマンドでリモートリポジトリを設定します。
"git push origin master"コマンドオプションの"-u"を初回プッシュのみつけてください。
この時にユーザー名とパスワードを聞かれると思うので入力してください。

```bash
git remote add origin https://github.com/"ユーザー名"/"リポジトリ名".git
git push -u origin master
```

このように返ってくればプッシュは成功です。
github.comでもREADME.mdがあることが確認できると思います。

```bash
> * [new branch]      master -> master
Branch 'master' set up to track remote branch 'master' from 'origin'.
```

## プッシュ2回目以降の使い方

これだけで大丈夫です。

```bash
git add "新しいファイルもしくは変更したファイル"
git commit -m "コミット名"
git push
```

## ローカルリポジトリを更新したいとき

他の人と共同開発している場合はリモートリポジトリが更新されているかもしれません。
その更新をとってくるには"git pull"を使ってください

```bash
git pull https://github.com/"ユーザー名"/"リポジトリ名".git
```

## なぜかうまくいかないとき
上の文に書いている""は不要です！実際は入力しないでください。
