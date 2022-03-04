---
title: "Pepper開発環境構築"
date: 2021-05-13
dateUpd: 2021-07-03
author: 山D
---

# Pepper開発環境構築

どうしても動かなかったら山Dまで

まず，[WSLのセットアップ](/wsl2-setup)を完了させておいてください。

### 必須パッケージのインストール

```bash
sudo apt update
sudo apt install -y curl python2 libpython2.7
```

## 実際に環境を構築する

### SDKのダウンロードと展開

```bash
sudo curl -fsSL https://community-static.aldebaran.com/resources/2.5.10/Python%20SDK/pynaoqi-python2.7-2.5.7.1-linux64.tar.gz | sudo tar xz --no-same-owner -C/opt
sudo ln -s pynaoqi-python2.7-2.5.7.1-linux64 /opt/pynaoqi
sudo chmod 755 -R /opt/pynaoqi/lib/python2.7/site-packages
```

### PATH通したりその他諸々

```bash
echo 'export PYTHONPATH=/opt/pynaoqi/lib/python2.7/site-packages:${PYTHONPATH}' >> ~/.profile
. ~/{.bashrc,.profile}
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
