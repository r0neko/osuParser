const TimingPoint = require("../Utils/TimingPoint");

module.exports = (line, beatmapInstance) => {
  let splitted = line.split(',');
  beatmapInstance.timingPoints.push(new TimingPoint(parseInt(splitted[0]), parseInt(splitted[1]), parseInt(splitted[2]), parseInt(splitted[3]), parseInt(splitted[4]), parseInt(splitted[5]), parseInt(splitted[6]) == 1, parseInt(splitted[7])));
};
