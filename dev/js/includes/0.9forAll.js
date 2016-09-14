//Определяет высоту блоков adaptation-window
function setHeight() {
    $('.adaptation-window').css({
        height: $(window).height() + 'px',
        width: $(window).width() + 'px',
    });
}

////Определяет высоту паддинги окон adaptation-window_andPaddings(section) и определяет высоту и ширину окон adaptive-container-wrap
//function setHeightAndPadding() {
//    $('.adaptation-window_andPaddings').css({
//        height: $(window).height() - 64 + 'px',
//        paddingTop: $('.adaptation-window_andPaddings').height()/20 + 'px',
//        paddingLeft: $(window).width()/29 + 'px',
//    });
//     $('.adaptive-container-wrap').css({ 
//        height: $('.adaptation-window_andPaddings').height()/1.06 + 'px',
//        width: $('.adaptation-window_andPaddings').width()/1.04 + 'px'
//    });
//};
//
//setHeightAndPadding(); 
//$(window).resize( setHeightAndPadding );
//setHeightAndPadding(); 



