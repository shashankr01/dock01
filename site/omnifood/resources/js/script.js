$(document).ready(function(){
    
    /*$('h1').click(function(){
        $(this).css('color','#ff0000');
        
    })*/
    
    $('.js--section-features').waypoint(function(direction){
        if (direction == "down"){
            $('nav').addClass('sticky');
        }
        else {
            $('nav').removeClass('sticky');
        }},{
            offset:'25%'
        }
    )
    
});