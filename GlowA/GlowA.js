/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class GlowA extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Glow-A", "./GlowA/costumes/Glow-A.svg", { x: 36, y: 37 })
    ];

    this.sounds = [new Sound("pop", "./GlowA/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked5),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked6)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenGreenFlagClicked2() {
    /* TODO: Implement data_hidevariable */ null;
  }

  *whenGreenFlagClicked3() {
    while (true) {
      if (this.stage.vars.po == 1) {
        this.visible = true;
      }
      yield;
    }
  }

  *whenGreenFlagClicked4() {
    yield* this.wait(1);
    this.stage.vars.lo = this.random(1, 26);
  }

  *whenGreenFlagClicked5() {
    this.stage.vars.po = this.random(1, 7);
  }

  *whenGreenFlagClicked6() {
    while (true) {
      if (this.stage.vars.lo == 1) {
        this.visible = true;
      }
      yield;
    }
  }
}
