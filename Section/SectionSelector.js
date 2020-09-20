const Constants = require("../Utils/Constants");

module.exports = (l) => {
  switch (l) {
    case "General":
      return Constants.BEATMAP_FILE_SECTIONS.SECTION_GENERAL;
    case "Editor":
      return Constants.BEATMAP_FILE_SECTIONS.SECTION_EDITOR;
    case "Metadata":
      return Constants.BEATMAP_FILE_SECTIONS.SECTION_METADATA;
    case "Difficulty":
      return Constants.BEATMAP_FILE_SECTIONS.SECTION_DIFFICULTY;
    case "Events":
      return Constants.BEATMAP_FILE_SECTIONS.SECTION_EVENTS;
    case "TimingPoints":
      return Constants.BEATMAP_FILE_SECTIONS.SECTION_TIMING;
    case "Colours":
      return Constants.BEATMAP_FILE_SECTIONS.SECTION_COLOURS;
    case "HitObjects":
      return Constants.BEATMAP_FILE_SECTIONS.SECTION_HITOBJECTS;
    default:
      return Constants.BEATMAP_FILE_SECTIONS.SECTION_HEADER;
  }
};
