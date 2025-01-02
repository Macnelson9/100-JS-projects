const updateInfo = [
  {
    image: "./img/dabi-my-hero-acadmeia-dv.jpg",
    testimony:
      " I love this product. I have been using it for a while now and it has been a wonderful experience. I would highly recommend it to anyone.",
    user: "Chidozie David",
  },
  {
    image: "./img/kakashi-hatake-artwork-5k-pa.jpg",
    testimony:
      " Words cannot express how important and useful the product has been to me. Everyone around me uses it. I am super proud of myself for giving it a try.",
    user: "Ikenna Mike",
  },
];

const imageEl = document.querySelector(".user-image");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");

let count = 0;

const updateTestimonial = function () {
  const { user, image, testimony } = updateInfo[count];
  imageEl.src = image;
  textEl.innerText = testimony;
  usernameEl.innerText = user;

  count++;

  if (count === updateInfo.length) {
    count = 0;
  }

  setTimeout(() => {
    updateTestimonial();
  }, 5000);
};

updateTestimonial();
