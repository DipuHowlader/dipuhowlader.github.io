$(document).ready(function(){

    // loader
    window.onload = (event) =>{

        setTimeout(() => {
            $('body').css({
                'overflow':'auto'
            })
            $('header').css({
                'z-index':999
            })
    
            $('.loader-wraffer').css({
                'clip-path':'circle(0)',
                'opacity':0,
                'visibility':'hidden'
            })
        }, 1000);
        
    }
	

    $(".owl-carousel").owlCarousel({
        items:1,
        loop:true,
        navigation:false,
        mouseDrag:false,
        dots:false,
        autoplay:true,
        smartSpeed:90,
        animateOut: 'fadeOut',
    });

    // testimonial
    $('.testimonial').owlCarousel({
        items:1,
        loop:true,
        autoplay:true,
        mousedrag:false,
        dots:true
    });

    // sticky header 
    const sticky = () =>{
        if ($(window).scrollTop()>80){
            $('header').addClass('custom')
        }else{
            $('header').removeClass('custom')
        }
    }

    sticky()
    
    $(window).scroll(() =>{
       sticky()
    });

    // animation
    AOS.init({
        duration:1500,
        once:false,
    });


  // external js: isotope.pkgd.js



    
  

 



  });