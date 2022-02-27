/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class GlowJ extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Glow-J", "./GlowJ/costumes/Glow-J.svg", { x: 29, y: 39 })
    ];

    this.sounds = [new Sound("pop", "./GlowJ/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.stage.vars.lo == 9) {
        while (true) {
          this.visible = true;
          yield;
        }
      }
      yield;
    }
  }
}
