$(function() {
  menu = $("nav ul");

  $("#openup").on("click", function(e) {
    e.preventDefault();
    menu.slideToggle();
  });

  $(window).resize(function() {
    var w = $(this).width();
    if (w > 580 && menu.is(":hidden")) {
      menu.removeAttr("style");
    }
  });

  $("nav li").on("click", function(e) {
    var w = $(window).width();
    if (w < 580) {
      menu.slideToggle();
    }
  });
  $(".open-menu").height($(window).height());

  $(".cf a[href='#showcase']").on("click", e => {
    e.preventDefault();
    const hash = this.hash;
    $("html,body").animate(
      {
        scrollTop: $("#showcase").offset().top
      },
      1000
    );
  });
  $(".cf a[href='#music']").on("click", e => {
    e.preventDefault();
    const hash = this.hash;
    $("html,body").animate(
      {
        scrollTop: $("#music").offset().top
      },
      1000
    );
  });
  $(".cf a[href='#video']").on("click", e => {
    e.preventDefault();
    const hash = this.hash;
    $("html,body").animate(
      {
        scrollTop: $("#video").offset().top
      },
      1000
    );
  });
  $(".cf a[href='#gift-cards']").on("click", e => {
    e.preventDefault();
    const hash = this.hash;
    $("html,body").animate(
      {
        scrollTop: $("#gift-cards").offset().top
      },
      1000
    );
  });
});
