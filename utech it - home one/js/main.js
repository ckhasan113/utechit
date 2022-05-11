/*=============================
        All jQuery Code
===============================*/

/*
=====================================
-------------------------------------
=====================================

Table Of Content

A. Plugins_Activation
      1. Stellarnav_Activation
      2. WOW_Animation_Activation
      3. Current_Class_Activation
      4. Counter_Area_Counter_Activation
      5. Isotope_Plugin_Activation
            
B. Regular_jQuery_Code
      1. Pre_Loader
      2. Scroll_To_Top
      3. Sticky_Navigationbar
      4. Button_Animation
            a. Header_Button
            b. Slider_Learn_Button
            c. Slider_Contact_Button
            d. Identify_Get_Started_Button
            e. Work_Get_Started_Button
            f. FAQ_Tougle_Function

C. Ouside_Function
      1. Product_Grid_View
      2. Product_List_View
      3. Pagination_Function
            a. Pagination_List
            b. Pagination_Main_Function
                  A. Visible_Page_Selection_Function
                  B. Main_Hero_Area_Top_Produc_Counter
                  C. Showing_Page
                  D. Pagination_Build
                  E. Previous_And_Next_Btn
                  F. Default_Page_Shoing
                  G. Pagination_On_Click_Functions

            c. Product_Filter_By_Price_Function


=====================================
-------------------------------------
=====================================
*/

/*-----------------------------
      Plugins_Activation
------------------------------*/

(function ($) {
  "use strict";

  /* jQuery Plugin Activation Start */

  jQuery(document).ready(function ($) {
    /* jQuery Function Start */
    //

    /* Stellarnav_Activation */
    jQuery(".stellarnav").stellarNav({
      theme: "dark",
      breakpoint: 1270,
      position: "right",
      phoneBtn: "+8801845592277",
      locationBtn: "https://www.google.com/maps",
      sticky: false,
    });

    /* WOW_Animation_Activation */
    new WOW().init();

    /* Current_Class_Activation */
    var navbarcurrentmenuclass = $(".navbarcurrentmenuclass");
    navbarcurrentmenuclass.onePageNav();

    /* jQuery Function End */
    //
  });

  //

  /* Counter_Area_Counter_Activation */
  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });

  /* Isotope_Plugin_Activation */
  var $grid = $(".portfolio_menu_items").isotope({
    // options
  });
  // filter items on button click
  $(".protfolio_menu").on("click", "li", function () {
    var filterValue = $(this).attr("data-filter");
    $grid.isotope({ filter: filterValue });
    $(this).addClass("active").siblings().removeClass("active");
  });

  /* jQuery Plugin Activation End */
})(jQuery);

//
/*--------------------
  Regular_jQuery_Code
----------------------*/
(function ($) {
  "use strict";

  jQuery(document).ready(function ($) {
    /* Pre_Loader */
    function handlePreloader() {
      if ($(".preloader").length) {
        $(".preloader").delay(200).fadeOut(500);
      }
    }
    handlePreloader();

    /* Scroll_To_Top */
    const scrollToTop = document.querySelector(".scrolltotop");
    window.addEventListener("scroll", () => {
      /* Determining that page is not in top */
      if (window.pageYOffset > 500) {
        scrollToTop.classList.add("show");
      } else {
        scrollToTop.classList.remove("show");
      }

      /* Determining that page in bottom */
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        scrollToTop.classList.add("page_bottom");
      } else {
        scrollToTop.classList.remove("page_bottom");
      }
    });

    /* Sticky_Navigationbar */
    function stickyNav() {
      window.onscroll = function () {
        myFunction();
      };

      var navbar = document.getElementById("header");
      var navBtn = document.getElementById("header_btn");
      var whiteLogo = document.getElementById("white_logo");
      var colorLogo = document.getElementById("color_logo");
      var sticky = navbar.offsetTop;

      function myFunction() {
        if (window.pageYOffset > sticky) {
          navbar.classList.add("sticky");
          navBtn.classList.remove("cbtn2");
          navBtn.classList.add("cbtn1");
          whiteLogo.classList.remove("show");
          colorLogo.classList.add("show");
        } else {
          navbar.classList.remove("sticky");
          navBtn.classList.remove("cbtn1");
          navBtn.classList.add("cbtn2");
          colorLogo.classList.remove("show");
          whiteLogo.classList.add("show");
        }
      }
    }
    stickyNav();

    /* Button_Animation */
    //
    /* Header_Button */
    $(function () {
      $(".header_btn_action").hover(function () {
        var classes = $(".header_btn_action").parent().attr("class");
        $(".header_btn_action").parent().attr("class", "animate");
        var indicator = $(".header_btn_action");
        setTimeout(function () {
          $(indicator).parent().addClass(classes);
        }, 20);
      });
    });

    /* Slider_Learn_Button */
    $(function () {
      $(".slider_learn_btn_action").hover(function () {
        var classes = $(".slider_learn_btn_action").parent().attr("class");
        $(".slider_learn_btn_action").parent().attr("class", "animate");
        var indicator = $(".slider_learn_btn_action");
        setTimeout(function () {
          $(indicator).parent().addClass(classes);
        }, 20);
      });
    });

    /* Slider_Contact_Button */
    $(function () {
      $(".slider_contact_btn_action").hover(function () {
        var classes = $(".slider_contact_btn_action").parent().attr("class");
        $(".slider_contact_btn_action").parent().attr("class", "animate");
        var indicator = $(".slider_contact_btn_action");
        setTimeout(function () {
          $(indicator).parent().addClass(classes);
        }, 20);
      });
    });

    /* Identify_Get_Started_Button */
    $(function () {
      $(".identity_get_started_btn_action").hover(function () {
        var classes = $(".identity_get_started_btn_action")
          .parent()
          .attr("class");
        $(".identity_get_started_btn_action").parent().attr("class", "animate");
        var indicator = $(".identity_get_started_btn_action");
        setTimeout(function () {
          $(indicator).parent().addClass(classes);
        }, 20);
      });
    });

    /* Work_Get_Started_Button */
    $(function () {
      $(".work_get_started_btn_action").hover(function () {
        var classes = $(".work_get_started_btn_action").parent().attr("class");
        $(".work_get_started_btn_action").parent().attr("class", "animate");
        var indicator = $(".work_get_started_btn_action");
        setTimeout(function () {
          $(indicator).parent().addClass(classes);
        }, 20);
      });
    });

    /* FAQ_Tougle_Function */
    $(".single_faq_title").click(function () {
      // Select the curresponding index
      var index = $(".single_faq_title").index($(this));

      if ($(".single_faq_area_text").eq(index).hasClass("anser_open")) {
        /*
         *If the selected index olready open then initialize to close it
         */
        $(".single_faq_area_text").removeClass("anser_open");
        $(".single_faq_title").removeClass("faq_anser_open");
      } else {
        /*
         *If the selected index not open then initialize to open it
         */
        $(".single_faq_area_text").removeClass("anser_open");
        $(".single_faq_title").removeClass("faq_anser_open");
        $(".single_faq_title").eq(index).addClass("faq_anser_open");
        $(".single_faq_area_text").eq(index).addClass("anser_open");
      }

      $(".single_faq_area_text").slideUp();
      $(".anser_open").slideDown();
    });

    //
  });
})(jQuery);

//
/*---------------------
    Ouside_Function
----------------------*/

/* Product_Grid_View */
document
  .querySelector(".grid_view_icon")
  .addEventListener("click", function (e) {
    var item_view = document.querySelector(".products_container");
    var grid_view_btn = document.querySelector(".grid_view_icon");
    var list_view_btn = document.querySelector(".list_view_icon");

    e.preventDefault();

    grid_view_btn.classList.add("active_view");
    list_view_btn.classList.remove("active_view");
    item_view.classList.remove("list_view");
  });

/* Product_List_View */
document
  .querySelector(".list_view_icon")
  .addEventListener("click", function (e) {
    var item_view = document.querySelector(".products_container");
    var grid_view_btn = document.querySelector(".grid_view_icon");
    var list_view_btn = document.querySelector(".list_view_icon");

    e.preventDefault();

    grid_view_btn.classList.remove("active_view");
    list_view_btn.classList.add("active_view");
    item_view.classList.add("list_view");
    // item_view.classList.contains("list_view")
    //   ? item_view.classList.remove("list_view")
    //   : item_view.classList.add("list_view");
  });

/* Pagination_Function */

/* Pagination_List */
function getPageList(totalPages, page, maxLength) {
  function range(start, end) {
    return Array.from(Array(end - start + 1), (_, i) => i + start);
  }

  var sideWidth = maxLength < 9 ? 1 : 2;
  var leftWidth = (maxLength - sideWidth * 2 - 3) >> 1;
  var rightWidth = (maxLength - sideWidth * 2 - 3) >> 1;

  if (totalPages <= maxLength) {
    return range(1, totalPages);
  }

  if (page <= maxLength - sideWidth - 1 - rightWidth) {
    return range(1, maxLength - sideWidth - 1).concat(
      0,
      range(totalPages - sideWidth + 1, totalPages)
    );
  }

  if (page >= totalPages - sideWidth - 1 - rightWidth) {
    return range(1, sideWidth).concat(
      0,
      range(totalPages - sideWidth - 1 - rightWidth - leftWidth, totalPages)
    );
  }

  return range(1, sideWidth).concat(
    0,
    range(page - leftWidth, page + rightWidth),
    0,
    range(totalPages - sideWidth + 1, totalPages)
  );
}

/* Pagination_Main_Function */
$(function () {
  var numberOfItems = $(".products_container_wrap .product_card_wrap").length;
  var limitPerPage = 12;
  var numberOfPages = Math.ceil(numberOfItems / limitPerPage);
  var paginationSize = 7;
  var currentPage;

  /* Visible_Page_Selection_Function */
  function showPage(whichPage) {
    if (whichPage < 1 || whichPage > numberOfPages) return false;

    currentPage = whichPage;

    /* Main_Hero_Area_Top_Produc_Counter */
    var visibleFirstItemIndex = (currentPage - 1) * limitPerPage + 1;
    var visibleLastItemIndex =
      currentPage * limitPerPage < numberOfItems
        ? visibleFirstItemIndex + limitPerPage - 1
        : numberOfItems;

    $(".visible_product_counter .start_index").text(visibleFirstItemIndex);
    $(".visible_product_counter .end_index").text(visibleLastItemIndex);
    $(".visible_product_counter .total_number").text(numberOfItems);

    /* Showing_Page */
    $(".products_container_wrap .product_card_wrap")
      .hide()
      .slice((currentPage - 1) * limitPerPage, currentPage * limitPerPage)
      .show();

    /* Pagination_Build */
    $(".pagination li").slice(1, -1).remove();

    getPageList(numberOfPages, currentPage, paginationSize).forEach((item) => {
      $("<li>")
        .addClass("page_item")
        .addClass(item ? "current_page" : "dots")
        .toggleClass("active", item === currentPage)
        .append(
          $("<a>")
            .addClass("page_link")
            .attr({ href: "javascript:void(0)" })
            .text(item || "...")
        )
        .insertBefore(".next_page");
    });

    $(".previous_page").toggleClass("disable", currentPage === 1);
    $(".next_page").toggleClass("disable", currentPage === numberOfPages);
    return true;
  }

  /* Previous_And_Next_Btn */
  $(".pagination").append(
    $("<li>")
      .addClass("page_item")
      .addClass("previous_page")
      .append(
        $("<a>")
          .addClass("page_link")
          .attr({ href: "javascript:void(0)" })
          .html("<i class='fa fa-arrow-left'></i>")
      ),
    $("<li>")
      .addClass("page_item")
      .addClass("next_page")
      .append(
        $("<a>")
          .addClass("page_link")
          .attr({ href: "javascript:void(0)" })
          .html("<i class='fa fa-arrow-right'></i>")
      )
  );

  /* Default_Page_Shoing */
  $(".card_content").show();
  showPage(1);

  /* Pagination_On_Click_Functions */
  $(document).on(
    "click",
    ".pagination li.current_page:not(.active)",
    function () {
      $("html, body").animate(
        {
          scrollTop: $("#main_hero_area").offset().top,
        },
        500
      );
      return showPage(+$(this).text());
    }
  );

  $(".next_page").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: $("#main_hero_area").offset().top,
      },
      500
    );
    return showPage(currentPage + 1);
  });

  $(".previous_page").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: $("#main_hero_area").offset().top,
      },
      500
    );
    return showPage(currentPage - 1);
  });
});

/* Product_Filter_By_Price_Function */
$(function () {
  $(".price_range_slider").slider({
    range: true,
    min: 0,
    max: 90,
    values: [0, 90],
    slide: function (event, ui) {
      $(".price_range_value .from").text("$" + ui.values[0]);
      $(".price_range_value .to").text("$" + ui.values[1]);
    },
  });
});
