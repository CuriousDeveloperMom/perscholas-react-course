
function sayHi(name: string): string{
    return `Hi, ${name}!`;
}

function sayHi(name: string): void{
    console.log(`Hi, ${name}!`);
}

function sayHi(name: string): string{
    return `Hi, ${name}!`;
}

function sayHi(name: string, city?: string): string | object{
//function sayHi(name: string, city?: string): string | any{
    if(city){
        return {
            name,
            city,
        };
    }
    return `Hi, ${name}!`;
}

type HiResponse = {
    name: string;
    city?: string;
}

function sayHi(name: string, city?: string): HiResponse{
    if(city){
        return {
            name,
            city,
        };
    }
    return `Hi, ${name}!`;
}

const response: HiResponse = sayHi("Priti", "Monroe");
const city = response.city;
console.log(city);


console.log(sayHi("Priti"));
console.log(sayHi("Priti", "Monroe"));