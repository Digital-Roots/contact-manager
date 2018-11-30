#!/usr/bin/env node
const program = require('commander');
const { prompt } = require('inquirer');

const questions = [
  {
    type : 'input',
    name : 'firstname',
    message : 'Enter firstname ...'
  },
  {
    type : 'input',
    name : 'lastname',
    message : 'Enter lastname ...'
  },
  {
    type : 'input',
    name : 'phone',
    message : 'Enter phone number ...'
  },
  {
    type : 'input',
    name : 'email',
    message : 'Enter email address ...'
  }
];

const {
  addContact,
  getContact,
  updateContact,
  deleteContact,
  getContactList
} = require('./logic');

program
  .version('0.0.1')
  .description('Contact managment system');

program
  .command('addContact ')
  .alias(' add')
  .description('Add a contact')
  .action(() =>{
    prompt(questions).then(answers =>
      addContact(answers));
  });

program
  .command('getContact <name> ')
  .alias(' get')
  .description('Get contact')
  .action(name => getContact(name));

program
  .command('updateContact <_id> ')
  .alias(' update')
  .description('Update contact')
  .action(_id => {
    prompt(quetions).then((answers) =>
    updateContact(_id, answers));
})

program
  .command('deleteContact <_id> ')
  .alias(' delete')
  .description('Delete contact')
  .action(_id => deleteContact(_id));

program
  .command('getContactList ')
  .alias(' list')
  .description('List contacts')
  .action(() => getContactList());

program.parse(process.argv);
