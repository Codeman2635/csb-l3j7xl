/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class GlowO extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Glow-O", "./GlowO/costumes/Glow-O.svg", { x: 29, y: 39 })
    ];

    this.sounds = [new Sound("pop", "./GlowO/sounds/pop.wav")];

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
    this.visible = false;
  }

  *whenGreenFlagClicked4() {
    while (true) {
      if (this.stage.vars.po == 4) {
        while (true) {
          this.visible = true;
          yield;
        }
      }
      yield;
    }
  }

  *whenGreenFlagClicked5() {
    while (true) {
      if (this.stage.vars.lo == 15) {
        this.visible = true;
      }
      yield;
    }
  }
}
