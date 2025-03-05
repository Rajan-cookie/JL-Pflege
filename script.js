
//Navigacioni meni

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

// Prelaz kada kliknem nesto u navigacionom meniju 

document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", e => {
        if (!link.getAttribute("href").includes(".html")) {
            e.preventDefault();
            const targetId = e.target.getAttribute("href").slice(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 70, 
                    behavior: "smooth" 
                });
            }
        }
    });
});
;

// Da kada je meni otvoren da se ne moze skrolovati

let lastScrollY = window.scrollY;
window.addEventListener('scroll', () => {
    if (hamburger.classList.contains("active")) {
        window.scrollTo(0, lastScrollY);
    } else {
        lastScrollY = window.scrollY;
    }
});

//index sekcija komplet js

//Za trecu number sekciju 

document.addEventListener("DOMContentLoaded", () => {
    const numbers = document.querySelectorAll('.number');
    
    const animateNumbers = (numberElement) => {
        const target = +numberElement.getAttribute('data-target');
        let count = 0;

        const updateCount = () => {
            count += Math.ceil(target / 100);
            numberElement.textContent = count > target ? target : count;

            if (count < target) {
                setTimeout(updateCount, 20);
            }
        };

        updateCount();
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateNumbers(entry.target);
            }
        });
    }, { threshold: 0.5 });

    numbers.forEach(num => {
        sectionObserver.observe(num);
    });
});

// Za traku da se zaustavi kada predjem preko nje misem 
document.addEventListener('DOMContentLoaded', () => {
    const marqueeContent = document.querySelector('.marquee-content');

    // Dupliraj sadržaj za neprekidan efekat
    marqueeContent.innerHTML += marqueeContent.innerHTML; 

    // Zaustavljanje animacije kada se pređe mišem
    marqueeContent.addEventListener('mouseenter', () => {
        marqueeContent.style.animationPlayState = 'paused';
    });

    marqueeContent.addEventListener('mouseleave', () => {
        marqueeContent.style.animationPlayState = 'running';
    });
});


// Back to Top dugme funkcionalnost

document.addEventListener('DOMContentLoaded', () => {
    const backToTopButton = document.getElementById('back-to-top');

    // Prikazivanje dugmeta prilikom skrolovanja
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {  
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });

    // Povratak na vrh stranice kada se klikne dugme
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'  
        });
    });
});


//About sekcija komplet js

//Mehr erfahren dugme prelaz kada se klikne na njega 

document.querySelector('a[href="#about-page-info"]').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('about-page-info').scrollIntoView({
        behavior: 'smooth'
    });
});


//pojavljivanje info sekcije

document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('active');
                }, 500); 
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 }); 
});

document.addEventListener("scroll", function() {
    var section = document.querySelector(".about-page-info");
    var position = section.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.3;

    if (position < screenPosition) {
        section.classList.add("reveal");
    }
});

//pojavljivanje jelene

document.addEventListener("scroll", function() {
    var section = document.querySelector(".content-wrapper");
    var position = section.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.3;

    if (position < screenPosition) {
        section.classList.add("reveal");
    }
});

//Pojavljivanje valuer sekcije 

document.addEventListener("scroll", function() {
    var section = document.querySelector(".about-values");
    var position = section.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.3;

    if (position < screenPosition) {
        section.classList.add("reveal");
    }
});


// smoth skrolovanje ka ovo sekciji 

document.addEventListener("DOMContentLoaded", function () {
    let scrollButton = document.querySelector(".price-btn.primary");

    if (scrollButton) {
        scrollButton.addEventListener("click", function (event) {
            event.preventDefault();
            let targetSection = document.getElementById("pricing-section");

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50, 
                    behavior: "smooth" 
                });
            }
        });
    }
});




//Otvaranje pitanje 
document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {
        const question = item.querySelector(".faq-question");
        const answer = item.querySelector(".faq-answer");
        const icon = item.querySelector(".icon");

        // Postavljanje početnog stanja
        answer.style.maxHeight = "0px";
        answer.style.overflow = "hidden";
        answer.style.transition = "max-height 0.4s ease-in-out, padding 0.3s ease-in-out";

        question.addEventListener("click", () => {
            const isOpen = item.classList.contains("active");

            // Zatvori sva ostala pitanja
            faqItems.forEach((otherItem) => {
                if (otherItem !== item) {
                    otherItem.classList.remove("active");
                    otherItem.querySelector(".faq-answer").style.maxHeight = "0px";
                    otherItem.querySelector(".faq-answer").style.padding = "0 20px";
                    otherItem.querySelector(".icon").textContent = "+";
                }
            });

            // Ako nije bilo otvoreno, otvori ga
            if (!isOpen) {
                item.classList.add("active");
                answer.style.maxHeight = answer.scrollHeight + "px";
                answer.style.padding = "15px 20px";
                icon.textContent = "−";
            } else {
                item.classList.remove("active");
                answer.style.maxHeight = "0px";
                answer.style.padding = "0 20px";
                icon.textContent = "+";
            }
        });
    });
});







