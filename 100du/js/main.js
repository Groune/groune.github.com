(function () {
	//切换城市
	(function () 
	{
		var aCity = document.getElementById('city').getElementsByTagName('a');
		for (var i = 0; i < aCity.length; i++) 
		{
			aCity[i].onclick=function () 
			{
				switchClass(this,'active');
			};
		};
	})();
	//选项卡
	(function () {
		var aOptions = getByClass('options');
		var aToption = getByClass('trip_option');
		for (var i = 0; i < aOptions.length; i++) 
		{
			switchTab(aOptions[i]);
			switchTab(aToption[i]);
		};
	})();

	//搜索框
	(function () {
		var oSearch = document.getElementById('search');
		var oMenu = getByClass("menu",oSearch)[0];
		var aMli = oMenu.getElementsByTagName('li');
		var oText = getByClass("text",oSearch)[0];
		var arrText = [
			'例如：荷棠鱼坊烧鱼 或 樱花日本料理',
			'例如：昌平区育新站龙旗广场2号楼609室',
			'例如：万达影院双人情侣券',
			'例如：东莞出事了，大老虎是谁？',
			'例如：北京初春降雪，天气变幻莫测'
		];
		var iNow = 0;
		oText.value = arrText[iNow];

		for (var i = 0; i < aMli.length; i++) 
		{
			aMli[i].index = i ;
			aMli[i].onclick = function () 
			{
				for (var j = 0, l = aMli.length; j < l; j++) {
					aMli[j].className='gradient_f8';
				};
				this.className='current';
				iNow = this.index;
				oText.value = (oText.value == arrText[iNow])? oText.value : arrText[iNow];
			}
		};

		oText.onfocus = function () 
		{
			if (this.value == arrText[iNow]) 
			{
				this.value = "";
			};
		};
		oText.onblur = function () 
		{
			if (this.value == "") 
			{
				this.value = arrText[iNow];
			};
		};
	})();

//update
	(function (){
		var oUpdate = document.getElementById('update');
		var oDiv = getByClass('wrap',oUpdate)[0];
		var oUl = oUpdate.getElementsByTagName('ul')[0];
		var oBtnUp = document.getElementById('updateBtnUp');
		var oBtnDown = document.getElementById('updateBtnDown');
		var height = 0;
		var iNow = 0;
		var timer = null;
		var arrData = [
			{ 'name':'萱萱', 'time':4, 'title':'那些灿烂华美的瞬间', 'url':'http://www.miaov.com/2013/' },
			{ 'name':'畅畅', 'time':5, 'title':'广东3天抓获涉黄疑犯', 'url':'http://www.miaov.com/2013/#curriculum' },
			{ 'name':'萱萱', 'time':6, 'title':'国台办回应王郁琦', 'url':'http://www.miaov.com/2013/#about' },
			{ 'name':'畅畅', 'time':7, 'title':'那些灿烂华美的瞬间', 'url':'http://www.miaov.com/2013/#message' },
			{ 'name':'萱萱', 'time':8, 'title':'那些灿烂华美的瞬间', 'url':'http://www.miaov.com/2013/' },
			{ 'name':'畅畅', 'time':9, 'title':'广东3天抓获涉黄疑犯', 'url':'http://www.miaov.com/2013/#curriculum' },
			{ 'name':'萱萱', 'time':10, 'title':'国台办回应王郁琦', 'url':'http://www.miaov.com/2013/#about' },
			{ 'name':'畅畅', 'time':11, 'title':'那些灿烂华美的瞬间', 'url':'http://www.miaov.com/2013/#message' }
		];
		var str = '';
		for (var i = 0; i < arrData.length; i++) 
		{
			str += '<li><a class="author" href="' +arrData[i].url+ '">' +arrData[i].name+ '</a><em>'+ arrData[i].time +'分钟前</em><a href="'+ arrData[i].url +'">写了一篇新文章：'+ arrData[i].title +'…</a></li>';			
		};
		str += str;
		oUl.innerHTML = str;
		height = oUl.getElementsByTagName('li')[0].offsetHeight;

		timer = setInterval(function () 
		{
			doMove(1);
		}, 5000);

		function doMove (num)
		{
			iNow += num;
			//num为负，向上滚动。第length/2+1个li展示过后再重定位ul.top=0；同时设iNow=-1;
			//即改变iNow的取值范围为[-1,-8];
			if (Math.abs(iNow) > arrData.length ) 
			{
				iNow = -1;
				oUl.style.top = 0*height + 'px';
			};
			if (iNow > 0) 
			{
				iNow = -arrData.length+1;
				oUl.style.top = -arrData.length*height + 'px';
			};
			startMove(oUl,'top',height*iNow);
		}
		oUl.onmouseover = function () 
		{
			clearInterval(timer);
		};
		oUl.onmouseout = function () 
		{
			timer = setInterval(function () 
			{
				doMove(-1);
			}, 4000);
		};
		oBtnUp.onclick = function () 
		{
			clearInterval(timer);
			iNow += -1;
			doMove(-1);
			timer = setInterval(function () 
			{
				doMove(-1);
			}, 4000);
		};
		oBtnDown.onclick = function () 
		{
			clearInterval(timer);
			iNow += 1;
			doMove(1);
			timer = setInterval(function ()
			{
				doMove(1);
			}, 4000);
		};
	})();
	//日历信息显示隐藏，bug：由于对话框三角引起的today_info区域闪烁
	(function () {
		var oActivity = getByClass('activity')[0];
		var oInfo = getByClass('today_info',oActivity)[0];
		var oInfoImg = oInfo.getElementsByTagName('img')[0];
		var oInfoTitle = oInfo.getElementsByTagName('h3')[0];
		var oInfoCon = oInfo.getElementsByTagName('p')[0];
		var aDay = oActivity.getElementsByTagName('ol')[0].getElementsByTagName('li');
		for (var i = 0; i < aDay.length; i++) 
		{
			aDay[i].onmouseover = (function () 
			{
				return showInfo;
			})();
		};
		function showInfo () 
		{
			var oInfoData = {};
			var oImg = this.getElementsByTagName('img')[0];
			if (!oImg)  { return ; }
			oInfoData.height= 108;
			oInfoData.week=['MON','TUE','WED','THU','FRI','SAT','SUN'];
			oInfoData.left = this.offsetLeft+this.offsetWidth+22;
			oInfoData.top =this.offsetTop + 54 + this.offsetHeight/2;
			oInfoData.today = oInfoData.week[Math.floor(this.offsetLeft/this.offsetWidth)];
			oInfoImg.src = oImg.src;
			oInfoTitle.innerHTML= "<strong>"+ oInfoData.today +"</strong>本日主题";
			oInfoCon.innerHTML = oImg.getAttribute('info');
			oInfo.style.left = oInfoData.left + 20 +'px';
			oInfo.style.top = oInfoData.top - oInfoData.height/2 +'px';
			oInfo.style.display = "block";
			this.onmouseout = function () 
			{
				oInfo.style.display = "none";
			}
		};
	})();
	//轮播 思路：对所有大图循环一次，判断i?=iTarget；==则显示；！=则隐藏。
	(function () {
		var oFade = document.getElementById('fade');
		var iTarget=0;
		var oInfo = oFade.getElementsByTagName('p')[0];
		var aBig = oFade.getElementsByTagName('ul')[0].getElementsByTagName('li');
		var aSmall = oFade.getElementsByTagName('ol')[0].getElementsByTagName('li');
		var timer = null;
		var arr = [ '爸爸去哪儿啦~', '人像摄影中的光影感', '娇柔妩媚、美艳大方' ];
		fnFade();
		autoPlay();
		function autoPlay () 
		{
		 	timer = setInterval(function () 
		 	{
		 		iTarget++;
		 		iTarget %= aBig.length;
		 		fnFade();
		 	}, 2000);
		 };

		 for (var i = 0; i < aSmall.length; i++) 
		 {
		 	aBig[i].onmouseover = function () 
		 	{
		 		clearInterval(timer);
		 	};
		 	aBig[i].onmouseout = function () 
		 	{
		 		fnFade();
		 		autoPlay();
		 	};
		 	aSmall[i].onclick = (function (t) 
		 	{
		 		return function () {
		 			clearInterval(timer);
		 			iTarget = t;
		 			fnFade();
		 			autoPlay();
		 		}
		 	})(i);
		 };

		function fnFade () 
		{
			for (var i = 0; i < aBig.length; i++) 
			{
				if(i == iTarget)
				{
					startMove(aBig[i],'opacity',100,function() 
					{
						this.className = 'active';
					}.call(aSmall[i]));
				} else {
					startMove(aBig[i],'opacity',0,function () 
					{
						this.className='';
					}.call(aSmall[i]));
				}
			};
			oInfo.innerHTML=arr[iTarget];
		};
	})();
	//map区域点击btn换色
	(function () {
		var oSubway = getByClass('subway')[0];
		var aImg = getByClass('img_list',oSubway)[0].getElementsByTagName('li');
		var aBtn = getByClass('text_list',oSubway)[0].getElementsByTagName('li');
		var re = /(^img_)|(active)/g;
		for (var i = 0; i < aBtn.length; i++) 
		{
			aBtn[i].onclick = (function (t) 
			{
				return function () 
				{
					this.style.backgroundColor ="#" + this.className.replace(re,'');
					switchClass(aBtn[t],"active");
					switchClass(aImg[t],"active");
				}
			})(i);
		};
	})();
	//bbs滑动
	(function () 
	{
		var oBbs = getByClass('bbsCon')[0];
		var aLi = oBbs.getElementsByTagName('li');
		for (var i = 0; i < aLi.length; i++) 
		{
			aLi[i].onmouseover = function () 
			{
				switchClass(this,'active');
			};
		};
	})();
})();

//公共方法

//获取特定类型子节点，去除空节点
function getChildNodes (par,nodeName) 
{
	var aTemp = par.childNodes;
	var result = [];
	for (var i = 0; i < aTemp.length; i++) 
	{
		if (aTemp[i].nodeType == 1) 
		{ 
			result.push(aTemp[i]);
		};
	};
	return result;
};

function switchClass (obj,cName)
{
	var aTab= getChildNodes(obj.parentNode,obj.nodeName);
	var re = new RegExp(cName,'g');
	var spaceRe = /(^\s*)|(\s*$)/g;
	for (var i = 0; i < aTab.length; i++) 
	{
		aTab[i].className = aTab[i].className.replace(re,'');
		aTab[i].className = aTab[i].className.replace(spaceRe,'');
	};
	obj.className += " " + cName;
};

function getByClass (str,obj) 
{
	obj = (obj)? obj : document;
	var aList= obj.getElementsByTagName('*');
	var result=[];
	var re = new RegExp('\\b('+str+')\\b');
	for (var i = 0; i < aList.length; i++) 
	{
		if (re.test(aList[i].className)) { result.push(aList[i]); }
	};
	return result;
};

function switchTab (obj)
{
	var aLi = getByClass('tab',obj)[0].getElementsByTagName('li');
	var aDiv = getChildNodes(getByClass('con',obj)[0],'div');
	var aArrow = getByClass('tab',obj)[0].getElementsByTagName('a');
	for (var i = 0; i < aLi.length; i++) 
	{
		aLi[i].onclick=(function (t) 
		{
			return function ()
			{
				for (var i = 0; i < aArrow.length; i++) 
				{
					aArrow[i].className = "arrow_gray";
				};
				aArrow[t].className = "arrow_red_down";
				switchClass(this,'active');
				switchClass(aDiv[t],'active');
				console.log(aDiv[t]);
			}
		})(i);
	};
};

function startMove (obj,attr,iTarget,fn) 
{        
    clearInterval(obj.timer);
    obj.timer=setInterval(function()
    {
        var iCur = (attr=='opacity')? Math.round(parseFloat(getStyle(obj,attr))*100) : parseInt(getStyle(obj,attr));
        var iSpeed=(iTarget-iCur)/5;
        iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);

        if(iTarget==iCur)
        {
            clearInterval(obj.timer);
            if (fn) {fn();};
        }
        else
        {
            if (attr=='opacity') 
            {
                obj.style.filter='filter:alpha(opacity:'+(iCur+iSpeed)+')';
                obj.style.opacity=(iCur+iSpeed)/100;
            } 
            else
            {
                obj.style[attr] = (iCur+iSpeed) +'px';
            };
        }
    },40)
};

function getStyle(obj,attr)
{
    if(obj.currentStyle)
    {
        return obj.currentStyle[attr];
    }
    else
    {
        return getComputedStyle(obj,false)[attr];
    }
}