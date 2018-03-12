import "../../../node_modules/normalize.css/normalize.css";
import '../scss/main.scss';
import MenuIcon from './modules/menu-icon';
import RevealOnScroll from './modules/RevealOnScroll';
import LoadScreen from './modules/load-screen';
import Header from './modules/header'
import $ from 'jquery';
const message = 'hello webpack';
var menuIcon = new MenuIcon();
var loadScreen = new LoadScreen();
var header = new Header();
new RevealOnScroll($(".reveal-item"),"40%","reveal-item--is-visible");
new RevealOnScroll($(".photoshop"),"85%","rating__photoshop-skill");
new RevealOnScroll($(".illustrator"),"85%","rating__illustrator-skill");
new RevealOnScroll($(".javascript"),"85%","rating__javascript-skill");
new RevealOnScroll($(".html"),"85%","rating__html-skill");
new RevealOnScroll($(".css"),"85%","rating__css-skill");
new RevealOnScroll($(".patience"),"85%","rating__patience-skill");
