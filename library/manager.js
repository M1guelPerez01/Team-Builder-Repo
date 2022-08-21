const employee = require("./employee");

class manager extends employee {
    constructor (name, email,){
        super(name,email)
        this.name =name
    }
    getRole(){
        return 'manager'
    }

    getEmail () {
        return this.email
    }
    
  
}

module.exports = manager;