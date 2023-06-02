class MobileNavbar {
    constructor(mobileMenu, navList){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.activeClass = 'active';


        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.navList.classList.toggle(this.activeClass);
    }
    addClickEvent(){
        this.mobileMenu.addEventListener('click', this.handleClick);
    }

    init(){
        if (this.mobileMenu){
            this.addClickEvent();
        }
        return this
    }
}

const mobileNavbar = new MobileNavbar (
    '.mobile-menu',
    '.nav-List',
)

mobileNavbar.init();

document.addEventListener("DOMContentLoaded", function() {
    let menuLinks = document.querySelectorAll('.nav-List li a');

    menuLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            let targetId = this.getAttribute('href');
            let targetElement = document.querySelector(targetId);
            let targetOffset = targetElement.offsetTop - 75;

            if (targetId === '#top') {
                window.scrollTo({
                    top: top,
                    behavior: 'smooth'
                });
            } else {
                window.scrollTo({
                    top: targetOffset,
                    behavior: 'smooth'
                });
            }
        });
    });
});


const images= [  
    './imgs/header1.jpg',
    './imgs/header2.jpg'
];
 

let currentIndex = 0;
const headerContainer = document.querySelector('header');
const radioInputs = document.querySelectorAll('input[name="header-image"]');

function changeHeaderImage() {
headerContainer.style.backgroundImage = `url('${images[currentIndex]}')`; 
}

function handleRadioChange() {
currentIndex = parseInt(this.value, 10) - 1;
    changeHeaderImage();
}

radioInputs.forEach((input, index) => { 
    input.addEventListener('change', handleRadioChange);  
    input.value = index + 1;
});

function rotateImages() {
    currentIndex = (currentIndex + 1) % images.length;
  changeHeaderImage();
}
  
setInterval(rotateImages, 5000);


var slideIndex = 0;
var slides = document.getElementsByClassName("carrossel")[0].getElementsByTagName("img");

function showSlides(index) {
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    }

    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex].style.display = "block";
}

function nextSlide() {
    slideIndex++;
    showSlides(slideIndex);
}

function prevSlide() {
    slideIndex--;
    showSlides(slideIndex);
}

showSlides(slideIndex);

var nextButton = document.createElement("button");
nextButton.innerHTML = "Proximo";
nextButton.onclick = nextSlide;

var prevButton = document.createElement("button");
prevButton.innerHTML = "Anterios";
prevButton.onclick = prevSlide;

document.body.appendChild(prevButton);
document.body.appendChild(nextButton);

/*var carrossel = document.getElementsByClassName("carrossel");
carrossel.appendChild(prevButton);
carrossel.appendChild(nextButton);*/