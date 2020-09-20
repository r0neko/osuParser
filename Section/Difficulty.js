module.exports = (line, beatmapInstance) => {
  let splitted = line.split(':');
  var param = splitted[0];
  var value = splitted[1];

  switch(param) {
    case "HPDrainRate":
      beatmapInstance.hp = parseFloat(value);
      break;
    case "CircleSize":
      beatmapInstance.cs = parseFloat(value);
      break;
    case "OverallDifficulty":
      beatmapInstance.od = parseFloat(value);
      break;
    case "ApproachRate":
      beatmapInstance.ar = parseFloat(value);
      break;
    case "SliderMultiplier":
      beatmapInstance.sliderMultiplier = parseFloat(value);
      break;
    case "SliderTickRate":
      beatmapInstance.sliderTickRate = parseFloat(value);
      break;
    default: break;
  }
};
