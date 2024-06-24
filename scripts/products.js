const productTabButtons = document.querySelectorAll('.products__tabs_tab-btn');
const productTabs = document.querySelectorAll('.products__tabs_tab');
const leftSliderArrow = document.querySelector('.product-slider__arrow-container_left');
const rightSliderArrow = document.querySelector('.product-slider__arrow-container_right');
const productSliderWrapper = document.querySelector('.product-slider__image-wrapper'); 
const productSliderContainer = document.querySelector('.product-slider__image-container'); 


productTabButtons.forEach((button) => {
  button.addEventListener('click', handleProductTabSwitch);
});

function handleProductTabSwitch(e) {
  const tabNumber = e.target.classList[1];
  productTabButtons.forEach((button) => {
    button.classList.remove('active');
  });
  const activeTab = document.querySelector('.products__tabs_tab.active');
  activeTab.style.opacity = "0";

  setTimeout((e) => {
    activeTab.classList.remove('active');
    productTabs.forEach((tab) => {
      if (tab.classList[1] === tabNumber) {
        tab.style.opacity = "1";
        tab.classList.add('active');
      }
    })
  }, 250);

  e.target.classList.add('active');
}

