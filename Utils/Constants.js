const BEATMAP_FILE_SECTIONS = {
  SECTION_HEADER: 0,
  SECTION_GENERAL: 1,
  SECTION_EDITOR: 2,
  SECTION_METADATA: 3,
  SECTION_DIFFICULTY: 4,
  SECTION_EVENTS: 5,
  SECTION_TIMING: 6,
  SECTION_COLOURS: 7,
  SECTION_HITOBJECTS: 8
};

const OBJECT_TYPE = {
  HIT_CIRCLE: 1 << 0,
  SLIDER: 1 << 1,
  HIT_CIRCLE_NEW: 1 << 2,
  SPINNER: 1 << 3,
  MANIAHOLD: 1 << 7
};

module.exports = {
  BEATMAP_FILE_SECTIONS,
  OBJECT_TYPE
};
