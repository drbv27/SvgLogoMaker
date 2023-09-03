const inquirer = require('inquirer');
const fs = require('fs');
const {Triangle, Circle, Square} = require('./lib/shapes');

const questions = [
    {
        type: 'input',
        name :'text',
        message : 'Enter text for Logo (please enter 3 characters)',
    
        validate: (response) => {
            if (response.length > 3) {
                 console.log("\n Text must be three characters or less! Please try again ");
                 return;     
            }
            return true;         
        } 
    },

    {
        type: 'input',
        name :'textColor',
        message : 'Enter color name  or a hex number of the Text',
    },
    {
        type: 'list',
        name :'shapeType',
        message : 'Select a shape for the logo',
        choices : ['Circle','Square','Triangle'],
    },
    {
        type: 'input',
        name :'shapeColor',
        message : 'Enter color name  or a hex number of the Shape',
    },

];
inquirer.prompt(questions)
.then((response) => {
    const text = response.text;
    const textColor = response.textColor;
    const shapeType = response.shapeType;
    const shapeColor = response.shapeColor;

         generateShapes(text,textColor,shapeType,shapeColor);
})
.catch((err) => console.log(err));

function generateShapes(text, textColor, shapeType, shapeColor) {
    if (shapeType === 'Triangle') {
        const triangle = new Triangle(text, textColor, shapeColor)
        return fs.writeFile('logo.svg',triangle.render(),(err) => {
            if(err) {
                console.log(err);
            }
            else {
                console.log("logo.svg was generated!");
            }
        });   
       
    }

    if (shapeType === 'Circle') {
        const circle = new Circle(text, textColor, shapeColor)
        return fs.writeFile('logo.svg',circle.render(),(err) => {
            if(err) {
                console.log(err);
            }
            else {
                console.log("logo.svg was generated!");
            }
        });   
    }

    if (shapeType === 'Square') {
        const square = new Square(text, textColor, shapeColor)
        return fs.writeFile('logo.svg',square.render(),(err) => {
            if(err) {
                console.log(err);
            }
            else {
                console.log("logo.svg was generated!");
            }
        });   
    }

}

