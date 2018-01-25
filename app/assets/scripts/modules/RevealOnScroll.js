import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
class RevealOnScroll {
  constructor(){
    this.itemsToReveal = $(".about-module");
    this.createWaypoints();
  }



  createWaypoints(){
    this.itemsToReveal.each(function(){
      var currentItem = this;
      new Waypoint({
        element: currentItem,
        handler: function(){
          $(currentItem).addClass("reveal-item--is-visible");
        },
        offset:"45%"
      });
    });
  }
}

export default RevealOnScroll;
