const UserService = require('./../../app/services/UserService')

describe("Test for UserService",() =>{
    test("1. Create a new user using the UserService",() =>{
        const user = UserService.Create(1,"jorgemc","Jorge")
        expect(user.username).toBe("jorgemc")
        expect(user.name).toBe("Jorge")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    });
})