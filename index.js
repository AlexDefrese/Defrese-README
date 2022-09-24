// TODO: Include packages needed for this application
const inquirer = require ('inquirer');
const fs = require ('fs');
const { type } = require('os');
const generateMarkdown = require ('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const init = () => [
   inquirer.prompt([
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title',
            validate: (titleInput)=> { if(titleInput){return true}else {return 'Please enter a project title to proceed.'}},
        },
        {
            type: 'input',
            message: 'Please describe your project:',
            name: 'description',
            validate: (descriptionInput)=> { if(descriptionInput){return true}else {return 'Please describe your project to proceed.'}},
        },
        {
            type: 'input',
            message: 'How do you install your project?',
            name: 'install',
            validate: (installInput)=> { if(installInput){return true}else {return 'Please provide installation instructions to proceed.'}},
        },
        {
            type: 'input',
            message: 'How do you you use your project?',
            name: 'usage',
            validate: (usageInput)=> { if(usageInput){return true}else {return 'Please provide instructions on how to use your project to proceed.'}},
        },
        {
            type: 'list',
            message: 'Which license applies:',
            name: 'license',
            choices: ['MIT', 'GPL', 'Apache', 'GNU', 'N/A'],
            validate: (licenseInput)=> { if(licenseInput){return true}else {return 'Please provide a license for your project to proceed.'}},
        },
        {
            type:'input',
            message: 'Who contributed to this project?',
            name: 'contributors',
            validate: (contributeInput)=> { if(contributeInput){return true}else {return 'Please provide the names of the contributors for your project to proceed.'}},
        },
        {
            type: 'input',
            message: 'How should your project be tested?',
            name: 'testing',
            validate: (testInput)=> { if(testInput){return true}else {return 'Please provide a way to test your project to proceed.'}},
        },
        {
            type: 'input',
            message: 'Please provide your GitHub username:',
            name: 'github',
            validate: (githubInput)=> { if(githubInput){return true}else {return 'Please provide your GitHub username to proceed.'}},
        },
        {
            type: 'input',
            message: 'Please provide an email address you can be reached at if there are any questions:',
            name: 'email',
            validate: (emailInput)=> { if(emailInput){return true}else {return 'Please provide an email address to proceed.'}},
        }

    ]),
];



// // TODO: Create a function to write README file
const writeFile = (fileContent) => {
    return new Promise((resolve, reject) => {
      fs.writeFile('./Defrese-README/README.md', fileContent, (err) => {
        if (err) {
          reject(err);
          console.log('There was an issue creating the file, please try again.');
          return;
        }
        resolve({
          ok: true,
          message: "README created!",
        });
      });
    });
  };

// // TODO: Create a function to initialize app
init()
    inquirer.prompt(questions)
        .then(function(questions){
            console.log(questions);
        var fileContent = generateMarkdown(answer);
        writeToFile(fileContent)
        });


// // Function call to initialize app


module.exports = questions; 