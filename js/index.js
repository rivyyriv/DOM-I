const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const topNav = document.querySelectorAll('a');
topNav[0].textContent = siteContent['nav']['nav-item-1'];
topNav[1].textContent = siteContent['nav']['nav-item-2'];
topNav[2].textContent = siteContent['nav']['nav-item-3'];
topNav[3].textContent = siteContent['nav']['nav-item-4'];
topNav[4].textContent = siteContent['nav']['nav-item-5'];
topNav[5].textContent = siteContent['nav']['nav-item-6'];

//h1 

const headertext = document.querySelector('h1');
headertext.textContent = siteContent['cta']['h1'];

const button = document.querySelector('button');
button.textContent = siteContent['cta']['button'];

const topImg = document.getElementById('cta-img');
topImg.setAttribute('src', siteContent['cta']['img-src']);

const headings = document.querySelectorAll('.text-content > h4');
headings[0].textContent = siteContent['main-content']['features-h4'];
headings[1].textContent = siteContent['main-content']['about-h4'];
headings[2].textContent = siteContent['main-content']['services-h4'];
headings[3].textContent = siteContent['main-content']['product-h4'];
headings[4].textContent = siteContent['main-content']['vision-h4'];

const content = document.querySelectorAll('.text-content > p');
content[0].textContent = siteContent['main-content']['features-content'];
content[1].textContent = siteContent['main-content']['about-content'];
content[2].textContent = siteContent['main-content']['services-content'];
content[3].textContent = siteContent['main-content']['product-content'];
content[4].textContent = siteContent['main-content']['vision-content'];


//Middle Img
const midImg = document.getElementById('middle-img');
midImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

//Contact Header
const contactHead = document.querySelector('.contact > h4');
contactHead.textContent = siteContent['contact']['contact-h4'];

//Contact Content
const contactContent = document.querySelectorAll('.contact > p');
contactContent[0].textContent = siteContent['contact']['address'];
contactContent[1].textContent = siteContent['contact']['phone'];
contactContent[2].textContent = siteContent['contact']['email'];


const footer = document.querySelector('footer');
footer.textContent = siteContent['footer']['copyright'];


const home = document.createElement('a');
const careers = document.createElement('a');

home.textContent = 'Home';
home.href = '#';
careers.textContent = 'Careers';
careers.href = '#';

let newNavItem = document.querySelector('header > nav');
newNavItem.prepend(careers);
newNavItem.prepend(home);


const navColor = document.querySelectorAll('header > nav > a');
navColor.forEach(navBar => {
  navBar.style.color = 'green';
});