
$( document ).ready(function() {
    
    
    
    

    
    
    
setHeight(); // устанавливаем высоту окна при первой загрузке страницы
$(window).resize( setHeight ); // обновляем при изменении размеров окна



forBlock1();
$(window).resize( forBlock1 );
    
    
forBlock2();
$(window).resize( forBlock2 );
    
forBlock3();
$(window).resize( forBlock3 );    
        
forBlock20();
$(window).resize( forBlock20 );    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});
