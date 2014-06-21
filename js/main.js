
$(document).ready(function() {
  
function fullscreen() {
    $('a').click(function() {
        if(!$(this).hasClass('noeffect')) {
            window.location = $(this).attr('href');
            return false;
        }
    });
}
 
fullscreen();

var setBanner = {
  init:function(){
    this.bannerSize();
  },

  bannerSize:function() {
    var viewportHeight = $(window).height();
    var stick = viewportHeight -65;
    $(".banner").css("height",viewportHeight);
    $(".navList").css("top",stick);
  }
};

var stickyHeader = {
    init:function() {
      this.stick();
    },

    stick: function() {
      $(window).scroll(function(){
      var viewportHeight = $(window).height();
      var stick = viewportHeight -65;
      var top =  $(this).scrollTop();
      var height = $(this).height() - 60;
      height = (height / 100) * 100;
      if(top > height) {
        $(".navList").addClass("headerStick");
        $(".navList").css("top",0);
        $(".bannerOnly").addClass("blackOut");
      } else {
        $(".navList").removeClass("headerStick");
        $(".bannerOnly").removeClass("blackOut");
        $(".navList").css("top",stick);
      }
      });
    }
  };

  var slideShow = {
    init:function() {
      this.slideOver();
    },

    slideOver:function() {
      //set height of the slides
      var height = $(window).height();
      var width = $(window).width();
      $('.slide').css("height",height);
      $('.slider').css("height",height);
      $('.slide').css("width",width);
      $('.slider').css("width",width);

      //amount of slides 
      
      //hide slides inactiveSlides
      
        

      //switch slides on interval
      setInterval(function(){
        
      }, 5000);
    }
  };

  var showInfo = {
    init:function() {
      this.info();
    },

    info:function() {
      $(".infoLi").mouseenter(function(){
        var block = $(this).attr("data-id");
        if(block == 0) { $(".aboutInfo0").show();}
        if(block == 1) { $(".aboutInfo1").show();}
        if(block == 2) { $(".aboutInfo2").show();}
      });
      $(".infoLi").mouseleave(function(){
        $(".aboutInfo0").fadeOut();
        $(".aboutInfo1").fadeOut();
        $(".aboutInfo2").fadeOut();
      });
    }
  };
 

  (function() {
    setBanner.init();
    stickyHeader.init();
    slideShow.init();
    showInfo.init();

  }()); 

}); 