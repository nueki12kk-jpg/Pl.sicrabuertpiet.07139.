const MOONLIGHT_CONFIG = {
    dataOwner: "nueki12kk-jpg",
    dataRepo: "Pl.sicraplbirrt.07140.",
    dataBranch: "main",
    // Links da pagina de download (download.html). Troque pelos links reais (https://...).
    // Enquanto o valor nao for um link http(s), o botao aparece desativado como "EM BREVE".
    downloads: {
        windowsX64: "https://www.mediafire.com/file/jrk49416oa9ivkf/MoonLight-Launcher-Setup-1.0.0-wx64.exe/file",
        windowsX86: "https://www.mediafire.com/file/xuxg1m7vbrium34/MoonLight-Launcher-Setup-1.0.0.exe/file",
        jarInstaller: "https://www.mediafire.com/file/5rqoens5zsn4acx/client-1.8.9.jar/file/"
    },
    get cdnBase() {
        return `https://cdn.jsdelivr.net/gh/${this.dataOwner}/${this.dataRepo}@${this.dataBranch}/players/`;
    }
};
