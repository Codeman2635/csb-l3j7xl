/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class GlowH extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Glow-H", "./GlowH/costumes/Glow-H.svg", { x: 35, y: 46 })
    ];

    this.sounds = [new Sound("pop", "./GlowH/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenGreenFlagClicked2() {
    this.visible = false;
  }

  *whenGreenFlagClicked3() {
    while (true) {
      if (this.stage.vars.lo == 8) {
        while (true) {
          this.visible = true;
          yield;
        }
      }
      yield;
    }
  }

  *whenGreenFlagClicked4() {
    yield* this.wait(3.5);
    this.stage.vars.lo = this.random(1, 26);
  }
}
