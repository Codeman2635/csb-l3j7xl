import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import GlowA from "./GlowA/GlowA.js";
import GlowB from "./GlowB/GlowB.js";
import GlowC from "./GlowC/GlowC.js";
import GlowE from "./GlowE/GlowE.js";
import GlowD from "./GlowD/GlowD.js";
import GlowF from "./GlowF/GlowF.js";
import GlowG from "./GlowG/GlowG.js";
import GlowH from "./GlowH/GlowH.js";
import GlowI from "./GlowI/GlowI.js";
import GlowJ from "./GlowJ/GlowJ.js";
import GlowK from "./GlowK/GlowK.js";
import GlowL from "./GlowL/GlowL.js";
import GlowM from "./GlowM/GlowM.js";
import GlowN from "./GlowN/GlowN.js";
import GlowO from "./GlowO/GlowO.js";
import GlowQ from "./GlowQ/GlowQ.js";
import GlowR from "./GlowR/GlowR.js";
import GlowT from "./GlowT/GlowT.js";
import GlowU from "./GlowU/GlowU.js";
import GlowP from "./GlowP/GlowP.js";
import GlowV from "./GlowV/GlowV.js";
import GlowW from "./GlowW/GlowW.js";
import GlowS from "./GlowS/GlowS.js";
import GlowY from "./GlowY/GlowY.js";
import GlowZ from "./GlowZ/GlowZ.js";
import Sprite1 from "./Sprite1/Sprite1.js";
import GlowX from "./GlowX/GlowX.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  GlowA: new GlowA({
    x: 36.41176470588235,
    y: -57.70588235294118,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  GlowB: new GlowB({
    x: -62.29411764705882,
    y: -64.6470588235294,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  GlowC: new GlowC({
    x: -153.47058823529414,
    y: 120.35294117647061,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  GlowE: new GlowE({
    x: -45.05882352941177,
    y: -150.23529411764707,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  GlowD: new GlowD({
    x: 46.47058823529411,
    y: -145.94117647058826,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  GlowF: new GlowF({
    x: 199.2941176470588,
    y: -72.76470588235296,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  GlowG: new GlowG({
    x: 211.7058823529412,
    y: 23.05882352941176,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  GlowH: new GlowH({
    x: 100.82352941176471,
    y: -19.235294117647058,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  GlowI: new GlowI({
    x: -213.17647058823528,
    y: -154.6470588235294,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  GlowJ: new GlowJ({
    x: 140.35294117647055,
    y: -28.47058823529413,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  GlowK: new GlowK({
    x: 21.05882352941176,
    y: 29.352941176470587,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  GlowL: new GlowL({
    x: 54.235294117647065,
    y: -151.05882352941174,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  GlowM: new GlowM({
    x: -67.11764705882356,
    y: 128.58823529411765,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  GlowN: new GlowN({
    x: -201.00000000000006,
    y: -65.94117647058825,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  GlowO: new GlowO({
    x: 209.35294117647055,
    y: -144,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  GlowQ: new GlowQ({
    x: -52.47058823529411,
    y: 29.41176470588236,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  GlowR: new GlowR({
    x: -117.76470588235294,
    y: -16.47058823529411,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  GlowT: new GlowT({
    x: 111.41176470588238,
    y: 96.4705882352941,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  GlowU: new GlowU({
    x: 123.88235294117638,
    y: -144.11764705882348,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  GlowP: new GlowP({
    x: -206.76470588235296,
    y: 124.99999999999999,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  GlowV: new GlowV({
    x: 4.941176470588249,
    y: 142.3529411764706,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  GlowW: new GlowW({
    x: 22.70588235294118,
    y: 138.58823529411765,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  GlowS: new GlowS({
    x: 212.1764705882353,
    y: -153.58823529411765,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  GlowY: new GlowY({
    x: 182.82352941176472,
    y: 132.05882352941177,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  GlowZ: new GlowZ({
    x: -212.47058823529412,
    y: -150.4705882352941,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  Sprite1: new Sprite1({
    x: 56.00000000000003,
    y: -63.764705882352956,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  GlowX: new GlowX({
    x: -189.52941176470588,
    y: 38.88235294117651,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  })
};

const project = new Project(stage, sprites);
export default project;
