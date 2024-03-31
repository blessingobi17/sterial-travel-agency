const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", () => {
  const navList = document.querySelector(".nav-list");
  const overlay = document.querySelector(".overlay");

  navList.style.display = "flex";
  overlay.style.display = "block";
});

const closeBtn = document.querySelector(".closeBtn");
closeBtn.addEventListener("click", () => {
  const navList = document.querySelector(".nav-list");
  const overlay = document.querySelector(".overlay");

  navList.style.display = "none";
  overlay.style.display = "none";
});

const dropdown = document.querySelector(".dropdown");
dropdown.addEventListener("click", () => {
  const dropdownList = document.querySelector(".dropdown-list");

  if (dropdownList.style.display == "block") {
    dropdownList.style.display = "none";
  } else {
    dropdownList.style.display = "block";
  }
});

const swiper1 = new Swiper(".swiper1", {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  slidesPerView: 5,
  spaceBetween: 0,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
});

if (window.innerWidth <= 767) {
  const swiper1 = new Swiper(".swiper1", {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    slidesPerView: 1,
    spaceBetween: 0,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },
  });
}

if (window.innerWidth >= 768 && window.innerWidth <= 884) {
  const swiper1 = new Swiper(".swiper1", {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    slidesPerView: 3,
    spaceBetween: 0,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },
  });
}

const swiper2 = new Swiper(".swiper2", {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  slidesPerView: 5,
  spaceBetween: 0,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
});

if (window.innerWidth <= 767) {
  const swiper2 = new Swiper(".swiper2", {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    slidesPerView: 1,
    spaceBetween: 0,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },
  });
}

if (window.innerWidth >= 768 && window.innerWidth <= 884) {
  const swiper2 = new Swiper(".swiper2", {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    slidesPerView: 3,
    spaceBetween: 0,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },
  });
}

const FAQ = [
  {
    id: 11111,
    name: "How to download and register?",
    text: "Far far away, behind the word mountains,far from the countries Vokalia and Consonantia,there live the blind texts. Separated  they live in Bookmarksgrove right at the coast of the Semantics,a large language ocean.",
  },
  {
    id: 22222,
    name: "How to create your paypal account?",
    text: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, inwhich roasted parts of sentences fly into your mouth.",
  },
  {
    id: 33333,
    name: "How to link your paypal and bank account?",
    text: " When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.",
  },
  {
    id: 44444,
    name: "We are better than others?",
    text: " When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.",
  },
];

let html = "";

FAQ.forEach((info) => {
  html += ` <section class="kk">
              <div class="FAQ-header js-FAQ-header-${info.id}">
                <i class="fa-solid fa-minus js-minus-${info.id}" id="minus" data-faq-id=${info.id}></i>
                <i class="fa-solid fa-plus js-plus-${info.id}" id="plus" data-faq-id=${info.id}></i>
                <p class="FAQ-p js-FAQ-p-${info.id}">${info.name}</p>
              </div>
              <div class="FAQ-body js-FAQ-body-${info.id}">
              <p class="FAQ-body-p">${info.text}</p> 
              </div>
            </section>`;
});

document.querySelector(".sixth-container-section-content").innerHTML = html;

document.querySelectorAll("#plus").forEach((plusBtn) => {
  plusBtn.addEventListener("click", () => {
    const faqId = plusBtn.dataset.faqId;

    const faqHeader = document.querySelector(`.js-FAQ-header-${faqId}`);
    const FAQp = document.querySelector(`.js-FAQ-p-${faqId}`);
    const FAQbody = document.querySelector(`.js-FAQ-body-${faqId}`);
    const minus = document.querySelector(`.js-minus-${faqId}`);
    const plus = document.querySelector(`.js-plus-${faqId}`);

    faqHeader.style.background = "#f17945";
    FAQbody.style.display = "block";
    FAQp.style.color = "#ffffff";
    minus.style.display = "block";
    minus.style.color = "#ffffff";
    plus.style.display = "none";
  });
});

document.querySelectorAll("#minus").forEach((minusBTN) => {
  minusBTN.addEventListener("click", () => {
    const faqId = minusBTN.dataset.faqId;

    const faqHeader = document.querySelector(`.js-FAQ-header-${faqId}`);
    const FAQp = document.querySelector(`.js-FAQ-p-${faqId}`);
    const FAQbody = document.querySelector(`.js-FAQ-body-${faqId}`);
    const minus = document.querySelector(`.js-minus-${faqId}`);
    const plus = document.querySelector(`.js-plus-${faqId}`);

    faqHeader.style.background = "transparent";
    FAQbody.style.display = "none";
    FAQp.style.color = "#212529";
    minus.style.display = "none";
    plus.style.color = "#212529";
    plus.style.display = "block";
  });
});
