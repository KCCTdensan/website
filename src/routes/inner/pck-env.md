---
title: PC甲子園 環境構築 @演習室
date: 1631320827350
dateUpd: 1640679496220
noRobots: true
---

# PC甲子園 環境構築 @演習室

## VSCode

**[VSCode](https://code.visualstudio.com/sha/download?build=stable&os=win32-x64-user)**

## コンパイラの使い方

まず、コードを保存したフォルダを表示する。
そしてShiftキーを押しながら何も無い所を右クリックして

![open cmd here](https://i.imgur.com/WsHKMJy.png)

コマンドウィンドウをここで開いてください。

```bash
C:\\Users\\densanbu\\Desktop>g++ hoge.cpp
C:\\Users\\densanbu\\Desktop>.\\a.exe
```

こんな感じで使える。細かいところは先輩に聞いてください。

## Windowsを起動する

電源起動→F9連打  
2行目のWindowsのやつを矢印キーで選択してEnter  

**USER: `densanbu`**  
**PASS: `kosen`**

## ブラウザを入れる

Chrome/Firefoxを入れる。

InternetExplorer(eの水色のロゴ)でchromeと検索
ダウンロードしたやつをクリックしてインストール

## コンパイラをインストール

細かいとこは気にせずに。

https://sourceforge.net/projects/mingw/files/Installer/mingw-get-setup.exe/download

![mingw-get](https://i.imgur.com/Mo8RuG9.png)

適当に"次へ"的なやつを連打する。
そうするとインストールが完了する。

しかし実はこれはコンパイラをインストールするためのソフトのインストーラで，まだコンパイラ本体はインストールできていない。

なので次こそはコンパイラをインストール。

(勝手に開かれるウィンドウを閉じた人は)先ほどインストールしたソフトのショートカットがデスクトップに表示されてるはずなので，それをクリック。

![mingw-install](https://i.imgur.com/zKldKQB.png)

![mingw-install-mark](https://i.imgur.com/jkJruSk.png)

こんな感じで，

- `mingw-developer-toolkit`
- `mingw32-base`
- `mingw-gcc-g++`
- `msys-base`

にチェックする。
(何個かは勝手にチェックされるはず。)

![mingw-install-checked](https://i.imgur.com/Lymfn3x.png)

それが終わったら、その変更を適用する。

![mingw-install-apply](https://i.imgur.com/hlDQsl4.png)

左上のメニューから，`Apply Changes`をクリック。
ほんで出てきたウィンドウの`Apply`ボタンを押す。
するとインストールが始まります。

### PATH通す

これでコンパイラをインストールできました。
しかしこれをコマンドとして使用するためには*PATHを通す*という儀式を行わなければいけません。

ということで`Windown + R`で"ファイル名を指定して実行"というものを開いて，`control`と入力する。

![win-r-control](https://i.imgur.com/k9ltNv4.png)

Enterでコンパネが開くと思うので，検索欄に`path`と入力して，出てきた"環境変数を編集"をクリックする。

![control](https://i.imgur.com/UL5PksP.png)

Pathというやつを選択して"編集"をクリックする。

![path-overview](https://i.imgur.com/ruKIcDd.png)

こんな感じの画面が表示されるはず。
今後これを"タイプA"とする。
(内容は人によって変わるかも。)

![path-details](https://i.imgur.com/WWTl4jS.png)

場合によってはこんな感じかも。(これは"タイプB"とする。)

![path-details-2](https://i.imgur.com/zB6klhi.png)

### タイプAの人

"新規"を押して，`C:\MinGW\bin`を入力して，OKを連打してウィンドウを閉じる。
それだけ。

![path-config](https://i.imgur.com/BCCazFI.png)

### タイプBの人

![path-config-2](https://i.imgur.com/gimgeX0.png)

こんな感じ。
最後に`C:\MinGW\bin;`を入力する。
それで終わり。

### その後

タイプAもタイプBも一旦集合。てか今後手順が分かれることはないのでこれからは普通に読み進めてください。

さて，忘れていたかもしれませんがそろそろコンパイラのインストールが終わっているはずです。

![mingw-installed-log](https://i.imgur.com/G14Ts4A.png)

こんなふうに，"All changes were applied successfully;"と出ていたら成功です。
失敗してたら先輩に聞きましょう。

そこで一旦サインアウトします。(**これは儀式に必要な手順**)

![sign out](https://i.imgur.com/VV88QkY.png)

そしてもっかいログインします。

## コンパイラ検証編

正常にインストールできているか試します。

![win-r-cmd](https://i.imgur.com/RYXnq5Q.png)

これでコマンドプロンプトが起動します。

![cmd-gcc](https://i.imgur.com/ksHbv6G.png)

`gcc`とだけ打って，こんな感じのエラーが出てたら正解。
出てなかったら手を挙げてください。

## エディタ

VSCode入れましょう: [URL](https://code.visualstudio.com/sha/download?build=stable&os=win32-x64-user)

エディタの環境構築は近所の人に教えてもらいましょう。
