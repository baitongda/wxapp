var optionList = [
	{
		name:'选择城市',
		id:''
	},
	{
		name:"北京市",
		id:'111'
	}
	
];
var type =  [
		{
			name:'选择类型',
			id:''
		},
		{
			name:"前四后八",
			id:'21'
		},
		{
			name:"托运车",
			id:'22'
		}
	];
var size =  [
		{
			name:'选择长度',
			id:''
		},
		{
			name:"1222",
			id:'31'
		},
		{
			name:"1222",
			id:'32'
		}
	]
Page({
	data:{
		textHint:"欢迎卡友添加您的车辆相关信息，以便于我们帮您更精准的配货和让货主更加了解您。",
		hiddenBoolean:true,
		className:['header'],
		infoList:[
			{
				information:'出发地',
				select:'请选择地点',
				bindBtn:'address'
			},{
				information:'目的地',
				select:'请选择地点',
				bindBtn:'address'
			},{
				information:'车辆登记地点',
				select:'请选择地点',
				bindBtn:'address'
			},{
				information:'货箱类型',
				select:'请选择货箱类型',
				bindBtn:'carType'
			},{
				information:'货箱长度',
				select:'请选择货箱长度',
				bindBtn:'carExtent'
			}
		],
		options:'',
		screenBtn:'',
		infoId:'',
		checkHtml:""
	},
	address:function(e){
		var addId = e.currentTarget.id;
		if(addId <=2){
			this.setData({
				infoId:addId,
				options : [
					{
						name:'选择省份',
						id:''
					},
					{
						name:"北京",
						id:'11'
					},
					{
						name:"天津",
						id:'12'
					}
				],
				hiddenBoolean:!this.data.hiddenBoolean,
				screenBtn:'cityBtn'
			});

		}
	},
	carType:function(e){
		var addId = e.currentTarget.id;
		if(addId == 3){
			this.setData({
				infoId:addId,
				options :type,
				hiddenBoolean:!this.data.hiddenBoolean,
				screenBtn:'carBtn'
			});
		}
	},
	carExtent:function(e){
		if(e.currentTarget.id == 4){
			this.setData({
				infoId:e.currentTarget.id,
				options :size,
				hiddenBoolean:!this.data.hiddenBoolean,
				screenBtn:'carBtn'
			});
		}
	},
	hiddenBtn:function(e){
		this.setData({
			hiddenBoolean:!this.data.hiddenBoolean
		})
	},
	cityBtn:function(e){
		var dataId = e.currentTarget.id;
		if(dataId != ''){
			this.setData({
				options : optionList,
				screenBtn:'overBtn'
			})
		}
	},
	overBtn:function(e){
		var dataId = e.currentTarget.id,
			arr = this.data.infoList[this.data.infoId];
		if(dataId != ''){
			this.setData({
				hiddenBoolean:!this.data.hiddenBoolean,
				screenBtn:''
			})
		}
	},
	carBtn:function(e){
		var me;
		if(this.data.infoId == 3){
			me = type;
		}else{
			me = size;
		}
		this.setData({
			hiddenBoolean:!this.data.hiddenBoolean,
			screenBtn:''
		})
	}
})