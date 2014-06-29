
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
    this.setFooter();
  },

  setFooter:function() {
    var top = $(document).height();
    //alert(top);
    $("#foot").css("top",top - 40);
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
        $(".aboutInfo0").fadeOut("fast");
        $(".aboutInfo1").fadeOut("fast");
        $(".aboutInfo2").fadeOut("fast");
      });
    }
  };

  var tabs = {
    init:function() {
      this.switchTabs();
    },

    switchTabs:function() {
      var activeTab = $("#overviewTab");
      $("#overviewTab").addClass("activeTab");
      $(".campaignProfile").hide();
      $(".campaignComments").hide();
      $(".campaignUpdates").hide();

      $("#profileTab").click(function(){
        $(activeTab).removeClass("activeTab");
        activeTab = $("#profileTab");
        $("#profileTab").addClass("activeTab");
        $(".campaignSummary").hide();
        $(".campaignComments").hide();
        $(".campaignUpdates").hide();
        $(".campaignBanner").hide();
        $(".campaignProfile").fadeIn("fast");
      });

      $("#overviewTab").click(function(){
        $(activeTab).removeClass("activeTab");
        activeTab = $("#overviewTab");
        $("#overviewTab").addClass("activeTab");
        $(".campaignBanner").fadeIn("fast");
        $(".campaignSummary").fadeIn("fast");
        $(".campaignComments").hide();
        $(".campaignUpdates").hide();
        $(".campaignProfile").hide();
      });

      $("#commentsTab").click(function(){
        $(activeTab).removeClass("activeTab");
        activeTab = $("#commentsTab");
        $("#commentsTab").addClass("activeTab");
        $(".campaignBanner").hide();
        $(".campaignSummary").hide();
        $(".campaignComments").fadeIn("fast");
        $(".campaignUpdates").hide();
        $(".campaignProfile").hide();
      });

      $("#updatesTab").click(function(){
        $(activeTab).removeClass("activeTab");
        activeTab = $("#updatesTab");
        $("#updatesTab").addClass("activeTab");
        $(".campaignBanner").hide();
        $(".campaignSummary").hide();
        $(".campaignComments").hide();
        $(".campaignUpdates").fadeIn("fast");
        $(".campaignProfile").hide();
      });
    }
  };

  var postComment = {
    init:function() {
      this.post();
    },

    post:function(){
      $(".postButton").click(function(){
        var text = $(".commentsInput").val();
        var insert = "<div class='comment'><img src='img/face2.jpg'><h4>Shaun Manic</h4><h5>Just Now</h5><p>"+text+"</p></div>";
        $(insert).appendTo(".commentsContainer").hide().slideDown();
        $(".commentsInput").val("");
      });
    }
  };

  var slider = {
    init:function(){
      this.slide();
    },

    slide:function(){
      var numberOfSlides = 3;
      var currentSlide = 1;
      var nextSlide = 2;
      var lastSlide = 3;
      //set arrow position 
      $("#right").css("left",$(window).width() - 40);
      //set slide width
      $(".slide img").css("width",$(window).width());
      //show first slide 
      $("#slide"+currentSlide).show();
      //switch slide auto 
      setInterval(
          function() 
          {
            $("#right").trigger("click");

          }, 3000);
      //on right arrow click 
      $("#right").click(function(){
        $("#slide"+nextSlide).css("left","-1500px");
        $("#slide"+nextSlide).show();
        $("#slide"+currentSlide).animate({
            "left":"1500px",
          }, 500);
        $("#slide"+nextSlide).animate({
            "left":"0px",
          }, 500);
        setTimeout(
          function() 
          {
            $("#slide"+currentSlide).hide();
            //update variables 
            lastSlide = currentSlide;
            currentSlide = nextSlide;
            nextSlide = nextSlide+1;
            if(nextSlide > numberOfSlides) {
              nextSlide = 1;
            }
          }, 501);
      });
      //on left arrow click 
      $("#left").click(function(){
        $("#slide"+lastSlide).show();
        $("#slide"+lastSlide).css("left","1500px");
        $("#slide"+currentSlide).animate({
            "left":"-1500px",
          }, 500);
        $("#slide"+lastSlide).animate({
            "left":"0px",
          }, 500);
        setTimeout(
          function() 
          {
            nextSlide = currentSlide;
            currentSlide = lastSlide;
            lastSlide = lastSlide -1;
            if(lastSlide < 1) {
              lastSlide = numberOfSlides;
            }

          }, 501);
      });
    }

  };

  var gallery = {
    init:function() {
      this.switchPic();
    },

    switchPic:function() {
      $(".thumbPic").click(function(){
        var src = $(this).attr('src');
        $("#mainDisplay").fadeOut();
        setTimeout(
          function() 
          {
           $("#mainDisplay").attr('src',src);
           $("#mainDisplay").fadeIn();
          }, 400);
      });
    }
  };

var BannerTitle = {
  init:function() {
    this.citySwitch();
  },



  citySwitch:function(){
    var counter = 0;
    setInterval(
          function() 
          {
            var cities = ["Atlanta","Savannah","Athens"];
            $("#city").fadeOut("slow");
            var insert = '<span id="city">'+cities[counter]+'</span>';
            counter++;
            if(counter > 2){counter =0;}
            setTimeout(
              function() 
              {

                $("#city").remove();
                $(insert).appendTo(".bannerTitle");
                $("#city").fadeIn("slow");

              }, 400);

          }, 3000);
  }
};

 

  (function() {
    BannerTitle.init();
    setBanner.init();
    stickyHeader.init();
    showInfo.init();
    tabs.init();
    postComment.init();
    slider.init();
    gallery.init();

  }()); 

}); 