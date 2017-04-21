$(function() {

  function dropDownMenu() {
    var firstLiMenu = $(".main-menu").find("li").first();

    $(firstLiMenu).mouseenter(function() {
      $(this).find(".under-menu").slideDown(1000);
    })
    $(".under-menu").mouseleave(function() {
      $(".under-menu").slideUp(1000);
    });
  }
   dropDownMenu();

  function animateMiniBoxImg() {
    var chairBox = $(".chair-box")
    var miniBox = $(".chair-box-shdw");

    $(chairBox).mouseenter(function() {
       $(this).find(miniBox).fadeOut();
    })
    .mouseleave(function(){
      $(this).find(miniBox).fadeIn();
    })

  }
   animateMiniBoxImg()

});
