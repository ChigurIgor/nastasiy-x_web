$('#btn_scroll').fadeOut(1);





$(window).scroll(function (){
        if ($(this).scrollTop() > screen.height*0.2){
            $('#btn_scroll').fadeIn();
        } else{
            $('#btn_scroll').fadeOut();
        }
    });


function scrollTop1() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    }
