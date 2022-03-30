import {Action} from "./actions.js";

type getById = HTMLElement | null;

//html
const el:getById = document.getElementById('terminal');
const pCreate:HTMLParagraphElement = document.createElement('p');
const p:HTMLCollectionOf<HTMLParagraphElement> = document.getElementsByTagName('p'); 
const sleepGet:getById = document.getElementById('sleep');
const awakeGet:getById = document.getElementById('awake');

//js
const acts:string[] = [];
const actions_methods = [
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
let awake:number = 50;
let sleep:number = 50;

function showtext(el:getById) { 
    setInterval(function():void {
        el!.appendChild(pCreate);
    
        const random:number = Math.floor(Math.random() * actions_methods.length);
        
        const act:string = actions_methods[random]('0x' + Action.makeid(8));
        
        if(actions_methods[random] == actions_methods[2]) {
            sleepGet!.innerHTML = String(sleep += 1);
            
            if(awake >= 1) {
                awakeGet!.innerHTML = String(awake -= 1);
            }
        }

        if(actions_methods[random] == actions_methods[3]) {
            awakeGet!.innerHTML = String(awake += 1);

            if(sleep >= 1) {
                sleepGet!.innerHTML = String(sleep -= 1);
            }
        }

        acts.push(act + '<br/>');     
        
        p[0].innerHTML = String(acts);

        if(acts.length >= 13) {
            acts.shift();
        }

    }, 500);

}

showtext(el!);
