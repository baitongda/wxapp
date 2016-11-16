var app = getApp();
Page({
    data:{
        trucks:''
    },
    onLoad:function(options){
        var that = this;
        wx.request({
            url:app.ajaxurl,
            data:{
                c:'carlist',
                m:'AjaxGetCarList'
            },
            success:function(res){
                that.setData({
                    trucks:res.data
                })
            }
        })
    }
})
