$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

    $('#menu').on('scroll load',function(){
        $(this).removeClass('fa-times');
        $('header').removeClass('toggle')
    });
});