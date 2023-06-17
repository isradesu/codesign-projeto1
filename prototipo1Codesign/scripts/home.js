
const frog = document.querySelector('#botaoegressos')
const sapoLevantando = new Image();

const sapoNormal = 'images/frog_graduates.png'

sapoLevantando.src = 'images/frog_hover.png'
sapoLevantando.onload = function(){
frog.addEventListener('mouseover', function() {
  this.style.backgroundImage = `url(${sapoLevantando.src})`;
  this.style.width = "6.77vw";
  this.style.height = "12.08vw";
  this.style.marginLeft = "-0.47vw"
});
/*        width: 5.83vw;
    height: 12.08vw;* */
frog.addEventListener('mouseout', function() {
  this.style.backgroundImage = `url(${sapoNormal})`;

  this.style.marginLeft = "vw"

});}

const dog = document.querySelector('#botaoprojetos')
const cachorroLevantando = new Image();

const cachorroNormal = 'images/dog_projects.png'

cachorroLevantando.src = 'images/dog_hover.png'
cachorroLevantando.onload = function(){
dog.addEventListener('mouseover', function() {
  this.style.backgroundImage = `url(${cachorroLevantando.src})`;
  this.style.width = "4.95vw";
  this.style.height = "9.69vw";
  
});
/*        width: 5.83vw;
    height: 12.08vw;* */
dog.addEventListener('mouseout', function() {
  this.style.backgroundImage = `url(${cachorroNormal})`;

  this.style.marginLeft = "vw"

});}

// const owl = document.querySelector('#botaotrilhas')
// const corujaLevantando = new Image();

// const corujaNormal = 'images/owl_trails.png'

// corujaLevantando.src = 'images/owl_hover.png'
// corujaLevantando.onload = function(){
// owl.addEventListener('mouseover', function() {
//   this.style.backgroundImage = `url(${corujaLevantando.src})`;
//   this.style.width = "9.53vw";
//   this.style.height = "8.82vw";
//   this.style.marginLeft = "-2vw"
//   this.style.paddingTop = '-6vw'
  
// });
//     //    width: 5.83vw;
//     // height: 12.08vw;
// owl.addEventListener('mouseout', function() {
//   this.style.backgroundImage = `url(${corujaNormal})`;
//   this.style.height = "6.82vw";
  

// });}

