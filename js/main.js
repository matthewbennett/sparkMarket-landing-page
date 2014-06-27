
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

 

  (function() {
    setBanner.init();
    stickyHeader.init();
    showInfo.init();
    tabs.init();

  }()); 

}); 