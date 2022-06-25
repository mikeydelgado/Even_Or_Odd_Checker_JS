
const ps = require("prompt-sync");
const prompt = ps();

let name = prompt("enter a number: ");
parseInt(name);
console.log(`You have chosen ${name}`);

//if you're running this with no packages (without the 
//prompt sync module) installed simply comment 
//out lines 1 to 8 then change the "name" 
//value to your desired value in line 14

for(i = 0; i <= name; i++){
    if(Number.isInteger(i/2)){
        console.log(`${i} is even`);
    } else {
        console.log(`${i} is odd`)
    }
}
