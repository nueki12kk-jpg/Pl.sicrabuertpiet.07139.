document.getElementById("menu-btn").addEventListener("click", function () {
    document.getElementById("mobile-nav").classList.toggle("open");
});

var openFooterBtn = document.getElementById("open-footer");
if (openFooterBtn) {
    openFooterBtn.addEventListener("click", function () {
        document.getElementById("site-footer").scrollIntoView({ behavior: "smooth" });
    });
}

var langTrigger = document.querySelector(".lang-dropdown");
var langMenu = document.getElementById("lang-menu");
if (langTrigger && langMenu) {
    langTrigger.addEventListener("click", function (event) {
        if (event.target.closest("#lang-menu")) {
            return;
        }
        event.stopPropagation();
        langMenu.classList.toggle("open");
    });

    document.querySelectorAll("#lang-menu [data-lang]").forEach(function (btn) {
        btn.addEventListener("click", function () {
            if (typeof applyLanguage === "function") {
                applyLanguage(btn.getAttribute("data-lang"));
            }
            langMenu.classList.remove("open");
        });
    });

    document.addEventListener("click", function () {
        langMenu.classList.remove("open");
    });
}

if (typeof initLanguage === "function") {
    initLanguage();
}

function fillFpsBars(root) {
    root.querySelectorAll(".fps-fill[data-width]").forEach(function (bar) {
        bar.style.width = bar.getAttribute("data-width") + "%";
    });
}

var revealEls = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window && revealEls.length > 0) {
    var observer = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("reveal-visible");
                    fillFpsBars(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.15 }
    );
    revealEls.forEach(function (el) {
        observer.observe(el);
    });

    setTimeout(function () {
        revealEls.forEach(function (el) {
            el.classList.add("reveal-visible");
            fillFpsBars(el);
        });
    }, 2000);
} else {
    revealEls.forEach(function (el) {
        el.classList.add("reveal-visible");
        fillFpsBars(el);
    });
}
