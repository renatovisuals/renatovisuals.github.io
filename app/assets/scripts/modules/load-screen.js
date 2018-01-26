
class LoadScreen{
  constructor(){
  this.loadScreen = document.getElementById('loader');
  this.afterLoad();
}

afterLoad(){
var screen = this.loadScreen;
window.addEventListener("load",function(){
  document.body.removeChild(screen);
});


}


}

export default LoadScreen;
