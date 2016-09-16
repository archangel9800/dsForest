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

    $(".forLanOpt .line1 .language").css({
       right:  $(".forLanOpt .line1 img").width() * 1.3 + "px",
       marginTop: "5px",
    });
    
    
    
    
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