// ================= Hamburger Menu =================
const hamburger = document.getElementById('hamburger');
const navlist = document.getElementById('navlist');

hamburger.addEventListener('click', () => {
  navlist.classList.toggle('active');
});

// ================= Cart Panel Toggle =================
const cartToggle = document.getElementById('cart-toggle');
const cartTable = document.getElementById('cart-table');
const closeBtn = document.querySelector('.close-btn');

cartToggle.addEventListener('click', () => {
  cartTable.classList.toggle('active');
});

closeBtn.addEventListener('click', (e) => {
  e.preventDefault();
  cartTable.classList.remove('active');
});

// ================= Add to Cart Functionality =================
const addToCartBtns = document.querySelectorAll('.add-to-cart');
const cartList = document.querySelector('.cart-list');
const cartTotal = document.querySelector('.cart-total');
let total = 0;

addToCartBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const card = btn.parentElement;
    const name = card.querySelector('h4').innerText;
    const price = parseInt(card.querySelector('.price').innerText.replace('$',''));

    // Create cart item
    const li = document.createElement('li');
    li.className = 'item';
    li.innerHTML = `
      <img src="${card.querySelector('img').src}" alt="${name}">
      <div class="item-info">
        <h4>${name}</h4>
        <span class="item-total">$${price}</span>
      </div>
    `;
    cartList.appendChild(li);

    // Update total
    total += price;
    cartTotal.innerText = `$${total}`;
  });
});

// ================= Swiper Slider for Reviews =================
var swiper = new Swiper(".mySwiper", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
});

// ================= Back-to-Top Button =================
const backToTop = document.createElement('a');
backToTop.href = "#";
backToTop.innerHTML = "&#8679;";
backToTop.style.position = "fixed";
backToTop.style.bottom = "30px";
backToTop.style.right = "30px";
backToTop.style.background = "#ff7f50";
backToTop.style.color = "#fff";
backToTop.style.padding = "10px 15px";
backToTop.style.borderRadius = "50%";
backToTop.style.fontSize = "20px";
backToTop.style.display = "none";
backToTop.style.zIndex = "1000";
document.body.appendChild(backToTop);

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

backToTop.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

