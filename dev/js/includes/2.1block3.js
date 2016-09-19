function forBlock3(){
    if($('#block3').length > 0){

        //    font size
    if ($('#block3').width() > 300 && $('#block3').width() <= 400  ){
       $("#block3 .normal_font").css({
       fontSize: $('#block3').width()/20 + "px", 
    }); 
         
        $("#block3 .very_large_font").css({
       fontSize: $('#block3').width()/23 + "px", 
    });  
   };  
    
    if ($('#block3').width() > 400 && $('#block3').width() <= 500  ){
     $("#block3 .normal_font").css({
       fontSize: $('#block3').width()/25 + "px", 
    }); 
         
        $("#block3 .very_large_font").css({
       fontSize: $('#block3').width()/23 + "px", 
    });  
   };  
    
     if ($('#block3').width() > 500 && $('#block3').width() <= 600  ){
        $("#block3 .normal_font").css({
       fontSize: $('#block3').width()/25 + "px", 
    }); 
         
        $("#block3 .very_large_font").css({
       fontSize: $('#block3').width()/23 + "px", 
    }); 
   }; 
    
    if ($('#block3').width() > 600 && $('#block3').width() <= 700 ){
    $("#block3 .normal_font").css({
       fontSize: $('#block3').width()/30 + "px", 
    }); 
         
        $("#block3 .very_large_font").css({
       fontSize: $('#block3').width()/25 + "px", 
    }); 
     };
    
     if ($('#block3').width() > 700 && $('#block3').width() <= 768  ){
    $("#block3 .normal_font").css({
       fontSize: $('#block3').width()/33 + "px", 
    }); 
         
        $("#block3 .very_large_font").css({
       fontSize: $('#block3').width()/30 + "px", 
    }); 
     };
    
    if ( $('#block3').width() > 768 && $('#block3').width() <= 992 ){
        $("#block3 .normal_font").css({
       fontSize: $('#block3').width()/45 + "px", 
    }); 
         
        $("#block3 .very_large_font").css({
       fontSize: $('#block3').width()/35 + "px", 
    }); 
   }; 
    if ( $('#block3').width() > 992 ){
        $("#block3 .normal_font").css({
       fontSize: $('#block3').width()/55 + "px", 
    }); 
         
        $("#block3 .very_large_font").css({
       fontSize: $('#block3').width()/40 + "px", 
    }); 
   }; 
    
     
     
    
    if ( $('#block3').width() <= 600 ){
       $("#block3 .line1 .dl-menu_column, #block3 .line1 .contacts").css({
       height: $("#block3").height()/100 * 7 + "px",
    });   
      $("#block3 .line1 .language_box").css({
       height: $("#block3").height()/100 * 3 + "px",  
     });    
      $("#block3 .line1 .img_box").css({
       height: $("#block3").height()/100 * 11 + "px",  
     });    
        
    } else{
      $("#block3 .line1 .dl-menu_column, #block3 .line1 .contacts, #block3 .line1 .img_box, #block3 .line1 .language_box").css({
       height: $("#block3").height()/100 * 7 + "px",
    });      
        
    };     
        
        
        
        
        
        
        
        
   $("#block3 .line1 .dl-menuwrapper .dl-trigger, #block3 .line1 .category, #block3 .line1 .dl-menuwrapper ul a").css({
       paddingTop: $("#block3 .line1 .dl-menu_column").height()/5 + "px",
       paddingBottom: $("#block3 .line1 .dl-menu_column").height()/5 + "px",
    });
        
         
    
        
        
  $("#block3 .line2 p").css({
      marginTop: $("#block3 .line2").height()/2 - $("#block3 .line2 p").height()/2 + "px",
    });           
        
if ( $('#block3').width() <= 600 ){
       $('#block3 .line1 .img_box img').css({
          right:  $('#block3 .line1 .img_box').width()/2 - $('#block3 .line1 .img_box img').width()/2 + "px",
       }); 
    
      $("#block3 .line1 .language_box .language").css({
      right:  "15px",
    });   
    
    } else{
      $('#block3 .line1 .img_box img').css({
          right:  20 + "px",
       });   
        
         $("#block3 .line1 .language_box .language").css({
      right: $("#block3 .line1 .img_box img").width() * 1.25 + "px",
    });    
        
        
        
    }; 
        
        

    
    
    if ( $('#block3').width() > 768 ){
         
    if($("#block3 .line3 .product_block").length <= 4){
        $("#block3 .line3 .swiper-pagination, #block3 .line3 .swiper-button-next, #block3 .line3 .swiper-button-prev").css({
         display: "none",
    });   
    } else if($("#block3 .line3 .product_block").length >= 5) {
         $("#block3 .line3 .swiper-pagination, #block3 .line3 .swiper-button-next, #block3 .line3 .swiper-button-prev").css({
         display: "block",
    });   
    };     
        
         
     
         
         
         
         
     
      var swiper = new Swiper('#block3 .swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        slidesPerView: 4,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
    });
        
     
   
     }else  if ( $('#block3').width() > 400 && $('#block3').width() <= 768 ){
      
         $("#block3 .line3 .swiper-pagination, #block3 .line3 .swiper-button-next, #block3 .line3 .swiper-button-prev").css({
         display: "block",
    });   
         
     var swiper = new Swiper('#block3 .swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        slidesPerView: 3,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
    });
        
      
         
     }else  if ( $('#block3').width() <= 400 ){
         
   $("#block3 .line3 .swiper-pagination, #block3 .line3 .swiper-button-next, #block3 .line3 .swiper-button-prev").css({
         display: "block",
    });   
         
     var swiper = new Swiper('#block3 .swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        slidesPerView: 2,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
    });
        
         
      
         
     }     
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
    
    
        $(function() {
				$( '#block3 #dl-menu' ).dlmenu({
					animationClasses : { classin : 'dl-animate-in-2', classout : 'dl-animate-out-2' }
				});
			});
        
        
        
    
    
    
    }
}