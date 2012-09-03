/* 
	Author : Daniel Machado Maffioletti
	Email  : dmaffioletti@gmail.com
	Data   : 25/05/2012
*/
	
$(window).ready(function() {
	
	var ezequiel = {
		
		'init' : function(){
			
			$('#tab-menu a').addClass('tabout');
			$('#tab-menu a:eq(0)').addClass('tabover');
			
			$('#tab-menu a').click(function(){
			
				var id = $(this).attr('id');
				$('#tab-menu a').removeClass('tabover');
				$('.tab-content').hide();
				
				switch( id ){
					
					case 'participe' :
						$('#participe').addClass('tabover');						
						$('#tab-content-participe').show();
						break;
					
					case 'fotos' :
						$('#fotos').addClass('tabover');
						$('#tab-content-fotos').show();
						break;
						
					case 'videos' :
						$('#videos').addClass('tabover');
						$('#tab-content-videos').show();
						break;
						
					case 'donativos' :
						$('#donativos').addClass('tabover');
						$('#tab-content-donativos').show();
						break;
				}
				
			});
		
		
		//fim init
		}
		
	//fim ezequiel
	}
	
	ezequiel.init();
	

	$(".gallery").find("a").prettyPhoto();
	
	
});

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-33463661-1']);
_gaq.push(['_trackPageview']);

(function() {
	var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
	ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();