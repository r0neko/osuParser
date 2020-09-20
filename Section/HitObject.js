const Constants = require("../Utils/Constants");
const HitObjects = require("../Utils/HitObjects");

module.exports = (line, beatmapInstance) => {
  let splitted = line.split(',');
  var x = parseInt(splitted[0]);
  var y = parseInt(splitted[1]);
  var time = parseInt(splitted[2]);
  var type = parseInt(splitted[3]);
  var params = splitted[5];

  var targetObject = HitObjects.HitObject;
  if(type & Constants.OBJECT_TYPE.HIT_CIRCLE || type & Constants.OBJECT_TYPE.HIT_CIRCLE_NEW) targetObject = HitObjects.HitCircle;
  else if(type & Constants.OBJECT_TYPE.SLIDER) targetObject = HitObjects.Slider;
  else if(type & Constants.OBJECT_TYPE.SPINNER) targetObject = HitObjects.Spinner;
  else if(type & Constants.OBJECT_TYPE.MANIAHOLD) targetObject = HitObjects.ManiaHold;

  beatmapInstance.hitEvents.push(new targetObject(x, y, time, params));
};
