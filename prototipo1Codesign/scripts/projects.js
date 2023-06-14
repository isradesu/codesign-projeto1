import {projects} from './data.js';

const content = document.getElementsByClassName("content");

function templateCard(item) {
   var card = document.createElement('div');
   var cardImg = document.createElement('div');
   var cardTxt = document.createElement('div');
   var img = document.createElement('iframe');
   var name = document.createElement('h4');
   var description = document.createElement('p');
   card.className = "card-project";
   cardImg.id = "card-img";
   cardTxt.id = "card-text";

   name.innerHTML = item['name'];
   description.innerHTML = item['descriptionCard'];
   img.src = item['videoUrl'];

   img.frameBorder = 0;

   card.appendChild(cardImg);
   cardImg.appendChild(img);
   card.appendChild(cardTxt);
   cardTxt.appendChild(name);
   cardTxt.appendChild(description);

   card.addEventListener("click", function () {
      window.location.href = "./project-item.html?id=" + item['id'];
   });

   return card;
}

function removeAll() {
   for (child of content[0].children) {
      child.remove();
   }
}

function showList(id) {
   while (content[0].children.length > 0) removeAll();

   for (var i = 0; i < projects.length; i++) {
      if (id == projects[i]['categoryId']) {
         content[0].appendChild(templateCard(projects[i]));
      }
   }
}

var menuItems = document.getElementsByClassName('item-menu');

for (var i = 0; i < menuItems.length; i++) {
   menuItems[i].addEventListener("click", function () {
      showList(this.id);
   });
}