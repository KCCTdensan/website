---
title: Cloudflared
date: 1628952877912
dateUpd: 1640679190738
noRobots: true
---

# Cloudflared

## サーバー側

```
# cloudflared tunnel login
# cloudflared tunnel create hoge
# cloudflared tunnel route dns hoge hoge.fuga.net # ここらへんは手動でやってもいい
# cloudflared tunnel route dns hoge hoge-ssh.fuga.net # 上に同じく
# vim ~/.cloudflared/config.yaml
# cloudflared service install
```

## config.yaml

```yaml
tunnel: piyo
credentials-file: /root/.cloudflared/piyo.json

ingress:
- hostname: hoge.fuga.net
  service: http://localhost:80
- hostname: hoge-ssh.fuga.net
  service: ssh://localhost:22
- service: http_status:404
```

## クライアント側

```
% cloudflared access ssh-config --hostname hoge-ssh.d3bu.net
```

## 参考

- https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/install-and-setup/tunnel-guide
- https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/configuration/configuration-file/ingress
- https://zenn.dev/grarich/articles/4fcf016080fbcb
