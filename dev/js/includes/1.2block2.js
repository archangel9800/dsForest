function forBlock2(){
    if($('#block2').length > 0){
//    font size
    if ($('#block2').width() > 300 && $('#block2').width() <= 400  ){
       $("#block2 .normal_font").css({
       fontSize: $('#block2').width()/200 + "px", 
    }); 
         $("#block2 .large_font").css({
       fontSize: $('#block2').width()/15 + "px", 
    }); 
        $("#block2 .very_large_font").css({
       fontSize: $('#block2').width()/10 + "px", 
    });  
   };  
    
    if ($('#block2').width() > 400 && $('#block2').width() <= 500  ){
     $("#block2 .normal_font").css({
       fontSize: $('#block2').width()/200 + "px", 
    }); 
         $("#block2 .large_font").css({
       fontSize: $('#block2').width()/25 + "px", 
    }); 
        $("#block2 .very_large_font").css({
       fontSize: $('#block2').width()/10 + "px", 
    });  
   };  
    
     if ($('#block2').width() > 500 && $('#block2').width() <= 600  ){
        $("#block2 .normal_font").css({
       fontSize: $('#block2').width()/200 + "px", 
    }); 
         $("#block2 .large_font").css({
       fontSize: $('#block2').width()/30 + "px", 
    }); 
        $("#block2 .very_large_font").css({
       fontSize: $('#block2').width()/10 + "px", 
    }); 
   }; 
    
    if ($('#block2').width() > 600 && $('#block2').width() <= 700 ){
    $("#block2 .normal_font").css({
       fontSize: $('#block2').width()/200 + "px", 
    }); 
         $("#block2 .large_font").css({
       fontSize: $('#block2').width()/30 + "px", 
    }); 
        $("#block2 .very_large_font").css({
       fontSize: $('#block2').width()/15 + "px", 
    }); 
     };
    
     if ($('#block2').width() > 700 && $('#block2').width() <= 768  ){
    $("#block2 .normal_font").css({
       fontSize: $('#block2').width()/200 + "px", 
    }); 
         $("#block2 .large_font").css({
       fontSize: $('#block2').width()/30 + "px", 
    }); 
        $("#block2 .very_large_font").css({
       fontSize: $('#block2').width()/15 + "px", 
    }); 
     };
    
    if ( $('#block2').width() > 768 && $('#block2').width() <= 992 ){
        $("#block2 .normal_font").css({
       fontSize: $('#block2').width()/200 + "px", 
    }); 
         $("#block2 .large_font").css({
       fontSize: $('#block2').width()/45 + "px", 
    }); 
        $("#block2 .very_large_font").css({
       fontSize: $('#block2').width()/15 + "px", 
    }); 
   }; 
    if ( $('#block2').width() > 992 ){
        $("#block2 .normal_font").css({
       fontSize: $('#block2').width()/200 + "px", 
    }); 
         $("#block2 .large_font").css({
       fontSize: $('#block2').width()/60 + "px", 
    }); 
        $("#block2 .very_large_font").css({
       fontSize: $('#block2').width()/20 + "px", 
    }); 
   }; 
    
        


        
        
      
        
        
        
        
  $("#block2 .line3 .catalog_block").css({
      height: $("#block2 .line3 .swiper-wrapper").height()/2 - 15 + "px",
    });       
        
   $("#block2 .line3 .swiper-container").css({
      height: $("#block2 .line3").height() + "px",
       width: $("#block2 .line3").width() + "px",
    });      
        

      
        
     if ( $('#block2').width() > 768 ){
         
      if($("#block2 .catalog_block").length <= 8){
        $("#block2 .line3 .swiper-pagination, #block2 .line3 .swiper-button-next, #block2 .line3 .swiper-button-prev").css({
         display: "none",
    });   
    } else if($("#block2 .catalog_block").length >= 9) {
         $("#block2 .line3 .swiper-pagination, #block2 .line3 .swiper-button-next, #block2 .line3 .swiper-button-prev").css({
         display: "block",
    });   
    };   
        
         
       $("#block2 .line2 p").css({
      fontSize: $("#block2 .line2").height()/1.5 + "px",
    });   
         
         
         
         
     
      var swiper = new Swiper('#block2 .swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 4,
        slidesPerColumn: 2,
        paginationClickable: true,
        spaceBetween: 30,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',   
    });
     
   
     }else  if ( $('#block2').width() > 400 && $('#block2').width() <= 768 ){
         
       
         
         
         
      
        $("#block2 .line2 p").css({
      fontSize: $("#block2 .line2").height()/1.6 + "px",
    });  
         
      if($("#block2 .catalog_block").length <= 4){
        $("#block2 .line3 .swiper-pagination, #block2 .line3 .swiper-button-next, #block2 .line3 .swiper-button-prev").css({
         display: "none",
    });   
    } else if($("#block2 .catalog_block").length >= 5) {
         $("#block2 .line3 .swiper-pagination, #block2 .line3 .swiper-button-next, #block2 .line3 .swiper-button-prev").css({
         display: "block",
    });   
    };      
         
         
     var swiper = new Swiper('#block2 .swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 2,
        slidesPerColumn: 2,
        paginationClickable: true,
        spaceBetween: 30,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev', 
    });     
      
         
     }else  if ( $('#block2').width() <= 400 ){
         
           
         
               
         
         
       $("#block2 .line2 p").css({
      fontSize: $("#block2 .line2").height()/2 + "px",
    });    
         
         
     if($("#block2 .catalog_block").length <= 2){
        $("#block2 .line3 .swiper-pagination, #block2 .line3 .swiper-button-next, #block2 .line3 .swiper-button-prev").css({
         display: "none",
    });   
    } else if($("#block2 .catalog_block").length >= 3) {
         $("#block2 .line3 .swiper-pagination, #block2 .line3 .swiper-button-next, #block2 .line3 .swiper-button-prev").css({
         display: "block",
    });   
    };    
         
         
         
     var swiper = new Swiper('#block2 .swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 1,
        slidesPerColumn: 2,
        paginationClickable: true,
        spaceBetween: 30,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev', 
    });     
         
      
         
     }   
        
        
        
        
        
       $("#block2 .line2 p").css({
      marginTop: $("#block2 .line2").height()/2 - $("#block2 .line2 p").height()/2 + "px",
    });    
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
    
    
    
    
    
    
    
    
    
    
    
    }
}