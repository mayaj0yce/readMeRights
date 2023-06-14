# readMeRights
creates a readMe for user

prompt for the imputed imformation 
spits out read me with 
- description
- table of contents
    - that works
- installation
- usage
- license
    - list of options (below)
    - link api for the licenses // no
- contributing
- tests
- questions
    - information and contact here as well


project title becomes the read me title
git hub username that is a link to the git hub page
email added (and instructions to contact user)
table of contents works

license list = 
{
none 
Apache License 2.0 (apache-2.0)
GNU General Public License v3.0 (gpl-3.0)
MIT License (mit)
BSD 2-Clause "Simplified" License (bsd-2-clause)
BSD 3-Clause "New" or "Revised" License (bsd-3-clause)
Boost Software License 1.0 (bsl-1.0)
Creative Commons Zero v1.0 Universal (cc0-1.0)
Eclipse Public License 2.0 (epl-2.0)
GNU Affero General Public License v3.0 (agpl-3.0)
GNU General Public License v2.0 (gpl-2.0)
GNU Lesser General Public License v2.1 (lgpl-2.1)
Mozilla Public License 2.0 (mpl-2.0)
The Unlicense (unlicense)
}


GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
