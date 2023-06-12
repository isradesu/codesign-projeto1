function voltareScrollar() {
   window.location.href = "presentation.html";
}
function scrollarprabaixo() {
   scrollTo(0, 6500);
}

var path = window.location.pathname;

// Obtenha o elemento do menu que corresponde à página atual
var menuItems = document.getElementsByClassName("global-menu-item");

for (var i = 0; i < menuItems.length; i++) {
  var menuItem = menuItems[i];
  var menuItemLink = menuItem.querySelector("a");

  console.log(path);
  // Compare o caminho da URL com o valor do atributo href de cada link do menu
  if (("/prototipo1Codesign/views/" + menuItemLink.getAttribute("href")) === path) {
    menuItem.classList.add("active"); // Adicione a classe ativa ao item do menu correspondente
    break;
  }
}