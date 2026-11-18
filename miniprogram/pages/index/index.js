Page({
  data: {
    statusBarHeight: 20,
    level: 1,
    experience: 0,
    experienceMax: 100,
    experiencePercent: 0,
    isEnlarged: false,
    speechText: "今天也见到你啦",
    randomLines: ["咩~", "你好呀", "摸摸我吧", "今天开心吗"]
  },

  onLoad: function () {
    var systemInfo = wx.getSystemInfoSync();
    this.setData({
      statusBarHeight: systemInfo.statusBarHeight || 20
    });
  },

  onUnload: function () {
    if (this.sheepTimer) {
      clearTimeout(this.sheepTimer);
      this.sheepTimer = null;
    }
  },

  onSheepTap: function () {
    var lines = this.data.randomLines;
    var index = Math.floor(Math.random() * lines.length);

    this.setData({
      isEnlarged: true,
      speechText: lines[index]
    });

    if (this.sheepTimer) {
      clearTimeout(this.sheepTimer);
    }

    var that = this;
    this.sheepTimer = setTimeout(function () {
      that.setData({
        isEnlarged: false
      });
      that.sheepTimer = null;
    }, 420);
  }
});
