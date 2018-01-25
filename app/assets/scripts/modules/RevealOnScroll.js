import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
class RevealOnScroll {
  constructor(els, offset, newClass){
    this.itemsToReveal = els;
    this.offsetPercentage = offset;
    this.createWaypoints();
    this.newClass = newClass;
  }



  createWaypoints(){
    var that = this;
    this.itemsToReveal.each(function(){
      var currentItem = this;
      new Waypoint({
        element: currentItem,
        handler: function(){
          $(currentItem).addClass(that.newClass);
        },
        offset:that.offsetPercentage
      });
    });
  }
}

export default RevealOnScroll;
