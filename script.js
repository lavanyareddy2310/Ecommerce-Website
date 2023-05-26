
/* NavBar */

const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const cross = document.getElementById('close');


if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}
if (cross) {
    cross.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

/* Cart */
let cartIcon = document.querySelector('.lg-bag');
let cart = document.querySelector('.cart-details');
let closeCart = document.querySelector('#close-cart');


cartIcon.onclick = () => {
    cart.classList.add("active");
}
closeCart.onclick = () => {
    cart.classList.remove("active");
}
function removeCartItem(event) {
    var btnClicked = event.target
    btnClicked.parentElement.remove()
    updateTotal();
}
function updateTotal() {
    var cartBoxes = document.getElementsByClassName('cart-box')
    var total = 0;
    for (var i = 0; i < cartBoxes.length; i++) {
        var cartBox = cartBoxes[i]
        var priceEle = cartBox.getElementsByClassName('cart-price')[0];
        var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
        var price = parseFloat(priceEle.innerText.replace("Rs. ", ""));
        var quantity = quantityElement.value
        total = total + (price * quantity);


        document.getElementsByClassName('total-price')[0].innerText = "Rs. " + total;
    }
}
function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateTotal();
}
function ready() {
    var removeCartBtn = document.getElementsByClassName('cart-remove');
    console.log(removeCartBtn)
    for (var i = 0; i < removeCartBtn.length; i++) {
        var button = removeCartBtn[i];
        button.addEventListener('click', removeCartItem)
    }
    var quantityInp = document.getElementsByClassName('cart-quantity')
    for (var i = 0; i < quantityInp.length; i++) {
        var input = quantityInp[i];
        input.addEventListener('change', quantityChanged);
    }
}
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
}
else {
    ready();
}


/* Testinomial */
const testimonials = [
    {
        name: "Eva Sawyer",
        job: "CEO, Fashworks",
        image: "https://i.pinimg.com/originals/99/95/2e/99952ea2370ed39f38520bf5715201a7.png",
        testimonial:
            "I absolutely love shopping at this fashion website! The selection of clothing and accessories is always on-trend and stylish. I have received so many compliments on the items I've purchased from here, and I always feel confident and fashionable when I wear them.",
    },
    {
        name: "Katey Topaz",
        job: "Developer, TechCrew",
        image: "https://i.pinimg.com/736x/53/bd/cf/53bdcfbe128409ff41807174ac0ae187.jpg",
        testimonial:
            "This fashion website has become my go-to for all of my clothing needs. The quality of the clothing is amazing, and the prices are unbeatable. I also appreciate the variety of sizes and styles available, making it easy for me to find pieces that fit my body type and personal taste.",
    },
    {
        name: "Jae Robin",
        job: "UI Designer, Affinity Agency",
        image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8NHx8bWFuJTIwcHJvZmlsZXx8MHx8fHwxNjI4OTA1OTA0&ixlib=rb-1.2.1&q=80&w=1080",
        testimonial:
            "I was hesitant to order clothing online, but I am so glad I gave this fashion website a chance. The shipping was fast, the customer service was helpful and friendly, and the clothes exceeded my expectations. I have recommended this website to all of my friends and family!",
    },
    {
        name: "Nicola Blakely",
        job: "CEO,Zeal Wheels",
        image: "https://th.bing.com/th/id/OIP.PXva0iwzpSjo9X5hVd8zGwHaHa?pid=ImgDet&w=1080&h=1080&rs=1",
        testimonial:
            "I was hesitant to order clothing online, but I am so glad I gave this fashion website a chance. The shipping was fast, the customer service was helpful and friendly, and the clothes exceeded my expectations. I have recommended this website to all of my friends and family!",
    },
];
//Current Slide
let i = 0;
//Total Slides
let j = testimonials.length;
let testimonialContainer = document.getElementById("testimonial-container");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");
nextBtn.addEventListener("click", () => {
    i = (j + i + 1) % j;
    displayTestimonial();
});
prevBtn.addEventListener("click", () => {
    i = (j + i - 1) % j;
    displayTestimonial();
});
let displayTestimonial = () => {
    testimonialContainer.innerHTML = `
      <p>${testimonials[i].testimonial}</p>
      <img src=${testimonials[i].image}>
      <h3>${testimonials[i].name}</h3>
      <h6>${testimonials[i].job}</h6>
    `;
};
window.onload = displayTestimonial;