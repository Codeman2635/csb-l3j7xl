/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class GlowD extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Glow-D", "./GlowD/costumes/Glow-D.svg", { x: 33, y: 35 })
    ];

    this.sounds = [new Sound("pop", "./GlowD/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked5)
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
      if (this.stage.vars.lo == 5) {
        while (true) {
          this.visible = true;
          yield;
        }
      }
      yield;
    }
  }

  *whenGreenFlagClicked4() {
    yield* this.wait(2.5);
    this.stage.vars.lo = this.random(1, 26);
  }

  *whenGreenFlagClicked5() {}
}
