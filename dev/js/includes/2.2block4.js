function forBlock4(){
    if($('#block4').length > 0){
//    font size
    if ($('#block4').width() > 300 && $('#block4').width() <= 400  ){
       $("#block4 .normal_font").css({
       fontSize: $('#block4').width()/25 + "px", 
    }); 
         
        $("#block4 .very_large_font").css({
       fontSize: $('#block4').width()/23 + "px", 
    });  
   };  
    
    if ($('#block4').width() > 400 && $('#block4').width() <= 500  ){
     $("#block4 .normal_font").css({
       fontSize: $('#block4').width()/25 + "px", 
    }); 
         
        $("#block4 .very_large_font").css({
       fontSize: $('#block4').width()/23 + "px", 
    });  
   };  
    
     if ($('#block4').width() > 500 && $('#block4').width() <= 600  ){
        $("#block4 .normal_font").css({
       fontSize: $('#block4').width()/30 + "px", 
    }); 
         
        $("#block4 .very_large_font").css({
       fontSize: $('#block4').width()/23 + "px", 
    }); 
   }; 
    
    if ($('#block4').width() > 600 && $('#block4').width() <= 700 ){
    $("#block4 .normal_font").css({
       fontSize: $('#block4').width()/30 + "px", 
    }); 
         
        $("#block4 .very_large_font").css({
       fontSize: $('#block4').width()/25 + "px", 
    }); 
     };
    
     if ($('#block4').width() > 700 && $('#block4').width() <= 768  ){
    $("#block4 .normal_font").css({
       fontSize: $('#block4').width()/33 + "px", 
    }); 
         
        $("#block4 .very_large_font").css({
       fontSize: $('#block4').width()/30 + "px", 
    }); 
     };
    
    if ( $('#block4').width() > 768 && $('#block4').width() <= 992 ){
        $("#block4 .normal_font").css({
       fontSize: $('#block4').width()/50 + "px", 
    }); 
         
        $("#block4 .very_large_font").css({
       fontSize: $('#block4').width()/35 + "px", 
    }); 
   }; 
    if ( $('#block4').width() > 992 ){
        $("#block4 .normal_font").css({
       fontSize: $('#block4').width()/55 + "px", 
    }); 
         
        $("#block4 .very_large_font").css({
       fontSize: $('#block4').width()/40 + "px", 
    }); 
   };  
    
  
      var swiper = new Swiper('#block4 .swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 30,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',   
    });

      
  
       $("#block4 .line2 p").css({
      marginTop: $("#block4 .line2").height()/2 - $("#block4 .line2 p").height()/2 + "px",
    });    
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
    
    
    
    
    
    
    
    
    
    
    
    }
}