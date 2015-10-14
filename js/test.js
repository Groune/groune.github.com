window.onload = function () 
{
	var arr = [{a:1},{b:2},{c:3}];
	arr += arr;
	console.log(arr[0].a);
}






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

var arr=[1,2,3,4,5].slice()；
console.log(typeof(arr));