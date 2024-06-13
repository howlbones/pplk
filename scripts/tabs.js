const tabButtons = document.querySelectorAll('.tabs__tab-btn');
const tabs = document.querySelectorAll('.tabs__tab');

tabButtons.forEach((button) => {
  button.addEventListener('click', handleTabSwitch);
});

function handleTabSwitch(e) {
  const tabNumber = e.target.classList[1];
  tabButtons.forEach((button) => {
    button.classList.remove('active');
  });
  const activeTab = document.querySelector('.tabs__tab.active');
  activeTab.style.opacity = "0";
  activeTab.addEventListener('transitionend', (e) => {
    activeTab.classList.remove('active');
    tabs.forEach((tab) => {
      if (tab.classList[1] === tabNumber) {
        tab.style.opacity = "1";
        tab.classList.add('active');
      }
    })
  })



  e.target.classList.add('active');

}