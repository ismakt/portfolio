'use strict';



// ==========================================
// ELEMENT TOGGLE
// ==========================================

const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};



// ==========================================
// SIDEBAR
// ==========================================

const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
});



// ==========================================
// TESTIMONIALS MODAL
// ==========================================

const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
};

for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// ==========================================
// CUSTOM FILTER SELECT
// ==========================================

const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () {
  elementToggleFunc(this);
});

const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {

      filterItems[i].classList.add("active");

    } else if (selectedValue === filterItems[i].dataset.category) {

      filterItems[i].classList.add("active");

    } else {

      filterItems[i].classList.remove("active");

    }

  }

};

for (let i = 0; i < selectItems.length; i++) {

  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();

    selectValue.innerText = this.innerText;

    elementToggleFunc(select);

    filterFunc(selectedValue);

  });

}

let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();

    selectValue.innerText = this.innerText;

    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");

    this.classList.add("active");

    lastClickedBtn = this;

  });

}



// ==========================================
// CONTACT FORM
// ==========================================

const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

for (let i = 0; i < formInputs.length; i++) {

  formInputs[i].addEventListener("input", function () {

    if (form.checkValidity()) {

      formBtn.removeAttribute("disabled");

    } else {

      formBtn.setAttribute("disabled", "");

    }

  });

}



// ==========================================
// PAGE NAVIGATION
// ==========================================

const projectButtons = document.querySelectorAll(".open-project");
const projectPages = document.querySelectorAll(".project-details");
const portfolioPage = document.querySelector(".portfolio");
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// OPEN PROJECT
projectButtons.forEach(btn => {

  btn.addEventListener("click", function (e) {
    e.preventDefault();

    const project = this.dataset.project;

    // reset pages
    pages.forEach(p => p.classList.remove("active"));
    navigationLinks.forEach(n => n.classList.remove("active"));

    // hide portfolio system
    portfolioPage.classList.remove("active");

    // open project
    projectPages.forEach(p => p.classList.remove("active"));

    const target = document.querySelector(`[data-project-page="${project}"]`);

    if (target) {
      target.classList.add("active");
    }

    window.scrollTo(0, 0);
  });

});


// BACK BUTTON
document.querySelectorAll(".back-btn").forEach(btn => {

  btn.addEventListener("click", () => {

    projectPages.forEach(p => {
      p.classList.remove("active");
    });

    portfolioPage.classList.add("active");

    window.scrollTo(0, 0);

  });

});


// NAVIGATION (About / Resume / Portfolio)
document.querySelectorAll("[data-nav-link]").forEach((link, index) => {

  link.addEventListener("click", function () {

    // close projects ALWAYS
    projectPages.forEach(p => p.classList.remove("active"));

    // activate correct page
    pages.forEach(p => p.classList.remove("active"));
    navigationLinks.forEach(n => n.classList.remove("active"));

    pages[index].classList.add("active");
    this.classList.add("active");

    window.scrollTo(0, 0);

  });

});






// ==========================================
// VIDEO MODAL
// ==========================================

const openVideoModalButtons = document.querySelectorAll(".open-video");

const closeVideoModal = document.getElementById("closeVideoModal");

const videoModal = document.getElementById("videoModal");

if (videoModal && closeVideoModal) {

  openVideoModalButtons.forEach(btn => {

    btn.addEventListener("click", () => {

      videoModal.classList.add("active");

    });

  });

  closeVideoModal.addEventListener("click", () => {

    videoModal.classList.remove("active");

  });

}