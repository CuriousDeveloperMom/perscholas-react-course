type PersonInfo = {
    name: string;
    city?: string;
};


 
function sayHi(info: PersonInfo): void {
    if (info.city) {
        console.log("Hello");
    } else {
        console.log("Hi");
    }
}

console.log(sayHi("Priti"));