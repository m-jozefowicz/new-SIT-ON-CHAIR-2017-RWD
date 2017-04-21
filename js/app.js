$(function() {

  // simply drop down menu in nav section
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


   // fadeIn/Out effect on title box in section 3
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

document.addEventListener("DOMContentLoaded", function(){

  // SLIDER in pure javascript

  //
  var buttonNext = document.getElementById("arrow-right");
  var buttonPrev = document.getElementById("arrow-left");
  console.log(buttonNext);
  console.log(buttonPrev);

  var allLiElem = document.querySelectorAll("#images-slider li");
  console.log(allLiElem);

  var indexImg = 0;
  //

  allLiElem[indexImg].classList.add("visible");
  // console.log(indexImg);

  //

  buttonNext.addEventListener("click", function() {
    allLiElem[indexImg].classList.remove("visible");
    if(indexImg == allLiElem.length-1) {
      indexImg = -1;
    }
    indexImg++;
    allLiElem[indexImg].classList.add("visible");
  });
  //

  buttonPrev.addEventListener("click", function() {
    allLiElem[indexImg].classList.remove("visible");
    if (indexImg < 0) {
     indexImg=0;
     indexImg++;
    }
    indexImg--;
    allLiElem[indexImg].classList.add("visible");
  });

});
