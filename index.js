const Beatmap = require("./Utils/Beatmap");
const Constants = require("./Utils/Constants");
const SectionSelector = require("./Section/SectionSelector");
const SectionParser = require("./Section");
const FileSystem = require('fs');

function Parse(rawMap) {
  if(rawMap == null || !rawMap.startsWith("osu file format")) throw new Error("Invalid beatmap header!");

  let beatmapInstance = new Beatmap();
  var currentSection = Constants.BEATMAP_FILE_SECTIONS.SECTION_HEADER;

  rawMap.split("\r\n").forEach(line => {
    if(line.length <= 0 || line == '') return;

    if(line[0] == '[' && line[line.length - 1] == ']') {
      currentSection = SectionSelector(line.slice(1, -1));
      return;
    }

    switch(currentSection) {
      case Constants.BEATMAP_FILE_SECTIONS.SECTION_HEADER:
        SectionParser.Header(line, beatmapInstance);
        break;
      case Constants.BEATMAP_FILE_SECTIONS.SECTION_GENERAL:
        SectionParser.General(line, beatmapInstance);
        break;
      case Constants.BEATMAP_FILE_SECTIONS.SECTION_EDITOR:
        SectionParser.Editor(line, beatmapInstance);
        break;
      case Constants.BEATMAP_FILE_SECTIONS.SECTION_METADATA:
        SectionParser.Metadata(line, beatmapInstance);
        break;
      case Constants.BEATMAP_FILE_SECTIONS.SECTION_DIFFICULTY:
        SectionParser.Difficulty(line, beatmapInstance);
        break;
      case Constants.BEATMAP_FILE_SECTIONS.SECTION_TIMING:
        SectionParser.Timing(line, beatmapInstance);
        break;
      case Constants.BEATMAP_FILE_SECTIONS.SECTION_HITOBJECTS:
        SectionParser.HitObject(line, beatmapInstance);
        break;
      default: break;
    }
  });

  return beatmapInstance;
}

function ParseFile(filename) {
  return Parse(FileSystem.readFileSync(filename).toString('utf8'));
}

module.exports = {
  Parse,
  ParseFile
};
