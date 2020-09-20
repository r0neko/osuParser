module.exports = (line, beatmapInstance) => {
  let splitted = line.split(':');
  var param = splitted[0];
  var value = splitted[1];

  switch(param) {
    case "Title":
      beatmapInstance.title = value;
      break;
    case "TitleUnicode":
      beatmapInstance.titleUnicode = value;
      break;
    case "Artist":
      beatmapInstance.artist = value;
      break;
    case "ArtistUnicode":
      beatmapInstance.artistUnicode = value;
      break;
    case "Creator":
      beatmapInstance.creator = value;
      break;
    case "Version":
      beatmapInstance.version = value;
      break;
    case "Source":
      beatmapInstance.source = value;
      break;
    case "Tags":
      beatmapInstance.tags = value;
      break;
    case "BeatmapID":
      beatmapInstance.mapID = parseInt(value);
      break;
    case "BeatmapSetID":
      beatmapInstance.setID = parseInt(value);
      break;
    default: break;
  }
};
