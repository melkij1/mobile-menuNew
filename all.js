jQuery(document).ready(function($) {

    /*================== Menu open =====================*/
    $(".sidemenu-btn").on("click", function() {
        $(".wrapper").toggleClass("stop");
        $(".sidemenu").toggleClass("slidein");
        return false;
    });
    $(".close-menu").on("click", function() {
        $(".wrapper").removeClass("stop");
        $(".sidemenu").removeClass("slidein");
        return false;
    });
    $(".close_subs").on("click", function() {
        $(".alert.alert-success").addClass("nodisplay");
        return false;
    });
    
    $(".sidemenu-btn2").on("click", function() {
        $(".wrapper").toggleClass("stop");
        $(".sidemenu2").toggleClass("slidein");
        return false;
    });
    $(".close-menu2").on("click", function() {
        $(".wrapper").removeClass("stop");
        $(".sidemenu2").removeClass("slidein");
        return false;
    });
    $(".close_subs").on("click", function() {
        $(".alert.alert-success").addClass("nodisplay");
        return false;
    });
    
    
    /*================== Menu Dropdown =====================*/
    $(".sidemenu ul ul,.widget_nav_menu ul ul").parent().addClass("menu-item-has-children");
    $(".sidemenu ul li.menu-item-has-children > a").on("click", function() {
        $(this).parent().toggleClass("active").siblings().removeClass("active");
        $(this).next("ul").slideToggle();
        $(this).parent().siblings().find("ul").slideUp();
        return false;
    });
    
    $(".sidemenu2 ul ul,.widget_nav_menu ul ul").parent().addClass("menu-item-has-children");
    $(".sidemenu2 ul li.menu-item-has-children > a").on("click", function() {
        $(this).parent().toggleClass("active").siblings().removeClass("active");
        $(this).next("ul").slideToggle();
        $(this).parent().siblings().find("ul").slideUp();
        return false;
    });
    
});