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
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let navbar = document.querySelectorAll('a');

navbar[0].textContent = siteContent["nav"]["nav-item-1"];
navbar[1].textContent = siteContent["nav"]["nav-item-2"];
navbar[2].textContent = siteContent["nav"]["nav-item-3"];
navbar[3].textContent = siteContent["nav"]["nav-item-4"];
navbar[4].textContent = siteContent["nav"]["nav-item-5"];
navbar[5].textContent = siteContent["nav"]["nav-item-6"];

// console.log(navbar)
// console.log(navbar[3])

//CHANGING NAV COLOR
//There has to be a DRYER way to do this though? Loop maybe?

navbar[0].style.color = 'green';
navbar[1].style.color = 'green';
navbar[2].style.color = 'green';
navbar[3].style.color = 'green';
navbar[4].style.color = 'green';
navbar[5].style.color = 'green';

//TRYING TO TURN THE ABOVE INTO A LOOP??

//ADDING NEW CONTENT
// let navA = document.querySelectorAll(".container nav a")
// console.log(navA)

let nav = document.querySelector('nav')
console.log(nav)


let faq = document.createElement("a");
faq.setAttribute('href', "#")
faq.textContent = "FAQ"
nav.append(faq)

let home = document.createElement("a");
home.setAttribute('href', "#")
home.textContent = "Home"
nav.prepend(home)

//BUT THEY AREN'T COLORED INNN???

//CTA-SECTION

let ctaImage = document.getElementById("cta-img");
ctaImage.setAttribute('src', siteContent["cta"]["img-src"])

let ctaText = document.querySelectorAll('h1');
ctaText[0].textContent = siteContent["cta"]["h1"]

// console.log(ctaText)

let ctaButton = document.querySelector('button');
ctaButton.textContent = siteContent["cta"]["button"]

// console.log(ctaButton)

//TOP MAIN H4 + TEXT CONTENT

let topNodeH4 = document.querySelectorAll(".text-content h4");
topNodeH4[0].textContent = siteContent["main-content"]["features-h4"];
topNodeH4[1].textContent = siteContent["main-content"]["about-h4"];

let topNodeP = document.querySelectorAll(".text-content p");
topNodeP[0].textContent = siteContent["main-content"]["features-content"];
topNodeP[1].textContent = siteContent["main-content"]["about-content"];

//MIDDLE IMAGE 

let middleImage = document.getElementById("middle-img");
middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"])

//BOTTOM MAIN H4 + TEXT CONTENT

topNodeH4[2].textContent = siteContent["main-content"]["services-h4"];
topNodeH4[3].textContent = siteContent["main-content"]["product-h4"];
topNodeH4[4].textContent = siteContent["main-content"]["vision-h4"];

topNodeP[2].textContent = siteContent["main-content"]["services-content"];
topNodeP[3].textContent = siteContent["main-content"]["product-content"];
topNodeP[4].textContent = siteContent["main-content"]["vision-content"];

//CONTACT H4 + TEXT CONTENT

let contactNodeH4 = document.querySelectorAll(".contact h4");
contactNodeH4[0].textContent = siteContent["contact"]["contact-h4"]

let contactNodeP = document.querySelectorAll(".contact p");
contactNodeP[0].textContent = siteContent["contact"]["address"]
contactNodeP[1].textContent = siteContent["contact"]["phone"]
contactNodeP[2].textContent = siteContent["contact"]["email"]

//FOOTER

let footerNode = document.querySelectorAll("footer");
footerNode[0].textContent = siteContent["footer"]["copyright"]