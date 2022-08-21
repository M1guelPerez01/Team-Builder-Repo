const inquirer = require('inquirer');
const fs = require('fs');
const createTeam = require('');

const manager = require('./library/manager');
const engineer = require('./library/engineer');
const intern = require('./library/intern');

const newTeammate = [];

const questions = async () => {
    const answers = await inquirer
    .prompt([
        {
          type: 'input',
          name: 'name',
          message: 'What is your name?',
          validate: (value)=>{ if(value){return true} else {return "input value to continue"}}
        },
        {
          type: 'input',
          name: 'email',
          message: 'what is your email',
          validate: (value)=>{ if(value){return true} else {return "input value to continue"}}
        },
        {
          type: 'input',
          name: 'github',
          message: 'what is your github username',
          validate: (value)=>{ if(value){return true} else {return "input value to continue"}}
        },
        {
          type: 'input',
          name: 'role',
          message: 'which role were you given?, engineer, intern, or manager?',
          validate: (value)=>{ if(value){return true} else {return "input value to continue"}}
        },
      ])
      
    
    .then((data)=>{
      writeToFile(data);
    })
    
}

function createTeam () {
    console.log('New Member', newTeammate)
    fs.writeFileSync(
        "",
        createTeam(newTeammate)
    )
};