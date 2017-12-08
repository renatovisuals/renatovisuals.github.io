import $ from 'jquery';

class MenuIcon{
  constructor(){
  this.menuButton = $("#toggle");
  this.topBar = $(".menu-icon__top");
  this.middleBar = $(".menu-icon__middle");
  this.bottomBar = $(".menu-icon__bottom");
  this.mobileNav = $("#mobileNav");
  this.events();
}

events(){
this.menuButton.click(this.toggleClass.bind(this));
}

toggleClass(){
  this.topBar.toggleClass("active");
  this.middleBar.toggleClass("active");
  this.bottomBar.toggleClass("active");
  this.mobileNav.toggleClass("mobile-nav--active");
}


}

export default MenuIcon;
