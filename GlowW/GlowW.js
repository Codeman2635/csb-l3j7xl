/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class GlowW extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Glow-W", "./GlowW/costumes/Glow-W.svg", { x: 45, y: 41 })
    ];

    this.sounds = [new Sound("pop", "./GlowW/sounds/pop.wav")];

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
    this.visible = false;
  }

  *whenGreenFlagClicked3() {
    while (true) {
      if (this.stage.vars.lo == 22) {
        while (true) {
          this.visible = true;
          yield;
        }
      }
      yield;
    }
  }
}
