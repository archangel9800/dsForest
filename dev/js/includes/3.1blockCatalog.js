function forblockCatalog(){
    if($('#blockCatalog').length > 0){

        //    font size
    if ($('#blockCatalog').width() > 300 && $('#blockCatalog').width() <= 400  ){
       $("#blockCatalog .normal_font").css({
       fontSize: $('#blockCatalog').width()/20 + "px", 
    }); 
     $("#blockCatalog .large_font").css({
       fontSize: $('#blockCatalog').width()/20 + "px", 
    });      
        $("#blockCatalog .very_large_font").css({
       fontSize: $('#blockCatalog').width()/23 + "px", 
    });  
   };  
    
    if ($('#blockCatalog').width() > 400 && $('#blockCatalog').width() <= 500  ){
     $("#blockCatalog .normal_font").css({
       fontSize: $('#blockCatalog').width()/25 + "px", 
    }); 
     $("#blockCatalog .large_font").css({
       fontSize: $('#blockCatalog').width()/25 + "px", 
    });      
        $("#blockCatalog .very_large_font").css({
       fontSize: $('#blockCatalog').width()/23 + "px", 
    });  
   };  
    
     if ($('#blockCatalog').width() > 500 && $('#blockCatalog').width() <= 600  ){
        $("#blockCatalog .normal_font").css({
       fontSize: $('#blockCatalog').width()/25 + "px", 
    }); 
      $("#blockCatalog .large_font").css({
       fontSize: $('#blockCatalog').width()/30 + "px", 
    });      
        $("#blockCatalog .very_large_font").css({
       fontSize: $('#blockCatalog').width()/23 + "px", 
    }); 
   }; 
    
    if ($('#blockCatalog').width() > 600 && $('#blockCatalog').width() <= 700 ){
    $("#blockCatalog .normal_font").css({
       fontSize: $('#blockCatalog').width()/30 + "px", 
    }); 
        $("#blockCatalog .large_font").css({
       fontSize: $('#blockCatalog').width()/35 + "px", 
    });    
        $("#blockCatalog .very_large_font").css({
       fontSize: $('#blockCatalog').width()/25 + "px", 
    }); 
     };
    
     if ($('#blockCatalog').width() > 700 && $('#blockCatalog').width() <= 768  ){
    $("#blockCatalog .normal_font").css({
       fontSize: $('#blockCatalog').width()/33 + "px", 
    }); 
      $("#blockCatalog .large_font").css({
       fontSize: $('#blockCatalog').width()/35 + "px", 
    });    
        $("#blockCatalog .very_large_font").css({
       fontSize: $('#blockCatalog').width()/30 + "px", 
    }); 
     };
    
    if ( $('#blockCatalog').width() > 768 && $('#blockCatalog').width() <= 992 ){
        $("#blockCatalog .normal_font").css({
       fontSize: $('#blockCatalog').width()/45 + "px", 
    }); 
     
         $("#blockCatalog .large_font").css({
       fontSize: $('#blockCatalog').width()/45 + "px", 
    });     
        $("#blockCatalog .very_large_font").css({
       fontSize: $('#blockCatalog').width()/35 + "px", 
    }); 
   }; 
    if ( $('#blockCatalog').width() > 992 ){
        $("#blockCatalog .normal_font").css({
       fontSize: $('#blockCatalog').width()/55 + "px", 
    }); 
        $("#blockCatalog .large_font").css({
       fontSize: $('#blockCatalog').width()/70 + "px", 
    });  
        $("#blockCatalog .very_large_font").css({
       fontSize: $('#blockCatalog').width()/40 + "px", 
    }); 
   }; 
    
     
     
    
    if ( $('#blockCatalog').width() <= 600 ){
       $("#blockCatalog .line1 .dl-menu_column, #blockCatalog .line1 .contacts").css({
       height: $("#blockCatalog").height()/100 * 7 + "px",
    });   
      $("#blockCatalog .line1 .language_box").css({
       height: $("#blockCatalog").height()/100 * 3 + "px",  
     });    
      $("#blockCatalog .line1 .img_box").css({
       height: $("#blockCatalog").height()/100 * 11 + "px",  
     });    
        
    } else{
      $("#blockCatalog .line1 .dl-menu_column, #blockCatalog .line1 .contacts, #blockCatalog .line1 .img_box, #blockCatalog .line1 .language_box").css({
       height: $("#blockCatalog").height()/100 * 7 + "px",
    });      
        
    };     
        
   
        
   $("#blockCatalog .line1 .dl-menuwrapper .dl-trigger, #blockCatalog .line1 .category, #blockCatalog .line1 .dl-menuwrapper ul a").css({
       paddingTop: $("#blockCatalog .line1 .dl-menu_column").height()/5 + "px",
       paddingBottom: $("#blockCatalog .line1 .dl-menu_column").height()/5 + "px",
    });
        
//    $("#blockCatalog .line1 .dl-menuwrapper .dl-menu").css({
//        width: $("#blockCatalog .line1 .dl-menuwrapper ul a").width()*1.5 + "px",
//    });       
//    
        
        
  $("#blockCatalog .line2 p").css({
      marginTop: $("#blockCatalog .line2").height()/2 - $("#blockCatalog .line2 p").height()/2 + "px",
    });           
        
if ( $('#blockCatalog').width() <= 600 ){
       $('#blockCatalog .line1 .img_box img').css({
          right:  $('#blockCatalog .line1 .img_box').width()/2 - $('#blockCatalog .line1 .img_box img').width()/2 + "px",
       }); 
    
      $("#blockCatalog .line1 .language_box .language").css({
      right:  "15px",
    });   
    
    } else{
      $('#blockCatalog .line1 .img_box img').css({
          right:  20 + "px",
       });   
        
         $("#blockCatalog .line1 .language_box .language").css({
      right: $("#blockCatalog .line1 .img_box img").width() * 1.25 + "px",
    });    
        
        
        
    }; 
        
        

        
        
        
        
        
        
        
        $("#blockCatalog .line3 .catalog_block").css({
      height: $("#blockCatalog .line3 .swiper-wrapper").height()/2 - 15 + "px",
    });     
    
      
        
    
    if ( $('#blockCatalog').width() > 768 ){
         
 
      var swiper = new Swiper('#blockCatalog .swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 3,
        slidesPerColumn: 2,
        paginationClickable: true,
        spaceBetween: 30,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',   
    });  
        
         
     
         if($("#blockCatalog .catalog_block").length <= 6){
        $("#blockCatalog .line3 .swiper-pagination, #blockCatalog .line3 .swiper-button-next, #blockCatalog .line3 .swiper-button-prev").css({
         display: "none",
    });   
    } else if($("#blockCatalog .catalog_block").length >= 7) {
         $("#blockCatalog .line3 .swiper-pagination, #blockCatalog .line3 .swiper-button-next, #blockCatalog .line3 .swiper-button-prev").css({
         display: "block",
    });   
    };    
         
         
         
         
     
     
   
     }else  if ( $('#blockCatalog').width() > 400 && $('#blockCatalog').width() <= 768 ){

var swiper = new Swiper('#blockCatalog .swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 1,
        slidesPerColumn: 2,
        paginationClickable: true,
        spaceBetween: 30,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev', 
    });     
     
         
          if($("#blockCatalog .catalog_block").length <= 2){
        $("#blockCatalog .line3 .swiper-pagination, #blockCatalog .line3 .swiper-button-next, #blockCatalog .line3 .swiper-button-prev").css({
         display: "none",
    });   
    } else if($("#blockCatalog .catalog_block").length >= 3) {
         $("#blockCatalog .line3 .swiper-pagination, #blockCatalog .line3 .swiper-button-next, #blockCatalog .line3 .swiper-button-prev").css({
         display: "block",
    });   
    };
         
     }else  if ( $('#blockCatalog').width() <= 400 ){
         
 if($("#blockCatalog .catalog_block").length <= 2){
        $("#blockCatalog .line3 .swiper-pagination, #blockCatalog .line3 .swiper-button-next, #blockCatalog .line3 .swiper-button-prev").css({
         display: "none",
    });   
    } else if($("#blockCatalog .catalog_block").length >= 3) {
         $("#blockCatalog .line3 .swiper-pagination, #blockCatalog .line3 .swiper-button-next, #blockCatalog .line3 .swiper-button-prev").css({
         display: "block",
    });   
    };
     
       
            
     var swiper = new Swiper('#blockCatalog .swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 1,
        slidesPerColumn: 2,
        paginationClickable: true,
        spaceBetween: 30,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev', 
    });     
          
      
         
     }     
        
        
        
        
      $("#blockCatalog .line3 .category_list .collection a").css({
         paddingTop:  $("#blockCatalog .line3 .category_list .collection a").css("font-size").replace(/[^0-9|.]/g,'') * 1.5 + "px",
      });
        
        
        
        
        
        
        
        
        
        
        
        
    
    
        $(function() {
				$( '#blockCatalog #dl-menu' ).dlmenu({
					animationClasses : { classin : 'dl-animate-in-2', classout : 'dl-animate-out-2' }
				});
			});
        
        
        
    
    
    
    }
}