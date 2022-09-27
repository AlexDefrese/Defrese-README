// packages needed
const inquirer = require ('inquirer');
const fs = require ('fs');
const path = require('path');
const generateMarkdown = require ('./utils/generateMarkdown')

// question array
   const questions = [
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
            type: 'rawlist',
            message: 'Which license applies: (Note: please choose last item if no license was used)',
            name: 'license',
            choices: ['MIT', 'GPL', 'Apache', 'GNU', ''],
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

    ];


// function that writes file
function writeToFile (fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName), data);
    
}

// initializes generateMarkdown once questions are answered
function init() {
    inquirer.prompt(questions)
        .then(fileContent => {
        writeToFile('README.md', generateMarkdown({ ...fileContent }))
    console.log('README.md created!');

        });
};

// Function call to initialize app
init ();
