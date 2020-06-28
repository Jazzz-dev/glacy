var search_item = document.querySelector(".search_item");
var search_button = document.querySelector(".search_input");
var search_form_button = document.querySelector(".search_form_button");

search_item.addEventListener("click", function(evt) {
  evt.preventDefault();
  search_button.classList.toggle("hidden");
});
