$(function(){
	


  $('#fullpage').fullpage({
		//options here
		autoScrolling:true,
		scrollHorizontally: true,
    navigation: true,
    anchors:['about', 'skill', 'portfolio'],
    
	});

    new TypeIt(".typing-name", {
        speed: 100,
        waitUntilVisible: true
      }).go();

      $('.list').click(function(){
        const value = $(this).attr('data-filter');
        if(value == 'All'){
          $('.project').show('1000');
        }
        else{
          $('.project').not('.'+value).hide('200');
          $('.project').filter('.'+value).show('200');
        }
      });
      $('.list').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
      });

     
    
    
      
  

});//ready