class Spiderman{
    constructor(name,age,actor,numFilms,studio){
        this.name=name
        this.age=age
        this.actor=actor
        this.numFilms=numFilms
        this.studio=studio
    }

    getInfo(){
        return `Hey, I'm ${this.actor} from ${this.studio}`;
    }
    

}

module.exports = Spiderman

