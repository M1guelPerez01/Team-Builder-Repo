const employee = require("./employee");

class engineer extends employee {
   constructor (name, email, github) {
       super(name,email)
       this.name = name
   }
   getRole(){
       return 'engineer'
   }
   getGithub(){
       return this.github
   }
}

module.exports = engineer;