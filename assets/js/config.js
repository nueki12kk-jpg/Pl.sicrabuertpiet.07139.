const MOONLIGHT_CONFIG = {
    dataOwner: "SEU_USUARIO_GITHUB",
    dataRepo: "moonlight-data",
    dataBranch: "main",
    get cdnBase() {
        return `https://cdn.jsdelivr.net/gh/${this.dataOwner}/${this.dataRepo}@${this.dataBranch}/players/`;
    }
};
