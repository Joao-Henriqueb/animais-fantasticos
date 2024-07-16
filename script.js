function initTabNav() {
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
}

function initAccordion() {
  const accordionList = document.querySelectorAll('.js-acoordion dt');
  if (accordionList.length) {
    accordionList[0].classList.add('ativa');
    accordionList[0].nextElementSibling.classList.add('ativa');

    function activeAccordion() {
      this.classList.toggle('ativa');
      this.nextElementSibling.classList.toggle('ativa');
    }

    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    });
  }
}

function initScrolSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  if (linksInternos.length) {
    function scrollTosection(event) {
      event.preventDefault();
      const href = event.currentTarget.getAttribute('href');
      const section = document.querySelector(href);

      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }

    linksInternos.forEach((link) => {
      link.addEventListener('click', scrollTosection);
    });
  }
}

function initAnimacaoScroll() {
  const sections = document.querySelectorAll('.js-scroll');
  if (sections.length) {
    const windowMetade = innerHeight * 0.3;
    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top - windowMetade;
        const isSectionVisible = sectionTop - windowMetade < 0;

        if (isSectionVisible) {
          section.classList.add('ativa');
        }
      });
    }
    animaScroll();

    window.addEventListener('scroll', animaScroll);
  }
}
initTabNav();
initAccordion();
initScrolSuave();
initAnimacaoScroll();
