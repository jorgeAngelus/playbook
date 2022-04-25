const Spiderman = require('./../app/spiderman')
/*describe("Test Suite Dummy Description", () => {
    test('Case 1 Dummy', () => {
      const resultOfSomething = 1 + 2
      expect(resultOfSomething).toBe(18);
    });
  })*/

describe("Unit test for Spiderman Class",() =>{
    test('1) Create an spiderman object',() =>{

        //Aqui escribimos el código que queremos usar tal cuál
        //Quiero poder instanciar un objeto Spiderman con esta informacion
        const spider = new Spiderman("Spiderman Marver",28,"Holand",3,"Marvel")

        //Validacion que este codigo funcione de la forma esperada

        expect(spider.name).toBe("Spiderman Marver")
        expect(spider.age).toBe(28)
        expect(spider.actor).toBe("Holand")
        expect(spider.numFilms).toBe(3)
        expect(spider.studio).toBe("Marvel")
    });
})

