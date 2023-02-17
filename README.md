# Password Generator

## Description

This web application is a random password generator. Through a series of alert, prompt and confirm boxes the user is able to construct a password meeting a set of criteria guiding its formation.

This project was built as an exercise in deepening my understanding of basic JavaScript. Variable declaration/initialization, conditional statements, functions, methods, and for/while loops were all utilized to achieve the intended goal of the application.

I was able to learn and build on JavaScript skills including those listed above as well as concatenating strings and following a logical structure of top-down code execution. 

GitHub Repo and Website links:

[GitHub Repo](https://github.com/edrezner/Password-Generator)

[Website](https://edrezner.github.io/Password-Generator/)

Here is an image of what the page looks like:
![Password Generator Image](./assets/Images/03-javascript-homework-demo.png)

## Usage

When loading the webpage, click the 'Generate Password' button and proceed through a series of input prompt and confirm boxes to select criteria for creation of a password. Once the user input of requested password length and character types desired is received, a password is generated in the text box that matches selected criteria. The criteria are password length, lower case letters, upper case letters, numbers, and special characters. 

One issue I know of is the inability of the function to take string type inputs from the user when prompted to pick a password length between 8 and 128 (ex. they accidentally hit a letter character on their keyboard or type out a value like "five"). I tried enable this functionality with a while loop and then an if conditional. My Instructor Diego tried to help me solve this, but I was unable to get a solution that worked in all instances of a user given prompt so I opted to remove it for now. 

## Credits

1. Found info for alert, prompt and confirm message boxes here: https://www.tutorialsteacher.com/javascript/display-popup-message-in-javascript#:~:text=alert(message)%3A%20Display%20a,the%20OK%20and%20Cancel%20buttons.

2. I reviewed this lesson at freecodecamp to insert quotes within a string https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/escape-sequences-in-strings

3. MDN web doc page on while loops https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#while_statement 
Enrique, my TA helped me with my while loop on line 29. I had it as an if conditional and he showed why it wouldn't work since it doesn't iterate.

4. My TA Enrique helped explain the final for loop on line 71 and the methods therein.

5. Looked up how to generate random strings at stackoverflow https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript

    Also looked up a similar method at this site https://www.programiz.com/javascript/examples/generate-random-strings

    These two sources helped me to write the for loop to construct the final  password.





