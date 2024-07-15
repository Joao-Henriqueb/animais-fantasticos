const tabMenu = document.querySelectorAll('.js-tabmenu li');
const tabContent = document.querySelectorAll('.js-tabcontent section');

if (tabMenu.length && tabMenu.length) {
  function activeTab(index) {
    tabContent.forEach((content) => {
      content.classList.remove('ativa');
    });
    tabContent[index].classList.add('ativa');
  }

  tabMenu.forEach((itemMenu, index) => {
    itemMenu.addEventListener('click', () => {
      activeTab(index);
    });
  });
}
