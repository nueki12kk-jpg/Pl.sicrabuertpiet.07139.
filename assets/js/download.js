/* Pagina de download: liga cada botao ao link de MOONLIGHT_CONFIG.downloads e esconde icones ausentes. */
(function () {
    function isUrl(v) {
        return typeof v === "string" && /^https?:\/\//i.test(v);
    }

    var links = (typeof MOONLIGHT_CONFIG !== "undefined" && MOONLIGHT_CONFIG.downloads) || {};

    document.querySelectorAll("[data-download]").forEach(function (a) {
        var url = links[a.getAttribute("data-download")];
        var label = a.querySelector("span");
        if (isUrl(url)) {
            a.setAttribute("href", url);
            a.setAttribute("rel", "noopener");
        } else {
            // link ainda nao configurado: botao desativado "EM BREVE" (o texto vem do idioma: dlSoon)
            a.removeAttribute("href");
            a.setAttribute("aria-disabled", "true");
            a.classList.add("disabled");
            if (label) {
                label.setAttribute("data-i18n", "dlSoon");
                label.textContent = "EM BREVE";
            }
        }
    });

    // icones de Windows/Universal ainda nao existem: sem arquivo, o espaco some (basta colocar o PNG depois)
    document.querySelectorAll(".dl-icon").forEach(function (img) {
        function hide() { img.classList.add("is-missing"); }
        if (img.complete && img.naturalWidth === 0) { hide(); }
        img.addEventListener("error", hide);
    });
})();
