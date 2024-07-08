function initTabNav() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("ativo");

    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove("ativo");
      });
      tabContent[index].classList.add("ativo");
    }

    tabMenu.forEach((itemTab, index) => {
      itemTab.addEventListener("click", () => activeTab(index));
    });
  }
}
initTabNav();

function initAccordion() {
  const accordionList = document.querySelectorAll(".js-accordion dt");
  const activeClass = "ativo";

  if (accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}
initAccordion();

function initScrollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  if (linksInternos.length) {
    function scrollToSection(event) {
      event.preventDefault();
      const href = this.getAttribute("href");
      const section = document.querySelector(href);

      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    linksInternos.forEach((link) => {
      link.addEventListener("click", scrollToSection);
    });
  }
}
initScrollSuave();

function initAnimaScrol() {
  const sections = document.querySelectorAll(".js-scroll");
  if (sections.length) {
    const mediaScroll = window.innerWidth * 0.6;

    function animaScrol() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionVisivel = sectionTop - mediaScroll <= 0;
        sectionVisivel
          ? section.classList.add("ativo")
          : section.classList.remove("ativo");
      });
    }

    window.addEventListener("scroll", animaScrol);
  }
}
initAnimaScrol();
