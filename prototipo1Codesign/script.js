function voltareScrollar() {
   window.location.href = "presentation.html";
}
function scrollarprabaixo() {
   scrollTo(0, 6500);
}

const content = document.getElementsByClassName("content");

var projects = [
   {
      id: 0,
      categoryId: 0,
      name: "Projeto 1",
      description: "Este projeto é sobre isso isso isso.",
      imgUrl: "./source/project.png"
   },
   {
      id: 1,
      categoryId: 1,
      name: "Projeto 2",
      description: "Este projeto é sobre isso isso isso.",
      imgUrl: "./source/project.png"
   },
   {
      id: 2,
      categoryId: 1,
      name: "Projeto 3",
      description: "Este projeto é sobre isso isso isso.",
      imgUrl: "./source/project.png"
   },
   {
      id: 3,
      categoryId: 3,
      name: "Projeto 4",
      description: "Este projeto é sobre isso isso isso.",
      imgUrl: "./source/project.png"
   }
   ,
   {
      id: 4,
      categoryId: 2,
      name: "Projeto 5",
      description: "Este projeto é sobre isso isso isso.",
      imgUrl: "./source/project.png"
   },
   {
      id: 5,
      categoryId: 2,
      name: "Projeto 6",
      description: "Este projeto é sobre isso isso isso.",
      imgUrl: "./source/project.png"
   }
]

function templateCard(item) {
   var card = document.createElement('div');
   var cardImg = document.createElement('div');
   var cardTxt = document.createElement('div');
   var img = document.createElement('img');
   var name = document.createElement('h4');
   var description = document.createElement('p');
   card.className = "card-project";
   cardImg.id = "card-img";
   cardTxt.id = "card-text";

   name.innerHTML = item['name'];
   description.innerHTML = item['description'];
   img.src = item['imgUrl'];

   card.appendChild(cardImg);
   cardImg.appendChild(img);
   card.appendChild(cardTxt);
   cardTxt.appendChild(name);
   cardTxt.appendChild(description);

   card.addEventListener("click", function () {
      window.location.href = "projeto-item.html?id=" + item['id'];
   });

   return card;
}

function removeAll() {
   for (child of content[0].children) {
      child.remove();
   }
}

function showList(id, list) {

   while (content[0].children.length > 0) removeAll();

   for (var i = 0; i < list.length; i++) {
      if (id == list[i]['categoryId']) {
         content[0].appendChild(templateCard(list[i]));
      }
   }
}