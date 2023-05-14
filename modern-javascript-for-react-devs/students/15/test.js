const changeStuff = (a, b, c) => {
    a = a * 10;
    b.firstName = 'a';
    c = {firstName: 'Charlie'}
}

let num = 10;
let person1 = {firstName: "Alice"};
let person2 = {firstName: "Bob"};

changeStuff(num, person1, person2)

console.log(num);
console.log(person1.firstName);
console.log(person2.firstName);