module.exports = (line, beatmapInstance) => {
  if(line.startsWith("osu file format")) {
    beatmapInstance.formatVersion = parseInt(line.slice(17));
  }
};
