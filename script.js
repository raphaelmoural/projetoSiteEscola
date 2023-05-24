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

document.addEventListener("DOMContentLoaded"), function() {
    let menuLinks = document.querySelectorAll('.nav-List li a');

    menuLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            let targetId = this.getAttribute('href');
            let targetElement = document.querySelector(targetId);
            let targetOffset = targetElement.offsetTop - 75px;

            if (targetId === '#') {
                window.scrollTo({
                    top: 0,
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
}