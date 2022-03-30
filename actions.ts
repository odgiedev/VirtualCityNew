export class Action {
    static walk(name:string) {
        return name + ' is walking...';
    }

    static talk(name:string) {
        return name + ' is talking...';
    }
    
    static sleep(name:string) {
        return name + ' is sleeping...';
    }

    static awake(name:string) {
        return name + ' is awakening...';
    }

    static working(name:string) {
        return name + ' is working...';
    }

    static study(name:string) {
        return name + ' is studying...';
    }

    static game(name:string) {
        return name + ' is playing video game...';
    }

    static music(name:string) {
        return name + ' is listening to music...';
    }

    static gym(name:string) {
        return name + ' is at the gym...';
    }

    static hackAttack(name:string) {
        return name + ' is doing a hack attack...';
    }

    static hackDefend(name:string) {
        return name + ' is defending against hacker attack...';
    }
    
    static makeid(length:number) {
        var result = '';
        var characters = 'abcdefghijklmnopqrstuvwxyz0123456789!';

        for ( var i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * characters.length));
        }

        return result;
    }
};
