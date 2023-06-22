# readMe
https://github.com/mayaj0yce/readMeRights.git


This is a README generator. It will ask you questions based on your project and then generate a README based on your answers.
This is the final look

![Screenshot (42)](https://github.com/mayaj0yce/readMeRights/assets/129634010/ae859567-a047-4403-9dc5-015bf14dd222)
![Screenshot (43)](https://github.com/mayaj0yce/readMeRights/assets/129634010/339f692c-c130-47f6-bcfb-43ac0daaae9a)


using the Inquire function the following questions are asked and put into an HTML document already programed. 
   {
            type: "input",
            name: "title",
            message: "Title of your project:",
        },
        {
            type: "input",
            name: "description",
            message: "Please give a short description of your project:",
        },
        {
            type: "input",
            name: "instalation",
            message: "How does one install the application?",
        },
        {
            type: "input",
            name: "usage",
            message: "what can this application be used for?",
        },
        {
            type: "input",
            name: "test",
            message: "What Tests have been done?",
        },
        {
            type: "input",
            name: "contributing",
            message: "How can people help contribute?",
        },
        {
            type: "list",
            name: "license",
            message: "Select your license",
            choices: [
                'none',
                'Apache License 2.0',
                'MIT License',
            ],
        },
        {
            type: "input",
            name: "email",
            message: "Enter a Valid Email",
        },
        {
            type: "input",
            name: "gitHubLink",
            message: "Provide GitHub LINK",
        },

This was my 'todo' list for the project. 
Contains
prompt for the imputed imformation 
spits out read me with 
- description
- table of contents
    - that works
- installation
- usage
- license
    - list of options (below) using the prompt list function I will be adding in the licenses. This will be done using a variable 
    - link api for the licenses // no
- contributing
- tests
- questions
    - information and contact here as well

The following licenses are the ones I used. 
none 
Apache License 2.0 (apache-2.0)
MIT License (mit)


This is the project in action:[readmeVideo.zip](https://github.com/mayaj0yce/readMeRights/files/11829224/readmeVideo.zip)




