// Iteration 1: Names and Input

const hacker1 = "Sebastian";

console.log(`The driver's name is ${hacker1} `);

const hacker2 = "Margo";

console.log(`The navigator's name is ${hacker2} `);

// Iteration 2: Conditionals

if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`);
}

else if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}   
else {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}

// Iteration 3: Loops

let myString = "";
for (let i = 0; i < hacker1.length; i++) {
    myString += hacker1[i].toUpperCase() +" ";
}

console.log(myString);


let myString2 = "";
for (let i = hacker2.length-1; i >= 0; i--) {
    myString2 += hacker2[i];
}

console.log(myString2);

do {
    if(hacker1[0].charAt(0) < hacker2[0].charAt(0)) {
        console.log("The driver's name goes first.");
    }
    else if (hacker1[0].charAt(0) > hacker2[0].charAt(0)) {
        console.log("Yo, the navigator goes first, definitely.");
    }
    else {
        console.log("What?! You both have the same name?");
    }
} while (false);

// Bonus 1

const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non sodales magna, et laoreet odio. In eu mi vitae nunc ultricies scelerisque sit amet sed arcu. Vivamus quis imperdiet ante. Praesent aliquam eros aliquet dui laoreet tristique. In blandit, erat quis consectetur ultrices, lacus lorem efficitur lectus, ac ultrices diam mi eu augue. Donec tempor sapien non sem bibendum gravida. Phasellus sit amet lorem malesuada, maximus risus ac, sollicitudin nisl. Sed convallis ex eros, eget tincidunt massa viverra in. Sed ornare massa sapien, sed lobortis est consectetur at. Donec et magna eget purus mollis pharetra ac in felis. Fusce quis sem commodo, molestie urna non, vehicula nulla. Aenean porta scelerisque egestas. Phasellus a interdum nulla.

Fusce at gravida nunc, nec volutpat quam. Duis at urna justo. Cras consectetur fermentum placerat. Pellentesque ut diam non magna fringilla blandit. Pellentesque porta tortor neque, quis posuere magna volutpat eget. Phasellus massa lectus, viverra vitae massa consectetur, imperdiet imperdiet ante. Fusce non diam nec leo aliquet ullamcorper id id ante. Curabitur eget libero elementum eros molestie consequat. Aliquam non felis aliquet, mollis nisl eu, bibendum lectus. Morbi volutpat risus eros, vel accumsan ligula sollicitudin in. Quisque at sapien sit amet tortor cursus malesuada vitae quis nisl. Morbi quis nulla venenatis justo sollicitudin convallis. In sit amet lacus mollis, porta nunc accumsan, volutpat lacus.

Nam tempus, est et tincidunt viverra, quam lectus mattis enim, ut ullamcorper neque enim eu nisi. Vestibulum fringilla egestas eleifend. Etiam est arcu, laoreet ac dolor quis, vehicula convallis tellus. Ut iaculis in felis ut elementum. Aenean sed fringilla ipsum. In tristique suscipit justo. Cras tellus est, mollis sit amet posuere eu, pretium eget lectus. Nunc in consectetur metus. Donec eget porttitor mi. Nam ut tempor odio. Praesent venenatis metus vitae dui pellentesque, et facilisis diam cursus. Donec erat erat, lobortis eget malesuada varius, lobortis vitae nunc. Aenean consectetur erat nunc, et mattis quam dictum vel. Praesent tempus risus nibh, quis consequat nisl posuere nec. Pellentesque sagittis eu justo quis consectetur. Proin eu felis ut purus tempus vehicula.`;


let wordCount = 0;
for (const value of longText) {
    console.log(value);
    if (value ===" ") {
        wordCount += 1;
    }
}

console.log(`Number of words: ${wordCount +1}`);


let wordEt = 0;
for (let i = 0; i < longText.length-1; i++) {
    const twoLetters = longText[i] + longText[i+1];
    if (twoLetters ==="et") {
        console.log(twoLetters);
        wordEt += 1;
    }
}

console.log(wordEt);


// Bonus 2

let myString3 = "A man, a plan, a canal, Panama!";
let myString4 = myString3.replace(/[^a-zA-Z0-9 ]/g, '');
myString4 = myString4.replace(/\s/g, '').toLowerCase();

myStringReverse = myString4.split("").reverse().join("");


if (myString4 === myStringReverse) {
    console.log("This is a Palindrome");
} 
else {
    console.log("This is not a Palindrome");
}

