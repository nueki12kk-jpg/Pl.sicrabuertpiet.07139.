const TRANSLATIONS = {
    "pt-br": {
        langLabel: "PT/BR",
        navInicio: "Início",
        navRecursos: "Recursos",
        navFps: "Comparativo de FPS",
        navDownload: "Download",
        navFaq: "FAQ",
        tagline: "A melhor experiência!",
        download: "BAIXAR",
        discord: "DISCORD",
        recursosTag: "✨ RECURSOS",
        stabilityTitle: "Estabilidade & Confiabilidade",
        stabilityLi1: "Sem crashes indesejados",
        stabilityLi2: "Compatível com servidores populares",
        modsTitle: "75+ MODS INTEGRADOS",
        fpsTitle: "GRANDE BOOST DE FPS",
        fpsConfig: "PC Config: AMD Ryzen 5 5600g, 2x8gb ram ddr4 3200mhz Kingston, B450m pro.",
        openFooter: "Open Footer",
        footerBrand: "Moonlight Client",
        footerFaq: "FAQ",
        footerLegal: "Legal",
        footerPriv: "Política de Privacidade",
        footerTerms: "Termos de serviços",
        footerEmail: "Email: Exemplo@gmail.com",
        footerDisclaimer: "Não somos afiliados a Mojang ou Microsoft",
        footerCopy: "© MOONLIGHT CLIENT 2026. Todos os direitos reservados."
    },
    "pt-pt": {
        langLabel: "PT/PT",
        navInicio: "Início",
        navRecursos: "Funcionalidades",
        navFps: "Comparativo de FPS",
        navDownload: "Transferir",
        navFaq: "Perguntas Frequentes",
        tagline: "A melhor experiência!",
        download: "TRANSFERIR",
        discord: "DISCORD",
        recursosTag: "✨ FUNCIONALIDADES",
        stabilityTitle: "Estabilidade & Confiança",
        stabilityLi1: "Sem crashes indesejados",
        stabilityLi2: "Compatível com servidores populares",
        modsTitle: "75+ MODS INTEGRADOS",
        fpsTitle: "GRANDE MELHORIA DE FPS",
        fpsConfig: "Configuração do PC: AMD Ryzen 5 5600g, 2x8gb ram ddr4 3200mhz Kingston, B450m pro.",
        openFooter: "Abrir Rodapé",
        footerBrand: "Moonlight Client",
        footerFaq: "Perguntas Frequentes",
        footerLegal: "Legal",
        footerPriv: "Política de Privacidade",
        footerTerms: "Termos de Serviço",
        footerEmail: "Email: Exemplo@gmail.com",
        footerDisclaimer: "Não somos afiliados à Mojang ou Microsoft",
        footerCopy: "© MOONLIGHT CLIENT 2026. Todos os direitos reservados."
    },
    "en-us": {
        langLabel: "EN/US",
        navInicio: "Home",
        navRecursos: "Features",
        navFps: "FPS Comparison",
        navDownload: "Download",
        navFaq: "FAQ",
        tagline: "The best experience!",
        download: "DOWNLOAD",
        discord: "DISCORD",
        recursosTag: "✨ FEATURES",
        stabilityTitle: "Stability & Reliability",
        stabilityLi1: "No unwanted crashes",
        stabilityLi2: "Compatible with popular servers",
        modsTitle: "75+ BUILT-IN MODS",
        fpsTitle: "HUGE FPS BOOST",
        fpsConfig: "PC Config: AMD Ryzen 5 5600g, 2x8gb ddr4 3200mhz Kingston ram, B450m pro.",
        openFooter: "Open Footer",
        footerBrand: "Moonlight Client",
        footerFaq: "FAQ",
        footerLegal: "Legal",
        footerPriv: "Privacy Policy",
        footerTerms: "Terms of Service",
        footerEmail: "Email: Exemplo@gmail.com",
        footerDisclaimer: "We are not affiliated with Mojang or Microsoft",
        footerCopy: "© MOONLIGHT CLIENT 2026. All rights reserved."
    },
    "es": {
        langLabel: "ES",
        navInicio: "Inicio",
        navRecursos: "Funciones",
        navFps: "Comparativa de FPS",
        navDownload: "Descargar",
        navFaq: "Preguntas Frecuentes",
        tagline: "¡La mejor experiencia!",
        download: "DESCARGAR",
        discord: "DISCORD",
        recursosTag: "✨ FUNCIONES",
        stabilityTitle: "Estabilidad y Confiabilidad",
        stabilityLi1: "Sin caídas inesperadas",
        stabilityLi2: "Compatible con servidores populares",
        modsTitle: "75+ MODS INTEGRADOS",
        fpsTitle: "GRAN MEJORA DE FPS",
        fpsConfig: "Config del PC: AMD Ryzen 5 5600g, 2x8gb ram ddr4 3200mhz Kingston, B450m pro.",
        openFooter: "Abrir Pie de Página",
        footerBrand: "Moonlight Client",
        footerFaq: "Preguntas Frecuentes",
        footerLegal: "Legal",
        footerPriv: "Política de Privacidad",
        footerTerms: "Términos de Servicio",
        footerEmail: "Email: Exemplo@gmail.com",
        footerDisclaimer: "No estamos afiliados a Mojang ni Microsoft",
        footerCopy: "© MOONLIGHT CLIENT 2026. Todos los derechos reservados."
    }
};

function applyLanguage(lang) {
    const dict = TRANSLATIONS[lang] || TRANSLATIONS["pt-br"];
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
        const key = el.getAttribute("data-i18n");
        if (dict[key]) {
            el.textContent = dict[key];
        }
    });
    const currentLabel = document.getElementById("lang-current");
    if (currentLabel) {
        currentLabel.textContent = dict.langLabel;
    }
    localStorage.setItem("moonlight_lang", lang);
}

function initLanguage() {
    const saved = localStorage.getItem("moonlight_lang");
    applyLanguage(saved || "pt-br");
}
