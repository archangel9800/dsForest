//прелоадер
$(window).on('load', function () {
    var $preloader = $('#p_prldr'),
        $svg_anm   = $preloader.find('.svg_anm');
    $svg_anm.fadeOut();
    $preloader.delay(500).fadeOut('slow');
})


//Определяет высоту блоков adaptation-window
function setHeight() {
    $('.adaptation-window').css({
        height: $(window).height() + 'px',
        width: $(window).width() + 'px',
    });
}



//для языка
function forLan(){ 
 if($('section').width() > 2000){
            $('section .for_btn').removeClass("btn").addClass("btn-large"); 
            
        }else if($('section').width() <= 2000){
            $('section .for_btn').removeClass("btn-large").addClass("btn"); 
            
        };
 if($('section').width() > 400){
    $(".forLanOpt .line1 .language").css({
      right:  $(".forLanOpt .line1 img").width() * 1.25 + "px",
       marginTop: "5px",
    });
     $(".forLanOpt .line1  .img_box img").css({
      right:  15 + "px",
    });
     
     
     
 }else if($('section').width() <= 400){
     
     $(".forLanOpt .line1 .language").css({
      right:  $(".forLanOpt .line1 img").width() * 1.07 + "px",
       marginTop: "5px",
    });
     $(".forLanOpt .line1 img").css({
      right:  5 + "px",
    });
     
     
     
 }
    
    
    
        $("section .line1 .language").click( function(event){
            if(event.target.nodeName == "SPAN"){ 
            $(event.target.parentNode.parentNode.parentNode).find("span").removeClass("active");
            $(event.target).addClass("active");
            var info = $(event.target.parentNode.parentNode.parentNode).html();
            $('section .line1 .language ul').empty().prepend(info); 
            
            };
            
        });
   
        
          $("section .line1 .language span").css({
        fontSize: $("section .line1 .language .fixed-action-btn").height()/1.7 + "px",
    });    
 

    
    

    

    
    
    
    
    
    
    } 