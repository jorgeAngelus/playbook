const User =require('./../models/User')

class UserService{
    static create(id,username,name){
        return new User(id,username,name,"Sin bio")
    }

    static getInfo(user){
        var usuario = []

        Object.entries(user).forEach(([key,value])=> {
            usuario.push(value)
        })
        return usuario;
    }


    static updateUsername(objUser, nomUsuario){
        objUser.username=nomUsuario;
        return objUser
    }
    
    static getAllUsernames(arrUsername){
        let user=[]
        arrUsername.forEach(usrName =>{
            Object.entries(usrName).forEach(([key,value])=>{
                if (key ==="username"){
                    user.push(value);
                }
            })
        })
        return user
    }




    set setID(newId){
        this.id = newId
    }
    set setUsername(newUsername){
        this.username = newUsername
    }

    set setName(newName){
        this.name = newName
    }

    set setBio(newBio){
        this.bio = newBio
    }

    get getID(){
        return this.id;
    }
    get getUserName(){
        return this.username;
    }
    get getName(){
        return this.name;
    }
    get getBio(){
        return this.bio;
    }





}

module.exports = UserService