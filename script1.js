
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


document.addEventListener('DOMContentLoaded', () => {
    const contactSection = document.querySelector('.contact-section');
    contactSection.classList.add('fade-in');
});




//Job modul

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".career-form");
    const modal = document.getElementById("custom-success-modal");
    const closeModalBtn = document.querySelector(".close-custom-modal");
    const backToHomeBtn = document.getElementById("back-to-home");

    form.addEventListener("submit", async function (event) {
        event.preventDefault();
        const formData = new FormData(form);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            if (!response.ok) {
                throw new Error("Fehler beim Absenden des Formulars");
            }

            modal.style.display = "flex";
            form.reset();
        } catch (error) {
            alert("Es gab einen Fehler beim Absenden. Bitte versuchen Sie es erneut.");
        }
    });

    closeModalBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    backToHomeBtn.addEventListener("click", function () {
        window.location.href = "index.html";
    });
});


// Contact modul
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.querySelector(".contact-form");
    const contactModal = document.getElementById("contact-success-modal");
    const backToHomeBtn = document.getElementById("back-to-home");

    contactForm.addEventListener("submit", async function (event) {
        event.preventDefault();
        const formData = new FormData(contactForm);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            if (!response.ok) {
                throw new Error("Fehler beim Absenden des Formulars");
            }

            // Prikaz modala
            contactModal.style.display = "flex";

            // Resetovanje forme
            contactForm.reset();
        } catch (error) {
            alert("Es gab einen Fehler beim Absenden. Bitte versuchen Sie es erneut.");
        }
    });

    backToHomeBtn.addEventListener("click", function () {
        window.location.href = "index.html";
    });

    // Klik van modala zatvara modal
    window.addEventListener("click", function (event) {
        if (event.target === contactModal) {
            contactModal.style.display = "none";
        }
    });
});



function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'de', // Osnovni jezik sajta
        includedLanguages: 'de,en,ru', // Jezici koje želiš da podržiš
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    }, 'google_translate_element');
}
