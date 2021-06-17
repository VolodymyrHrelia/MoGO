$(document).ready(function () {
    
    
    $('.burger__icon').on('click', function(){

        $('.burger').toggleClass("burger-active");
        $('.burger__icon').toggleClass('burger--active');
    } );


   

    $('.scroll').each(function (i,elem) {
        let top;

        switch ($(elem).text()) {
            case 'about' : 
                top = $('.about').offset().top;
                break;


            case 'service' : 
                top = $('.service').offset().top;
                break;

            case 'work' :
                top = $('.work').offset().top;
                break;
                
            case 'blog' :
                top = $('.portfolio').offset().top;
                break;

            case 'contact' :
                top = $('.team').offset().top;
                break;
        }


        $(elem).on('click',function (e) {
            e.preventDefault();

            $('html,body').animate ({
                scrollTop:top
        });
            
        }); 
        
    });

    

    $('.item__title').on('click',function () {


        $('.item__content').slideUp();
        
        let content = $(this).next();
        let arrow = $(this).children('.item__arrow');


        if(content.css('display') == 'none') {
            $('.item__arrow').removeClass('act');
            content.slideDown();
            arrow.toggleClass('act');
            

        }else {
            content.slideUp();
            arrow.toggleClass('act');
        }

       
        
    });





       




    




        
    




});

