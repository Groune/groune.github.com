(function () 
{

	var aOptions = getByClass('options');
	var aToption = getByClass('trip_option');
	switchTab(aOptions);
	switchTab(aToption);
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
				switchClass(this,"current");
				iNow = this.index;
				if (oText.value != arrText[iNow]) {
					oText.value = arrText[iNow];
				};
			}
		};

		oText.onfocus = function () {
			if (this.value == arrText[iNow]) {
				this.value = "";
			};
		}
		oText.onblur = function () {
			if (this.value == "") {
				this.value = arrText[iNow];
			};
		}
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
		for (var i = 0; i < arrData.length; i++) {
			str += '<li><a class="author" href="' +arrData[i].url+ '">' +arrData[i].name+ '</a><em>'+ arrData[i].time +'分钟前</em><a href="'+ arrData[i].url +'">写了一篇新文章：'+ arrData[i].title +'…</a></li>';			
		};
		str += str;
		oUl.innerHTML = str;
		height = oUl.getElementsByTagName('li')[0].offsetHeight;

		timer = setInterval(function () {
			doMove(1);
		}, 5000);

		function doMove (num)
		{
			iNow += num;
			//num为负，向上滚动。边界条件为下半幅第一位展示过后再重定位ul.top=0；同时设iNow=-1;
			//即改变iNow的取值范围为[-1,-8];
			if (Math.abs(iNow) > arrData.length ) {
				iNow = -1;
				oUl.style.top = 0*height + 'px';
			};
			if (iNow > 0) {
				iNow = -arrData.length+1;
				oUl.style.top = -arrData.length*height + 'px';
			};
			startMove(oUl,'top',height*iNow);
		}
		oUl.onmouseover = function () {
			clearInterval(timer);
		};
		oUl.onmouseout = function () {
			timer = setInterval(function () {
				doMove(-1);
			}, 5000);
		};
		oBtnUp.onclick = function () {
			clearInterval(timer);
			iNow += -1;
			doMove(-1);
			timer = setInterval(function () {
				doMove(-1);
			}, 5000);
		};
		oBtnDown.onclick = function () {
			clearInterval(timer);
			iNow += 1;
			doMove(1);
			timer = setInterval(function () {
				doMove(1);
			}, 5000);
		};
	})();
})();


function getChildNodes (par,nodeName) 
{
	var aTemp = par.childNodes;
	var result = [];
	for (var i = 0; i < aTemp.length; i++) 
	{
		if (aTemp[i].nodeType == 1) { 
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
	if (typeof(arguments[1]) == 'undefined') { obj = document };
	var aList= obj.getElementsByTagName('*');
	var result=[];
	var re = new RegExp('\\b('+str+')\\b');
	for (var i = 0; i < aList.length; i++) {
		if (re.test(aList[i].className)) { result.push(aList[i]); }
	};
	return result;
};


function switchTab (obj)
{
	for (var i = 0; i < obj.length; i++) {
		var aOli = getByClass('tab',obj[i])[0].getElementsByTagName('li');
		for (var j = 0; j < aOli.length; j++) {
			aOli[j].onclick=(function (t) 
			{
				var _index = j;
				return function () 
				{
					var aArrow = this.parentNode.getElementsByTagName('a');
					var aDiv = getChildNodes(this.parentNode.nextSibling.nextSibling,'div');
					for (var i = 0; i < aArrow.length; i++) 
					{
						aArrow[i].className = "arrow_gray";
					};
					aArrow[_index].className = "arrow_red_down";
					switchClass(this,'active');
					switchClass(aDiv[_index],'active');
				}
			}).call(aOli[j],j);
		};
	};
};

function startMove (obj,attr,iTarget) 
{        
    clearInterval(obj.timer);
    obj.timer=setInterval(function()
    {
        var iCur=0;
        if(attr=='opacity')
        {
            iCur=Math.round(parseFloat(getStyle(obj,attr))*100);
        }
        else
        {

            iCur=parseInt(getStyle(obj,attr));
        }            
        var iSpeed=(iTarget-iCur)/5;
        iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);

        if(iTarget==iCur)
        {
            clearInterval(obj.timer);
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