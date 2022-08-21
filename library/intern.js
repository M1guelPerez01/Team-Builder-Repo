const employee = require("./employee");

class intern extends employee {
  constructor (name, email,){
      super(name, email)
      this.name = name
  }
  getRole(){
    return 'intern'
}
getEmail () {
    return this.email
}

}

module.exports = intern;