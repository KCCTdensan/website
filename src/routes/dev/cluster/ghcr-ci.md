---
title: GHCRでラズパイクラスタのCI
date: 2022-03-11
dateUpd: 2022-03-11
author: 山D
---

# GHCRでラズパイクラスタのCI

- self-hosted runnerを用意してpush時にクラスタにデプロイ
- クラスタでは，GHCRにあるprivateのnodeのイメージを使ってDeploymentを構成し，Serviceで公開する．
- 同じクラスタに別のDeploymentを用意して，cloudflaredを動かしてServiceを公開(tunnel)
