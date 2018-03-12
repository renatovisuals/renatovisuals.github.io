import $ from 'jquery';
import smoothScroll from 'jquery-smooth-scroll';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';


class Header{
  constructor(){
    this.pageSections = $(".section");
    this.createPageSectionWaypoints();
    this.headerLinks = $(".navigation a");
    this.headerLis = $(".navigation__links");
    this.smoothScrollLinks = $("#smooth-scroll");
    this.addSmoothScrolling();
  }

  addSmoothScrolling(){
    this.headerLinks.smoothScroll();
  }

  createPageSectionWaypoints(){
    var that = this;
    this.pageSections.each(function(){
      var currentPageSection = this;
      new Waypoint({
        element: currentPageSection,
        handler: function(direction){
          if (direction == "down"){
            var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
            that.headerLis.removeClass("navigation__links--is-active");
            $(matchingHeaderLink).addClass("navigation__links--is-active");
          }
        },
      offset:"18%"
      });
      new Waypoint({
        element: currentPageSection,
        handler: function(direction){
          if (direction == "up"){
            var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
            that.headerLis.removeClass("navigation__links--is-active");
            $(matchingHeaderLink).addClass("navigation__links--is-active");
          }
        },
      offset:"-40%"
      });

    });
  }
  }

  export default Header;
