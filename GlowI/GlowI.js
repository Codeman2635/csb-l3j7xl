/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class GlowI extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Glow-I", "./GlowI/costumes/Glow-I.svg", { x: 21, y: 38 })
    ];

    this.sounds = [new Sound("pop", "./GlowI/sounds/pop.wav")];

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
      if (this.stage.vars.po == 3) {
        while (true) {
          this.visible = true;
          yield;
        }
      }
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    while (true) {
      if (this.stage.vars.lo == 9) {
        this.visible = true;
      }
      yield;
    }
  }
}
