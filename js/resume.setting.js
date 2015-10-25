$(document).ready(function() {
	(function(){ 
   			if(parseInt($('body').css('width')) < 992) {
   				$('#lpad').css('margin-left','30%');
               $.each($('.detail img'),function (i,val) {
                  move(val).set('width','10rem').set('height','10rem').end();
                  if (i==3) {move(val).set('padding-bottom','6rem').end();};
               });
   			} else {
   				$('#lpad').css('margin-left','0');
   			}
   		})();
	$.each($('#section3 .detail a'),function (i,val) {
		$(this).hover(function () {
			$(this).siblings().fadeIn('100');
		},function () {
			$(this).siblings().fadeOut('100');
		})
	});
	    $('#fullpage').fullpage({
	    	navigation: true,
   		navigationPosition: 'right',
   		afterResize: function(){ 
   			if(parseInt($('body').css('width')) < 992) {
   				$('#lpad').css('margin-left','30%');
   			} else {
   				$('#lpad').css('margin-left','0');
   			}
   		},
   		afterRender: function(){
   			$.each($('#section4 p'),function (i,val) {
   						move(val).x(1000*Math.pow(-1,i)).end();
   						move(val).set('opacity','0').end();
   					});
   			move('#section3 .demo-info').y(500).end();
   			$.each($('#section3 img'),function (i,val) {
   				move(val).scale(0.75).end();
   			});

   		},
   		afterLoad: function (anchorLink, index) {
   			switch (index){
   				case 1:
   					move('#avatar').delay(500).set('opacity','1').end(function () {
   						move('#section1 .info').set('opacity','1').set('top','0').end();
   					});
   					break;
   				case 2:
   					move('#section2 .bar1').set('width','72%').end();
   					move('#section2 .bar2').set('width','68%').end();
   					move('#section2 .bar3').set('width','60%').end();
   					move('#section2 .bar4').set('width','50%').end();
   					move('#section2 .bar5').set('width','40%').end();
   					$.each($('#section2 .label'), function (i,val) {
   						move(val).scale(1.4).end(function () {
   							move(val).scale(1).end();
   						});
   					});
   					break;
   				case 3:
   					$.each($('#section3 img'),function (i,val) {
   						move(val).scale(1).end();
   					});
   					move('#section3 .demo-info').y(0).end();
   					break;
   				case 4:
   					$.each($('#section4 p'),function (i,val) {
   						move(val).delay(i*300).ease('snap').x(0).end();
   						move(val).delay(i*300).ease('out').set('opacity','1').end();
   					});
   					break;
					case 5:
						move('#section5 .contact').set('width','28rem').end();
						break;
   				default:
   					break;
   			}
   		},
   		onLeave: function (index,nextIndex) {
   			move('#section'+index).set('background','#0afe4f').end(function () {
   				move('#section'+index).set('background','#069cd4').end();
   			});
   			switch (index){
   				case 1:
   					$('#avatar').css('opacity','0');
   					$('#avatar').css('opacity','0');
   					$('#section1 .info').css('opacity','0').css('top','100px');
   					break;
   				case 2:
   					$('#section2 .bar1').css('width','0');
   					$('#section2 .bar2').css('width','0');
   					$('#section2 .bar3').css('width','0');
   					$('#section2 .bar4').css('width','0');
   					$('#section2 .bar5').css('width','0');
   					break;
   				case 3:
   					$.each($('#section3 img'),function (i,val) {
   						move(val).scale(0.75).end();
   					});
   					move('#section3 .demo-info').y(500).end();
   					break;
   				case 4:
   					$.each($('#section4 p'),function (i,val) {
   								move(val).x(1000*Math.pow(-1,i)).end();
   								move(val).set('opacity','0').end();
   							});
   					break;
   				case 5:
   					move('#section5 .contact').set('width','8rem').end();
   					break;	
   				default:
   					break;
   			}
   		}
	    })
});