/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class GlowB extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Glow-B", "./GlowB/costumes/Glow-B.svg", { x: 32, y: 35 })
    ];

    this.sounds = [new Sound("pop", "./GlowB/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.stage.vars.lo == 2) {
        while (true) {
          this.visible = true;
          yield;
        }
      }
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    yield* this.wait(1.3);
    this.stage.vars.lo = this.random(1, 26);
  }
}
