// Q1 - Given an array of numbers, use the map function with an arrow function to square each element of the array.

// const arr=[2,3,4,5,6,7,8,9];
// const square=arr.map((x)=>x*x);
// console.log(square); // [4, 9, 16, 25, 36, 49, 64, 81]


// Q2 - Write a JavaScript function that takes a student's score as a parameter and returns their grade (A, B, C, D, or F) using a series of ternary operators..


// function grade(score) {
//         return score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C":score >= 60 ? "D" : "F";
// }
// console.log(grade(90)); // A
// console.log(grade(60)); // D
// console.log(grade(50)); // F


// Q3 - Create an object representing a car with properties like Company name, model, and year. Write a function to change the car's year property. Also use object destructuring to extract and print the car's Model and Year.


// const car = {
//         company: "honda",
//         model: "city",
//         year: 2023
//     }
//     function changeYear(year) {
//             car.year = year;
//             return car;
//         }
//         console.log(changeYear(2024));
//         console.log(car); // { company: 'honda', model: 'city', year: 2024 }
//         const {model,year}=car;
//         console.log(model,year); // city 2024



// Q4 - Given an array of numbers, use the filter function to create a new array containing only the prime numbers.

// const arr=[2,3,4,5,6,7,8,9,15,17];
// const prime=arr.filter((x)=>checkPrime(x));
// console.log(prime); // [2, 3, 5, 7]

// function checkPrime(num) {
//     for (let i = 2; i < num; i++) {
//         if (num % i == 0) return false;
//         }
//         return true;
//         }


// Q5 -  State different use cases of map, filter and reduce functions.

// 1. map - It is used to transform the array elements into a new array. It is used to perform the same operation on each element

// 2. filter - It is used to filter the array elements based on the condition. It is used to filter the array elements based on the condition

// 3. reduce - It is used to reduce the array elements into a single value. It is used to reduce the array elements into a single value



// Q6 - Write an asynchronous function using async-await  to fetch data from an API (you can use the JSONPlaceholder API) and log the result.



// const  getData=async ()=> {
//         const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//         const data = await response.json();
//       console.log(data);
//     }
//     getData(); // { userId: 1, id: 1, title: 'delectus aut autem', completed: false }


// Q7 - Define a nested object representing a person with properties like name, address, and contact. Use optional chaining to safely access the person's phone number, even if the contact property is missing.

const person = {
        name: 'John Doe',
        address: {
                street: '123 Main St',
                city: 'Anytown',
                state: 'CA',
                zip: '12345'
            },
            contact: {
                    phone: '555-555-5555',
                    email: 'johndoe@example.com'
                }
            };
            console.log(person.contact?.phone); // 555-555-5555
            console.log(person.contact?.email); // johndoe@example.com





