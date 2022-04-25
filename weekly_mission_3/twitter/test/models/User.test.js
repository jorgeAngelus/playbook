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
        expect(user.dateCreated).toBeUndefined("dateCreated")
        expect(user.lastUpdate).toBeUndefined("lastUpdate")
    });
})