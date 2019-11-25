import clock from "clock";
import document from "document";
import { me as appbit } from "appbit";
import { today } from "user-activity";
import { HeartRateSensor } from "heart-rate";

import { preferences } from "user-settings";
import * as util from "../common/utils";

// Update HR Sensor
const myHR = document.getElementById("HeartRate");
if (HeartRateSensor) {
    const hrm = new HeartRateSensor({ frequency: 1 });
    hrm.addEventListener("reading", () => {
        myHR.text = hrm.heartRate;
    });
    hrm.start();
}

// Update Steps
let mySteps = document.getElementById("Steps");

// Update the clock every minute
clock.granularity = "seconds";

// Get a handle on the <text> element
const myLabel = document.getElementById("Clock");

// Update the <text> element every tick with the current time
clock.ontick = (evt) => {
    let now = evt.date;
    let hours = now.getHours();
    if (preferences.clockDisplay === "12h") {
        // 12h format
        hours = hours % 12 || 12;
    } else {
        // 24h format
        hours = util.zeroPad(hours);
    }
    let mins = util.zeroPad(now.getMinutes());
    myLabel.text = `${hours}:${mins}`;


    // Steps
    if (appbit.permissions.granted("access_activity")) {
        mySteps.text = `${today.adjusted.steps}`;
    }
}

// Bulb Animation
// bulb object
class Bulb {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.vertical = true;
        this.horizontal = true;
        var speed_1 = Math.random();
        speed_1 *= 3;
        var speed_2 = Math.random();
        speed_2 *= 3;
        this.x_speed = speed_1;
        this.y_speed = speed_2;
    }
}



// Create Bulbs
let Bulbs = [];
let total = 2;
for (x in total) {
    new_blub = new Bulb();
    Bulbs.push(new_blub);
}

// Pick Colors
var auras = [];
auras.push("aura-red.png")
auras.push("aura-blue.png")
auras.push("aura-green.png")
auras.push("aura-orange.png")
auras.push("aura-yellow.png")

var bulb_colors = [];
bulb_colors.push("christmas_bulb-red.png")
bulb_colors.push("christmas_bulb-blue.png")
bulb_colors.push("christmas_bulb-green.png")
bulb_colors.push("christmas_bulb-orange.png")
bulb_colors.push("christmas_bulb-yellow.png")

"christmas_bulb-blue.png"
for (x in total) {
    var rand_color = Math.random();
    rand_color *= 5;
    rand_color = Math.round(rand_color);
    let bulb_img = document.getElementById(`bulb-${x}`);
    bulb_color = bulb_colors[rand_color];
    bulb_img.href = `${bulb_color}`;
    let aura_img = document.getElementById(`bulb-${x}`);
    aura_color = auras[rand_color];
    aura_img.href = `${bulb_color}`;
}


let red_bulb = document.getElementById("Bulb-red");
let redBulb = new Bulb(0, 0, true, true);
let blue_bulb = document.getElementById("Bulb-blue");
let blueBulb = new Bulb(0, 0, true, true);
let green_bulb = document.getElementById("Bulb-green");
let greenBulb = new Bulb(0, 0, true, true);
let orange_bulb = document.getElementById("Bulb-orange");
let orangeBulb = new Bulb(0, 0, true, true);
let yellow_bulb = document.getElementById("Bulb-yellow");
let yellowBulb = new Bulb(0, 0, true, true);

var auras = [];
auras.push("aura-red.png")
auras.push("aura-blue.png")
auras.push("aura-green.png")
auras.push("aura-orange.png")
auras.push("aura-yellow.png")

// Movement Pattern Planner
let screen = document.getElementById("Background");
let screen_width = screen.width - 12; // less bulb
let screen_height = screen.height - 25 - 24; // less banner and bulb

function Move_Bulb(Bulb) {
    // Horizontal Movement
    if (Bulb.horizontal == true) {
        Bulb.x += Bulb.x_speed;
    } else {
        Bulb.x -= Bulb.x_speed;
    }

    if (screen_width < Bulb.x) {
        Bulb.horizontal = false;
    }
    if (0 > Bulb.x) {
        Bulb.horizontal = true;
    }

    // Vertical Movement
    if (Bulb.vertical == true) {
        Bulb.y += Bulb.y_speed;
    } else {
        Bulb.y -= Bulb.y_speed;
    }

    if (screen_height < Bulb.y) {
        Bulb.vertical = false;
    }
    if (0 > Bulb.y) {
        Bulb.vertical = true;
    }

    // No Fly Zone

}

// Timer to Run Animation
function myTimer() {
    // Update blub location
    Move_Bulb(redBulb);
    // Move the bulbs
    red_bulb.groupTransform.translate.x = redBulb.x;
    red_bulb.groupTransform.translate.y = redBulb.y;

    Move_Bulb(blueBulb);
    blue_bulb.groupTransform.translate.x = blueBulb.x;
    blue_bulb.groupTransform.translate.y = blueBulb.y;

    Move_Bulb(greenBulb);
    green_bulb.groupTransform.translate.x = greenBulb.x;
    green_bulb.groupTransform.translate.y = greenBulb.y;

    Move_Bulb(orangeBulb);
    orange_bulb.groupTransform.translate.x = orangeBulb.x;
    orange_bulb.groupTransform.translate.y = orangeBulb.y;

    Move_Bulb(yellowBulb);
    yellow_bulb.groupTransform.translate.x = yellowBulb.x;
    yellow_bulb.groupTransform.translate.y = yellowBulb.y;

}
// start the animation
var myVar = setInterval(myTimer, 50);