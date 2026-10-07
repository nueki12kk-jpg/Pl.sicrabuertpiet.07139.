const MOONLIGHT_CONFIG = {
    dataOwner: "nueki12kk-jpg",
    dataRepo: "Pl.sicraplbirrt.07140.",
    dataBranch: "main",
    // Links da pagina de download (download.html). Troque pelos links reais (https://...).
    // Enquanto o valor nao for um link http(s), o botao aparece desativado como "EM BREVE".
    downloads: {
        windowsX64: "https://www.mediafire.com/file/k2bt9izi2cqg9im/MoonLight-Launcher-1.0.0-wx64.exe/file",
        windowsX86: "https://www.mediafire.com/file/xuxg1m7vbrium34/MoonLight-Launcher-Setup-1.0.0.exe/file",
        jarInstaller: "https://www.mediafire.com/file/w7j8rc8o65q6y7g/MoonLight-Installer.jar/file"
    },
    get cdnBase() {
        return `https://cdn.jsdelivr.net/gh/${this.dataOwner}/${this.dataRepo}@${this.dataBranch}/players/`;
    }
};
