class Action {
    static walk(name:string):string {
        return name + ' is walking...';
    }

    static talk(name:string):string {
        return name + ' is talking...';
    }
    
    static sleep(name:string):string {
        return name + ' is sleeping...';
    }

    static awake(name:string):string {
        return name + ' is awakening...';
    }

    static working(name:string):string {
        return name + ' is working...';
    }

    static study(name:string):string {
        return name + ' is studying...';
    }

    static game(name:string):string {
        return name + ' is playing video game...';
    }

    static music(name:string):string {
        return name + ' is listening to music...';
    }

    static gym(name:string):string {
        return name + ' is at the gym...';
    }

    static hackAttack(name:string):string {
        return name + ' is doing a hack attack...';
    }

    static hackDefend(name:string):string {
        return name + ' is defending against hacker attack...';
    }
    
    static makeid(length:number):string {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!';

        for ( var i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * characters.length));
        }

        return result;
    }
};

export {Action};
