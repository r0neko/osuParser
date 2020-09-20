module.exports = (line, beatmapInstance) => {
  let splitted = line.split(':');
  var param = splitted[0];
  var value = splitted[1].slice(1);

  switch(param) {
    case "DistanceSpacing":
      beatmapInstance.distanceSpacing = parseFloat(value);
      break;
    case "BeatDivisor":
      beatmapInstance.beatDivisor = parseInt(value);
      break;
    default: break;
  }
};
