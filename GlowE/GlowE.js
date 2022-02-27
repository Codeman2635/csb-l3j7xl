/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class GlowE extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Glow-E", "./GlowE/costumes/Glow-E.svg", { x: 34, y: 38 })
    ];

    this.sounds = [new Sound("pop", "./GlowE/sounds/pop.wav")];

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
    while (true) {
      if (this.stage.vars.po == 2) {
        while (true) {
          yield* this.wait(2);
          this.visible = true;
          yield;
        }
      }
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    yield* this.wait(1);
    this.stage.vars.lo = this.random(1, 26);
  }

  *whenGreenFlagClicked4() {
    while (true) {
      if (this.stage.vars.lo == 4) {
        this.visible = true;
      }
      yield;
    }
  }
}
