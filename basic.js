const notes = require('./notes');
const chalk = require('chalk'); // use for better colorin on terminal
const yargs = require('yargs'); // use for handling command line smartly
const log = console.log;
 
// Combine styled and normal strings
log(chalk.blue('Hello') + ' World' + chalk.red('!'));
console.log(yargs.argv);
yargs.command({
    command:'add',
    description:'adding a note',
    handler:function(){
        console.log("added a new note");
    }
})

debugger

const data ={
    title :"this is the title",
    name:"this is the name"
}

console.log(JSON.stringify(data));

const parseData = JSON.parse(JSON.stringify(data));
console.log(parseData);
console.log(notes());
console.log(process.argv); // to execute the command line arguments