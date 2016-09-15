function forBlock1(){
    if($('#block1').length > 0){
//    font size
    if ($('#block1').width() > 300 && $('#block1').width() <= 400  ){
       $("#block1 .normal_font").css({
       fontSize: $('#block1').width()/200 + "px", 
    }); 
         $("#block1 .large_font").css({
       fontSize: $('#block1').width()/20 + "px", 
    }); 
        $("#block1 .very_large_font").css({
       fontSize: $('#block1').width()/20 + "px", 
    });  
   };  
    
    if ($('#block1').width() > 400 && $('#block1').width() <= 500  ){
     $("#block1 .normal_font").css({
       fontSize: $('#block1').width()/200 + "px", 
    }); 
         $("#block1 .large_font").css({
       fontSize: $('#block1').width()/20 + "px", 
    }); 
        $("#block1 .very_large_font").css({
       fontSize: $('#block1').width()/20 + "px", 
    });  
   };  
    
     if ($('#block1').width() > 500 && $('#block1').width() <= 600  ){
        $("#block1 .normal_font").css({
       fontSize: $('#block1').width()/200 + "px", 
    }); 
         $("#block1 .large_font").css({
       fontSize: $('#block1').width()/25 + "px", 
    }); 
        $("#block1 .very_large_font").css({
       fontSize: $('#block1').width()/20 + "px", 
    }); 
   }; 
    
    if ($('#block1').width() > 600 && $('#block1').width() <= 700 ){
    $("#block1 .normal_font").css({
       fontSize: $('#block1').width()/200 + "px", 
    }); 
         $("#block1 .large_font").css({
       fontSize: $('#block1').width()/39 + "px", 
    }); 
        $("#block1 .very_large_font").css({
       fontSize: $('#block1').width()/20 + "px", 
    }); 
     };
    
     if ($('#block1').width() > 700 && $('#block1').width() <= 768  ){
    $("#block1 .normal_font").css({
       fontSize: $('#block1').width()/200 + "px", 
    }); 
         $("#block1 .large_font").css({
       fontSize: $('#block1').width()/39 + "px", 
    }); 
        $("#block1 .very_large_font").css({
       fontSize: $('#block1').width()/20 + "px", 
    }); 
     };
    
    if ( $('#block1').width() > 768 && $('#block1').width() <= 992 ){
        $("#block1 .normal_font").css({
       fontSize: $('#block1').width()/200 + "px", 
    }); 
         $("#block1 .large_font").css({
       fontSize: $('#block1').width()/39 + "px", 
    }); 
        $("#block1 .very_large_font").css({
       fontSize: $('#block1').width()/20 + "px", 
    }); 
   }; 
    if ( $('#block1').width() > 992 ){
        $("#block1 .normal_font").css({
       fontSize: $('#block1').width()/200 + "px", 
    }); 
         $("#block1 .large_font").css({
       fontSize: $('#block1').width()/40 + "px", 
    }); 
        $("#block1 .very_large_font").css({
       fontSize: $('#block1').width()/20 + "px", 
    }); 
   }; 
    
    
//    не соединять!!
    $("#block1 .line1 .logo_block img").css({
        width: $("#block1 .img_box").width()/100*55 + "px",
    });
    $("#block1 .line1 .logo_block img").css({
        marginTop: $("#block1 .line1 .img_box").height()/2 - $("#block1 .logo_block img").height()/2 + "px",
        marginLeft: $("#block1 .line1 .img_box").width()/2 - $("#block1 .logo_block img").width()/2 + "px",
    });
//    не соединять!!
        
        
        
        
       
        
        $("#block1 .line1 .logo_block .language .btn-floating").click( function(event){
            if(event.target.nodeName == "SPAN"){
            $("#block1 .line1 .logo_block .fixed-action-btn ul span").removeClass("active");
            $(event.target).addClass("active");
            };
        });
        
        
        
      
        
        
        
        if($('#block1').width() > 992){
            $('#block1 .for_btn').removeClass("btn").addClass("btn-large"); 
            
        }else if($('#block1').width() <= 992){
            $('#block1 .for_btn').removeClass("btn-large").addClass("btn"); 
              
        };
        
   
        
        
          $("#block1 .line1 .logo_block .language span").css({
        fontSize: $("#block1 .line1 .logo_block .language .fixed-action-btn").height()/1.7 + "px",
    });    
        
        
        
        
    $("#block1 .line2 .chose p").css({
        marginTop: $("#block1 .line2 .chose").height()/2 - $("#block1 .line2 .chose p").height()/2 + "px",
    });
    
    
     $("#block1 .line3 .development p").css({
        marginTop: $("#block1 .line3 .development").height()/2 - $("#block1 .line3 .development p").height()/2 + "px",
    });
   
    
    
    
    
    
    
    
    
    
    
    
    
    
    }
}