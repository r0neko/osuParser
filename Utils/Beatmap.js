class Beatmap {
  constructor() {
    this.mode = 0;
    this.formatVersion = 0;
    this.audio = "";
    this.leadIn = 0;
    this.previewTime = 0;

    this.distanceSpacing = 0;
    this.beatDivisor = 0;

    this.hp = 0;
    this.cs = 0;
    this.od = 0;
    this.ar = 0;
    this.sliderMultiplier = 0;
    this.sliderTickRate = 0

    this.title = "";
    this.titleUnicode = "";
    this.artist = "";
    this.artistUnicode = "";
    this.creator = "";
    this.version = "";
    this.tags = "";
    this.source = "";
    this.mapID = 0;
    this.setID = 0;

    this.timingPoints = [];
    this.hitEvents = [];
  }
}

module.exports = Beatmap;
