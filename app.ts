#! /usr/bin/env node

import inquirer from "inquirer";

let myCalulator = await inquirer.prompt([

    {
        message : "Plz Enter First Number",
        type : 'number',
        name : 'firstNumber'

    },
    {
        message : "Plz Enter Second Number",
        type : 'number',
        name : 'secondNumber'

    },

    {
        message : "Plz Select the operator",
        type : 'list',
        name : 'operator',
        choices : ['Addition', 'Multiply', 'Divide', 'Substraction']

    }


])

if (myCalulator.operator === 'Addition'){

    console.log(myCalulator.firstNumber + myCalulator.secondNumber);
    

}else if (myCalulator.operator === 'Divide'){

    console.log(myCalulator.firstNumber / myCalulator.secondNumber);
    

}else if (myCalulator.operator === 'Multiply'){

    console.log(myCalulator.firstNumber * myCalulator.secondNumber);
    

}else if (myCalulator.operator === 'Substraction'){

    console.log(myCalulator.firstNumber - myCalulator.secondNumber);
    

}else {

    console.log('Something is wrong');
    
}