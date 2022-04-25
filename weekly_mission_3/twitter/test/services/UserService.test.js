const UserService = require('./../../app/services/UserService')

describe("Test for UserService",() =>{
    test("1. Create a new user using the UserService",() =>{
        const user = UserService.create(1,"jorgemc","Jorge")
        expect(user.username).toBe("jorgemc")
        expect(user.name).toBe("Jorge")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    });

    test("2. Get all user data in a list",() =>{
        const user = UserService.create(1,"jorgemc07","Jorge")
        const userInfoInList = UserService.getInfo(user)

        expect(userInfoInList[0]).toBe(1)
        expect(userInfoInList[1]).toBe("jorgemc07")
        expect(userInfoInList[2]).toBe("Jorge")
        expect(userInfoInList[3]).toBe("Sin bio")
    });

    /*test("3 Update username",() =>{
        const user = UserService.create(1,"jorgemc07","Jorge")
        UserService.updateUsername(user,"jorgemc07")
        expect(user.username).toBe("jorgemc07")
    })*/
})