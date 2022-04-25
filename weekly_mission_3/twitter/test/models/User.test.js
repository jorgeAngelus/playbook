const User = require("./../../app/models/User")

describe("Unit Test for User Class",() =>{
    test('Create an User object',() =>{
        //codigo de la app
        const user = new User(1,"jorgemc07","Jorge","Bio")

        //validando resultados
        expect(user.id).toBe(1)
        expect(user.username).toBe("jorgemc07")
        expect(user.name).toBe("Jorge")
        expect(user.bio).toBe("Bio")
        //expect(user.dateCreated).toBeUndefined("dateCreated")
        //expect(user.lastUpdate).toBeUndefined("lastUpdate")
    });
    test('Add getters',() =>{
        const user = new User(1,"jorgemc0710","Jorge","Bio")
        expect(user.getUsername).toBe("jorgemc0710")
        expect(user.getBio).toBe("Bio")
        expect(user.getDateCreated).not.toBeUndefined()
        expect(user.getLastUpdated).not.toBeUndefined()

    });

    test('Add setters',() =>{
        const user = new User(1,"jorgemc0710","Jorge","Bio")
        user.setUsername = "JorgeMC"
        expect(user.username).toBe("JorgeMC")

        user.setBio = "New bio"
        expect(user.bio).toBe("New bio")
    });
})
