const MOONLIGHT_CONFIG = {
    dataOwner: "nueki12kk-jpg",
    dataRepo: "Pl.sicraplbirrt.07140.",
    dataBranch: "main",
    downloadUrl: "downloadaqui",
    get cdnBase() {
        return `https://cdn.jsdelivr.net/gh/${this.dataOwner}/${this.dataRepo}@${this.dataBranch}/players/`;
    }
};
