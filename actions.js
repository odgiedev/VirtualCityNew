"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

class Action {
    static walk(name) {
        return name + ' is walking...';
    }
    static talk(name) {
        return name + ' is talking...';
    }
    static sleep(name) {
        return name + ' is sleeping...';
    }
    static awake(name) {
        return name + ' is awakening...';
    }
    static working(name) {
        return name + ' is working...';
    }
    static study(name) {
        return name + ' is studying...';
    }
    static game(name) {
        return name + ' is playing video game...';
    }
    static music(name) {
        return name + ' is listening to music...';
    }
    static gym(name) {
        return name + ' is at the gym...';
    }
    static hackAttack(name) {
        return name + ' is doing a hack attack...';
    }
    static hackDefend(name) {
        return name + ' is defending against hacker attack...';
    }
    static makeid(length) {
        var result = '';
        var characters = 'abcdefghijklmnopqrstuvwxyz0123456789!';
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }
}

export {Action};
