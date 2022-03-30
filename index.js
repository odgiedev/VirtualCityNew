"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
import {Action} from "./actions.js";
//html
var el = document.getElementById('terminal');
var pCreate = document.createElement('p');
var p = document.getElementsByTagName('p');
var sleepGet = document.getElementById('sleep');
var awakeGet = document.getElementById('awake');
//js
var acts=[];
var actions_methods = [
    Action.walk,
    Action.talk,
    Action.sleep,
    Action.awake,
    Action.working,
    Action.study,
    Action.game,
    Action.music,
    Action.gym,
    Action.hackAttack,
    Action.hackDefend,
];
var awake = 50;
var sleep = 50;
function showtext(el) {
    setInterval(function () {
        el.appendChild(pCreate);
        var random = Math.floor(Math.random() * actions_methods.length);
        var act = actions_methods[random]('0x' + Action.makeid(8));
        if (actions_methods[random] == actions_methods[2]) {
            sleepGet.innerHTML = String(sleep += 1);
            if (awake >= 1) {
                awakeGet.innerHTML = String(awake -= 1);
            }
        }
        if (actions_methods[random] == actions_methods[3]) {
            awakeGet.innerHTML = String(awake += 1);
            if (sleep >= 1) {
                sleepGet.innerHTML = String(sleep -= 1);
            }
        }
        acts.push(act + '<br/>');
        p[0].innerHTML = String(acts);
        if (acts.length >= 12) {
            acts.shift();
        }
    }, 500);
}
showtext(el);
