$(document).ready(function(){
    $(window).scroll(function()
    {
        if($(window).scrollTop()>100)
        {
            $('.myImg').fadeIn(500);
        }
    
        else{
            $('.myImg').fadeOut(500);
        }
    })
    
    $('.myImg').click(function(){
        $('html').animate({scrollTop:0},2000);
    })

   
   
})