
//*--------------------SELECTORS------------------------------
const header = document.querySelector("header");
const scrollDown = document.querySelector('.arrow-down')
const scrolToTop = document.querySelector(".register");




//*--------------------EVENTS------------------------------
scrolToTop.addEventListener("click", function () {
  window.scrollTo(0, 10);
});

scrollDown.addEventListener("click", function () {
    window.scroll(0, 850);
  });

//*--------------------FUNCTIONS------------------------------
  window.onscroll = function() {scrollFunction()};
  function scrollFunction() {
    if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
      header.style.display = "flex";
    } else {
      header.style.display = "none"
    }
  }
  




 

