class TimingPoint {
  constructor(time = 0, beatLength = 0, beatsPerMeasure = 0, sampleSet = 0, sampleIdx = 0, sampleVol = 0, uninherited = false, effects = 0) {
    this.time = time;
    this.beatLength = beatLength;
    this.beatsPerMeasure = beatsPerMeasure;
    this.sampleSet = sampleSet;
    this.sampleIdx = sampleIdx;
    this.sampleVol = sampleVol;
    this.uninherited = uninherited;
    this.effects = effects;
  }
}

module.exports = TimingPoint;
