/*import { log } from './logger.js'*/
import { Logger,LEVELS } from './logger.js'  
//importa alguno de los elementos definidos en logger.js *Logger es la clase 
// y LEVELS es un objeto

//log('Hello world')

const objectClass = new Logger("ClaseLogger")
objectClass.log("primer mensaje")

console.log(LEVELS.info)
