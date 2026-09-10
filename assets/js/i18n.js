var LANG_CACHE = {};

function fetchLangFile(lang) {
    if (LANG_CACHE[lang]) {
        return Promise.resolve(LANG_CACHE[lang]);
    }
    return fetch("lang/" + lang + ".json")
        .then(function (res) {
            if (!res.ok) {
                throw new Error("lang file not found: " + lang);
            }
            return res.json();
        })
        .then(function (dict) {
            LANG_CACHE[lang] = dict;
            return dict;
        });
}

function applyDict(dict, lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
        var key = el.getAttribute("data-i18n");
        if (dict[key]) {
            el.textContent = dict[key];
        }
    });
    var currentLabel = document.getElementById("lang-current");
    if (currentLabel && dict.langLabel) {
        currentLabel.textContent = dict.langLabel;
    }
}

function applyLanguage(lang) {
    fetchLangFile(lang)
        .then(function (dict) {
            applyDict(dict, lang);
            localStorage.setItem("moonlight_lang", lang);
        })
        .catch(function () {
            if (lang !== "pt-br") {
                applyLanguage("pt-br");
            }
        });
}

function initLanguage() {
    var saved = localStorage.getItem("moonlight_lang");
    applyLanguage(saved || "pt-br");
}
