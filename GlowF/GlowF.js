/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class GlowF extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Glow-F", "./GlowF/costumes/Glow-F.svg", { x: 35, y: 41 })
    ];

    this.sounds = [new Sound("pop", "./GlowF/sounds/pop.wav")];

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
      if (this.stage.vars.lo == 6) {
        while (true) {
          yield* this.wait(0.3);
          this.visible = true;
          yield;
        }
      }
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    yield* this.wait(3);
    this.stage.vars.lo = this.random(1, 26);
  }
}
