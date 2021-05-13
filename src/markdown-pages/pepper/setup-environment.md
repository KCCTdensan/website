---
slug: "pepper/setup-environment"
title: "Pepper開発環境構築"
---

# Pepper開発環境構築

どうしても動かなかったら山Dまで

## WSLの有効化

[Windows10にWSLをインストールする | docs.microsoft.com](https://docs.microsoft.com/ja-jp/windows/wsl/install-win10#manual-installation-steps)

とりあえずこれ読んでWSLを使える状態にしちゃってください。  
途中何回か再起動が必要だったりするけど頑張って～

## ディストロを選択・ダウンロード

何もわからないのであればDebianでいいです。  
MicrosoftStoreで検索・ダウンロードします。

## (Debian)初期設定

Debian以外の人は雰囲気で頑張ってください。

### 起動

アプリ一覧のとこからDebianってやつを探して起動してください。

### sudoersの編集

sudo使う時にいちいちパスワード入力するのはダルいので設定を変えます。  
自分以外が使う可能性がある環境でこれをするのはお勧めしません。

ではまず

```bash
sudo visudo
```

とやって、

```
%sudo   ALL=(ALL:ALL) ALL
```

の行(だいたい23行目あたりにある)を

```
%sudo   ALL=NOPASSWD: ALL
```

と書き変えてください。

`Ctrl x`
`y`
`Enter`
で保存して終了できます。

### 必須パッケージのインストール

```bash
sudo apt update
sudo apt install -y curl python2 libpython2.7
```

## 実際に環境を構築する

### SDKのダウンロードと展開

```bash
sudo curl -L https://community-static.aldebaran.com/resources/2.5.10/Python%20SDK/pynaoqi-python2.7-2.5.7.1-linux64.tar.gz | tar zx -C /opt
sudo ln -s pynaoqi-python2.7-2.5.7.1-linux64 /opt/pynaoqi
```

### PATH通したりその他諸々

```bash
echo 'export PYTHONPATH=/opt/pynaoqi/lib/python2.7/site-packages:${PYTHONPATH}' >> ~/.profile
echo 'alias ll="ls -l"; alias la="ls -Al"' >> ~/.bashrc
. ~/{.bashrc,.profile}
ln -sf /mnt/c/Users/$(cmd.exe /c "SET /P X=%USERNAME%<NUL" 2>/dev/null) WinHome
```

## 動作確認

```bash
python2
```

Pythonのrepl(対話型のインターフェース)が起動します。

以下を打ってみてください。

```python
import qi
```

エラーが出ずにプロンプトが戻ってきましたか？  
戻ってきたなら成功です！
エラーを吐いたのなら失敗です！

## 動作確認(おまけ)

```python2
import qi
s = qi.Session()
s.connect("tcp://192.168.x.x:9559")
tts = s.service("ALTextToSpeech")
tts.say("布団が吹っ飛んだ")
```
