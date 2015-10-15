window.onload=function () 
{
	var oSearch = document.getElementById('search');
	var oMenu = getByClass("menu",oSearch)[0];
	var aMli=oMenu.getElementsByTagName('li');
	var aOptions = getByClass('options');
	var aToption = getByClass('trip_option');
	for (var i = 0; i < aMli.length; i++) 
	{
		aMli[i].onclick = function () 
		{
			switchClass(this,"current");
		};
	};
	var option1 = new Options(aOptions[0]);
	var option2 = new Options(aOptions[1]);
	var oTption1 = new Options(aToption[0]);
	var oTption2 = new Options(aToption[1]);
	option1.switch();
	option2.switch();
	oTption1.switch();
	oTption2.switch();
};
function Options(name) {
	this.tabs = getChildNodes('li',getByClass('tab',name)[0]);
	this.cons = getChildNodes('div',getByClass('con',name)[0]);
	this.arrows = getByClass('tab',name)[0].getElementsByTagName('a');
};

Options.prototype.switch = function(){
	for (var i = 0; i < this.tabs.length; i++) {
		var _this = this;
		this.tabs[i].index = i;
		this.tabs[i].onclick = function () {
			for (var i = 0; i < _this.arrows.length; i++) 
			{
				_this.arrows[i].className = "arrow_gray";
			};
			_this.arrows[this.index].className = "arrow_red_down";
			switchClass(_this.tabs[this.index],'active');
			switchClass(_this.cons[this.index],'active');
		}
	};
}

function getChildNodes (nodeName,par) 
{
	var aTemp = par.childNodes;
	var result = [];
	for (var i = 0; i < aTemp.length; i++) 
	{
		if (aTemp[i].nodeName == nodeName.toUpperCase()) { 
			result.push(aTemp[i]);
			 };
	};
	return result;
}


function switchClass (obj,cName) 
{
	var aTab= getChildNodes(obj.nodeName,obj.parentNode);
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