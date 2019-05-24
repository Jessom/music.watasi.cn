# music
一个仿网易云音乐mac客户端的程序<br />
以后有空，可能会接入`网易云音乐`或`其他音乐软件`的API(仅仅是`可能`，因为我`特别懒`)

#### Build Setup

``` bash
git clone git@github.com:Jessom/music.watasi.cn.git

cd music.watasi.cn

yarn

yarn run dev

yarn run build
```

## router
```bash
┌─ /
├  ├─ find        # 发现音乐
├  ├   ├─ recommend   # 个性推荐
├  ├   ├─ songs       # 歌单
├  ├   ├─ radio       # 主播电台
├  ├   ├─ ranking     # 排行榜
├  ├   ├─ singer      # 歌手
├  ├   └─ new         # 最新音乐
├  ├─ fm          # 私人FM
├  ├─ video       # 视频
├  ├─ friend      # 朋友
├  ├─ download    # 下载管理
├  ├─ cloud       # 音乐云盘
├  └─ radio       # 我的电台
└─ /lyrics		# 歌词
```
