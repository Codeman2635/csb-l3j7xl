/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class GlowU extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Glow-U", "./GlowU/costumes/Glow-U.svg", { x: 37, y: 37 })
    ];

    this.sounds = [new Sound("pop", "./GlowU/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked5),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked6),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked7),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked8)
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
      if (this.stage.vars.po == 5) {
        while (true) {
          this.visible = true;
          yield;
        }
      }
      yield;
    }
  }

  *whenGreenFlagClicked5() {}

  *whenGreenFlagClicked6() {
    while (true) {
      if (this.stage.vars.lo == 19) {
        this.visible = true;
      }
      yield;
    }
  }

  *whenGreenFlagClicked7() {
    this.stage.vars.time = 45;
    for (let i = 0; i < 60; i++) {
      this.stage.vars.time += -1;
      yield* this.wait(1);
      yield;
    }
  }

  *whenGreenFlagClicked8() {
    yield* this.wait(1);
    while (true) {
      if (this.stage.vars.time == 0) {
        yield* this.wait(0.001);
        /* TODO: Implement stop all */ null;
      }
      yield;
    }
  }
}
