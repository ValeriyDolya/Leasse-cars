
// ----- tabs for new cars page ---------

const tabItem = document.querySelectorAll('.tabs__btn-item');
const tabContent = document.querySelectorAll('.tabs__content-item');

tabItem.forEach(function(el){
  el.addEventListener('click', open);
});

function open(evt) {
  const tabTarget = evt.currentTarget;
  const button = tabTarget.dataset.button;


  tabItem.forEach(function(item) {
    item.classList.remove('tabs__btn-item--active')
  })
  tabTarget.classList.add('tabs__btn-item--active')

  tabContent.forEach(function(item) {
    item.classList.remove('tabs__content-item--active')
  })

  document.querySelector(`#${button}`).classList.add('tabs__content-item--active');
}

//----- Mobile menu ----------
const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu__list');
const headerInner = document.querySelector('.header__inner');
const burger = document.querySelectorAll('.menu__btn--span');
const clouse = document.querySelector('.menu__btn--close')


menuBtn.addEventListener('click', () => {
  menu.classList.toggle('menu__list--active');
  headerInner.classList.toggle('header__inner--active');
  burger.forEach(item => item.classList.toggle('displayNone')) ;
  clouse.classList.toggle('displayNone');
})

//---- swiper for index.html ------

const swiper = new Swiper(".swiper", {
  autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    effect: "fade",
  pagination: {
    el: ".swiper-pagination",
  },
});