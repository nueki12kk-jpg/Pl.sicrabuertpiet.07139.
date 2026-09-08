document.getElementById("menu-btn").addEventListener("click", function () {
    document.getElementById("mobile-nav").classList.toggle("open");
});

document.getElementById("open-footer").addEventListener("click", function () {
    document.getElementById("site-footer").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("download-btn").addEventListener("click", function (event) {
    event.preventDefault();
    alert("Link de download ainda não configurado.");
});

document.getElementById("lang-btn").addEventListener("click", function () {
    alert("Em breve: EN/US.");
});
