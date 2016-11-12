Page({
    data:{},
    onLoad:function(){
        var me = this;
        wx.getUserInfo({
            success: function(res) {
                var userInfo = res.userInfo;
                me.setData({
                    userInfo:{
                        avatar:userInfo.avatarUrl,
                        name:userInfo.nickName
                    }
                })
            },
            fail:function(err){}
        })
    }
})
