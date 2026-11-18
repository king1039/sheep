Page({
  data: {
    statusBarHeight: 20,
    experience: 68,
    experienceMax: 100,
    experiencePercent: 68,
    intimacy: 68,
    mood: 82,
    isEnlarged: false,
    speechText: "",
    randomLines: ["今天也见到你啦", "咩~", "要摸摸我吗", "我在等你哦"]
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
    }, 360);
  },

  showFeatureToast: function (event) {
    var feature = event.currentTarget.dataset.feature;
    wx.showToast({
      title: feature + "功能开发中",
      icon: "none",
      duration: 1600
    });
  }
});
