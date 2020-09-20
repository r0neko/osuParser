module.exports = (line, beatmapInstance) => {
  let splitted = line.split(':');
  let param = splitted[0];
  let value = splitted[1].slice(1);

  switch (param) {
    case "AudioFilename":
      beatmapInstance.audio = value;
      break;
    case "AudioLeadIn":
      beatmapInstance.leadIn = parseInt(value);
      break;
    case "PreviewTime":
      beatmapInstance.previewTime = parseInt(value);
      break;
    case "Mode":
      beatmapInstance.mode = parseInt(value);
      break;
    default:
      break;
  }
};
