class employee {
    constructor(name, email) {
      this.name = name;
      this.email = email;
    }
  
    getName() {
      return this.name
      
      }
  
    getEmail() {
      return this.email
        
      }
    getRole() {
      return 'employee';
    }
  }
  
  module.exports = employee;