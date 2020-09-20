class HitObject {
  constructor(x, y, time, params) {
    this.x = x;
    this.y = y;
    this.time = time;
    this.params = params;
  }
}

class HitCircle extends HitObject {
  constructor(x, y, time, params) {
    super(x, y, time, params);
  }
}

class Slider extends HitObject {
  constructor(x, y, time, params) {
    super(x, y, time, params);
  }
}

class Spinner extends HitObject {
  constructor(x, y, time, params) {
    super(x, y, time, params);
  }
}

class ManiaHold extends HitObject {
  constructor(x, y, time, params) {
    super(x, y, time, params);
  }
}

module.exports = {
  HitObject,
  HitCircle,
  Slider,
  Spinner,
  ManiaHold
};
